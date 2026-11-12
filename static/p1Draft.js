const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role');
const socket = io('http://127.0.0.1:5000');
const player1 = decodeURIComponent(urlParams.get('nickname1') || 'Игрок 1');
const player2 = decodeURIComponent(urlParams.get('nickname2') || 'Игрок 2');
const currentRole = role;
console.log(`Вы зашли как: ${currentRole}`);
document.querySelector('.nickname.player1').textContent = player1;
document.querySelector('.nickname.player2').textContent = player2;
const textCenter = document.querySelector('.text-center');
const button = document.querySelector('.confirm-section');
const timerSpan = document.getElementById('timer');
let timerInterval;
let currentPhase = 'ready';
let currentPlayer = player1;
let firstPlayer = Math.random() > 0.5 ? player1 : player2;
let confirmReadyCount = 0;

function sendAction(action) {
    socket.emit('player_action', action);
}

socket.on('update_action', (data) => {
    console.log('Действие получено:', data);
})

socket.on('player_ready', (data) => {
    if (data.player !== currentPlayer) {
        confirmReadyCount = data.readyCount;
        if (confirmReadyCount === 2) {
            currentPhase = 'picking';
            startPicksPhase();
        }
    }
});

function validateCurrentPick() {
    const characterSelected = document.querySelector('.pickColumn.player1.characters .pickRow[data-picked="true"]');
    const wEngineSelected = document.querySelector('.pickColumn.player1.wEngines .pickRow[data-picked="true"]');
    return characterSelected && wEngineSelected;
}

function sendPickData() {
    const character = document.querySelector('.pickColumn.player1.characters .pickRow[data-picked="true"]');
    const wEngine = document.querySelector('.pickColumn.player1.wEngines .pickRow[data-picked="true"]');
    const pickData = {
        player: currentPlayer,
        character: character.querySelector('.characterImage').dataset.name,
        mind: character.querySelector('.mind').textContent,
        wEngine: wEngine.querySelector('.wEngineImage').dataset.name,
        upgrade: wEngine.querySelector('.upgrade').textContent
    }
    sendAction({ type: 'pick', data: pickData });
}

function startTimer(time, onEndCallback) {
    console.log("Таймер стартовал на", time, "секунд");
    let timeLeft = time;
    timerSpan.textContent = timeLeft;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft -= 1;
        timerSpan.textContent = `(${timeLeft})`;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            if (typeof onEndCallback === 'function') onEndCallback();
            console.log("Таймер завершён");
        }
    }, 1000);
}

function handleTimeout() {
    alert(`${currentPlayer} не успел(а) выбрать!`);
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    startPicksPhase();
}

function checkPickCompletion() {
    const allCharactersPicked = !!document.querySelector('.pickColumn.player1.characters .pickRow:not([data-picked="true"])');
    const allWEnginesPicked = !!document.querySelector('.pickColumn.player1.wEngines .pickRow:not([data-picked="true"])');

    button.disabled = !(allCharactersPicked && allWEnginesPicked);
}

function handleCharacterPick(image) {
    const characterName = image.dataset.name;
    const characterRow = document.querySelector('.pickColumn.player1.characters .pickRow:not([data-picked="true"])');

    if (characterRow) {
        characterRow.querySelector('.characterImage').style.backgroundImage = image.style.backgroundImage;
        characterRow.querySelector('.characterName').textContent = characterName;
        characterRow.setAttribute('data-picked', 'true');

        image.classList.add('disabled');
        image.classList.remove('active');
        checkPickCompletion();
    }
}

function handleWEnginePick(image) {
    const wEngineName = image.dataset.name;
    const wEngineRow = document.querySelector('.pickColumn.wEngines .roomWEngineRow:not([data-picked="true"])');

    if (wEngineRow) {
        wEngineRow.querySelector('.wEngineImage').style.backgroundImage = image.style.backgroundImage;
        wEngineRow.querySelector('.wEngineName').textContent = wEngineName;
        wEngineRow.setAttribute('data-picked', 'true');

        image.classList.remove('active');
        checkPickCompletion();
    }
}

function setupPickHandlers() {
    document.querySelectorAll('.characterImage.active').forEach(image => {
        image.addEventListener('click', () => {
            handleCharacterPick(image);
        });
    });
    document.querySelectorAll('.wEngineImage.active').forEach(image => {
        image.addEventListener('click', () => {
            handleWEnginePick(image);
        });
    });
}

function startPicksPhase() {
    textCenter.textContent = `${currentPlayer} выбирает`;
    button.textContent = 'Подтвердите выбор';
    button.disabled = true;

    document.querySelectorAll('.grid-image').forEach(image => {
        const isCharacterAvailable = !image.classList.contains('disabled');
        image.classList.toggle('active', isCharacterAvailable && currentPlayer === firstPlayer);
    });

    startTimer(60, () => {
        console.log("Время выбора закончилось!");
        handleTimeout();
    });
    setupPickHandlers();
}

function startDraft() {
    console.log("Драфт начат");
    textCenter.textContent = `${firstPlayer} выбирает первым(ой)`;
    button.textContent = 'Подтвердить готовность    ';
    button.appendChild(timerSpan);
    document.querySelectorAll('.grid-image').forEach(image => image.classList.remove('active'));

    startTimer(10, () => {
        textCenter.textContent = 'Приготовьтесь к фазе выборов';
        button.disabled = false;
        timerSpan.textContent = '';
    });
}

button.addEventListener("click", () => {
    if (currentPhase === 'ready') {
        confirmReadyCount += 1;
        button.disabled = true;
        button.textContent = 'Ожидание готовности оппонента';

        socket.emit('player_ready', { player: currentPlayer, readyCount: confirmReadyCount });
    
        if (confirmReadyCount === 2) {
            currentPhase = 'picking';
            startPicksPhase();
        }
    } else if (currentPhase === 'picking') {
        if (validateCurrentPick()) {
            sendPickData();
            currentPlayer = currentPlayer === player1 ? player2 : player1;
            startPicksPhase();
        } else alert('Вы должны выбрать персонажа и амплификатор перед подтверждением!');
    }
});

let selectedCharacter = null;
let selectedWEngine = null;

function showDropdown(dropdown, target) {
    const rect = target.getBoundingClientRect();
    dropdown.style.left = `${rect.right + 10}px`;
    dropdown.style.top = `${rect.top}px`;
    dropdown.classList.remove('hidden');
}

function hideDropdown(dropdown) {
    dropdown.classList.add('hidden');
}

let activeDropdown = null;

function attachDropdownHandlers(dropdown, onSelect) {
    dropdown.querySelectorAll('li').forEach(item => {
        const newItem = item.cloneNode(true);
        item.parentNode.replaceChild(newItem, item);
        newItem.addEventListener('click', () => {
            onSelect(newItem.dataset);
        });
    });
}

document.querySelectorAll('.characterImage.grid-image').forEach(image => {
    image.addEventListener('click', (e) => {
        if (e.target.closest('.pickColumn')) return;

        selectedCharacter = e.target;
        const mindDropdown = document.getElementById('mindDropdown');
        showDropdown(mindDropdown, selectedCharacter);

        attachDropdownHandlers(mindDropdown, (data) => {
            const characterName = selectedCharacter.dataset.name;
            const mind = data.mind;
            const currentPlayerColumn = document.querySelector(`.pickColumn.player1.characters`);
            const row = currentPlayerColumn.querySelector('.pickRow.player1:not([data-picked="true"])');

            if (row) {
                row.querySelector('.characterImage.pick-image').style.backgroundImage = selectedCharacter.style.backgroundImage;
                row.querySelector('.characterName').textContent = characterName;
                row.querySelector('.mind').textContent = mind;
                row.setAttribute('data-picked', 'true');

                selectedCharacter.classList.add('disabled');
                hideDropdown(mindDropdown);
            }
        });
    });
});

document.querySelectorAll('.wEngineImage.grid-image').forEach(image => {
    image.addEventListener('click', (e) => {
        if (e.target.closest('.pickColumn')) return;

        selectedWEngine = e.target;
        const upgradeDropdown = document.getElementById('upgradeDropdown');
        showDropdown(upgradeDropdown, selectedWEngine);

        attachDropdownHandlers(upgradeDropdown, (data) => {
            const wEngineName = selectedWEngine.dataset.name;
            const upgrade = data.upgrade;
            const currentPlayerColumn = document.querySelector(`.pickColumn.player1.wEngines`);
            const row = currentPlayerColumn.querySelector('.pickRow.player1:not([data-picked="true"])');

            if (row) {
                row.querySelector('.wEngineImage.pick-image').style.backgroundImage = selectedWEngine.style.backgroundImage;
                row.querySelector('.wEngineName').textContent = wEngineName;
                row.querySelector('.upgrade').textContent = upgrade;
                row.setAttribute('data-picked', 'true');

                hideDropdown(upgradeDropdown);
            }
        });
    });
});

document.querySelector('.charactersSearch input').addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    document.querySelectorAll('.characterImage.grid-image').forEach(image => {
        const name = image.getAttribute('data-name').toLowerCase();
        image.style.display = name.includes(searchQuery) ? 'block' : 'none';
    });
});

document.querySelector('.wEnginesSearch input').addEventListener('input', (e) => {
    const searchQuery = e.target.value.toLowerCase();
    document.querySelectorAll('.wEngineImage.grid-image').forEach(image => {
        const name = image.getAttribute('data-name').toLowerCase();
        image.style.display = name.includes(searchQuery) ? 'block' : 'none';
    });
});

document.querySelector('.cross.character').addEventListener('click', () => {
    const input = document.querySelector('.charactersSearch input');
    input.value = '';
    document.querySelectorAll('.characterImage.grid-image').forEach(image => {
        image.style.display = 'block';
    });

    input.blur();
});

document.querySelector('.cross.wEngine').addEventListener('click', () => {
    const input = document.querySelector('.wEnginesSearch input');
    input.value = '';
    document.querySelectorAll('.wEngineImage.grid-image').forEach(image => {
        image.style.display = 'block';
    });
    
    input.blur();
});

let activeCharacterSpecialty = null;
let activeWEngineSpecialty = null;
let activeAtribute = null;
let activeRank = null;

function applyCharacterFilters() {
    document.querySelectorAll('.characterImage.grid-image').forEach(character => {
        if (character.closest('.pickColumn.characters')) return;
        const matchesSpecialty = activeCharacterSpecialty
            ? character.dataset.specialty === activeCharacterSpecialty
            : true;
        const matchesAtribute = activeAtribute
            ? character.dataset.atribute === activeAtribute
            : true;
        if (matchesSpecialty && matchesAtribute) {
            character.classList.remove('filtered');
        } else {
            character.classList.add('filtered');
        }
    });
}

function applyWEngineFilters() {
    document.querySelectorAll('.wEngineImage.grid-image').forEach(wEngine => {
        if (wEngine.closest('.pickColumn.wEngine')) return;
        const matchesSpecialty = activeWEngineSpecialty
            ? wEngine.dataset.specialty === activeWEngineSpecialty
            : true;
        const matchesRank = activeRank
            ? wEngine.dataset.rank === activeRank
            : true;

        if (matchesSpecialty && matchesRank) {
            wEngine.classList.remove('filtered');
        } else {
            wEngine.classList.add('filtered');
        }
    });
}

document.querySelectorAll('.specialtiesIcon.character').forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedSpecialty = icon.dataset.specialty;
        const isActive = icon.classList.contains('active');

        document.querySelectorAll('.specialtiesIcon.character').forEach(el => el.classList.remove('active'));

        if (isActive) {
            activeCharacterSpecialty = null;
        } else {
            icon.classList.add('active');
            activeCharacterSpecialty = selectedSpecialty;
        }

        applyCharacterFilters();
    });
});

document.querySelectorAll('.atributesIcon').forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedAtribute = icon.dataset.atribute;
        const isActive = icon.classList.contains('active');

        document.querySelectorAll('.atributesIcon').forEach(el => el.classList.remove('active'));

        if (isActive) {
            activeAtribute = null;
        } else {
            icon.classList.add('active');
            activeAtribute = selectedAtribute;
        }

        applyCharacterFilters();
    });
});

document.querySelectorAll('.specialtiesIcon.wEngine').forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedSpecialty = icon.dataset.specialty;
        const isActive = icon.classList.contains('active');

        document.querySelectorAll('.specialtiesIcon.wEngine').forEach(el => el.classList.remove('active'));

        if (isActive) {
            activeWEngineSpecialty = null;
        } else {
            icon.classList.add('active');
            activeWEngineSpecialty = selectedSpecialty;
        }

        applyWEngineFilters();
    });
});

document.querySelectorAll('.ranksIcon').forEach(icon => {
    icon.addEventListener('click', () => {
        const selectedRank = icon.dataset.rank;
        const isActive = icon.classList.contains('active');

        document.querySelectorAll('.ranksIcon').forEach(el => el.classList.remove('active'));

        if (isActive) {
            activeRank = null;
        } else {
            icon.classList.add('active');
            activeRank = selectedRank;
        }

        applyWEngineFilters();
    });
});

startDraft();
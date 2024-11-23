const characters = [{
    i: 1,
    name: 'Антон Иванов',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Нападение',
    faction: 'Комбинат Белобог'
}, {
    i: 2,
    name: 'Бен Биггер',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Оборона',
    faction: 'Комбинат Белобог'
}, {
    i: 3,
    name: 'Билли Кид',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Хитрые зайцы'
}, {
    i: 4,
    name: 'Бёрнис Уайт',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Огонь',
    specialty: 'Аномалия',
    faction: 'Сыны Калидона'
}, {
    i: 5,
    name: 'Грейс Ховард',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Аномалия',
    faction: 'Комбинат Белобог'
}, {
    i: 6,
    name: 'Джейн Доу',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Физический',
    specialty: 'Аномалия',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 7,
    name: 'Коляда Белобог',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Устрашение',
    faction: 'Комбинат Белобог'
}, {
    i: 8,
    name: 'Корин Уинкс',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Агентство домашнего персонала Виктория'
}, {
    i: 9,
    name: 'Фон Ликаон',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Лёд',
    specialty: 'Оборона',
    faction: 'Агентство домашнего персонала Виктория'
}, {
    i: 10,
    name: 'Люсиана де Монтефио',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Поддержка',
    faction: 'Сыны Калидона'
}, {
    i: 11,
    name: 'Николь Демара',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Эфир',
    specialty: 'Поддержка',
    faction: 'Хитрые зайцы'
}, {
    i: 12,
    name: 'Нэкомия Мана',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Хитрые зайцы'
}, {
    i: 13,
    name: 'Пайпер Уил',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Аномалия',
    faction: 'Сыны Калидона'
}, {
    i: 14,
    name: 'Александрина Себастиан',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Поддержка',
    faction: 'Агентство домашнего персонала Виктория'
}, {
    i: 15,
    name: 'Сет Лоуэлл',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Оборона',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 16,
    name: 'Сокаку',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Лёд',
    specialty: 'Поддержка',
    faction: 'Секция 6'
}, {
    i: 17,
    name: 'Солдат 11',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Нападение',
    faction: 'Отряд Обол'
}, {
    i: 18,
    name: 'Цезарь Кинг',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Физический',
    specialty: 'Оборона',
    faction: 'Сыны Калидона'
}, {
    i: 19,
    name: 'Цинъи',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Электро',
    specialty: 'Устрашение',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 20,
    name: 'Чжу Юань',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Эфир',
    specialty: 'Нападение',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 21,
    name: 'Эллен Джо',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Лёд',
    specialty: 'Нападение',
    faction: 'Агентство домашнего персонала Виктория'
}, {
    i: 22,
    name: 'Энби Демара',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Устрашение',
    faction: 'Хитрые зайцы'
}, {
    i: 23,
    name: 'Цукисиро Янаги',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Электро',
    specialty: 'Аномалия',
    faction: 'Секция 6'
}
];

const wEngines = [{
    i: 1,
    name: 'Встроенный компилятор',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 2,
    name: 'Заострённые шипы',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 3,
    name: 'Ткач времени',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 4,
    name: 'Шейкер-огнемейкер',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 5,
    name: 'Плачущие близнецы',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 6,
    name: 'Ревущая тачка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 7,
    name: 'Тропический гурман',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 8,
    name: 'Электроблеск для губ',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 9,
    name: 'Магнитная буря Альфа',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 10,
    name: 'Магнитная буря Браво',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 11,
    name: 'Магнитная буря Чарли',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 12,
    name: 'Гость из глубин',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 13,
    name: 'Сера',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 14,
    name: 'Стальная лапа',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 15,
    name: 'Усмиритель беспорядков VI',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 16,
    name: 'Артиллерийский ротор',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 17,
    name: 'Бур - красная ось',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 18,
    name: 'Домработница',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 19,
    name: 'Звёздный двигатель',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 20,
    name: 'Звезда улиц',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 21,
    name: 'Златоцвет',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 22,
    name: 'Реплика Звёздного двигателя',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 23,
    name: 'Фаза луны Новолуние',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 24,
    name: 'Фаза луны Полнолуние',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 25,
    name: 'Фаза луны Убывающая луна',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 26,
    name: 'Клыки ярости',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 27,
    name: 'Большой цилиндр',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 28,
    name: 'Весеннее тепло',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 29,
    name: 'Заячья корзинка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 30,
    name: 'Миротворец - специализированный',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 31,
    name: 'Оригинальный трансформатор',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 32,
    name: 'Идентичность Изменчивость',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 33,
    name: 'Идентичность Постоянство',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 34,
    name: 'Колыбель плача',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 35,
    name: 'Бум-пушка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 36,
    name: 'Застенчивый монстр',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 37,
    name: 'Кадр на память',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 38,
    name: 'Мяч для игры без правил',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 39,
    name: 'Сундук сокровищ',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 40,
    name: 'Ревербератор I',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 41,
    name: 'Ревербератор II',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 42,
    name: 'Ревербератор III',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 43,
    name: 'Сдержанность',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 44,
    name: 'Чайник нефритовой чистоты',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 45,
    name: 'Шестерни адского пламени',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 46,
    name: 'Аккумулятор Демары II',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 47,
    name: 'Драгоценная окаменелость',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 48,
    name: 'Пароварка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 49,
    name: 'Шестизарядник',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 50,
    name: 'Турбулентность Револьвер',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 51,
    name: 'Турбулентность Стрела',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 52,
    name: 'Турбулентность Топор',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}
];

const mentalOptions = ["M0", "M1", "M2", "M3", "M4", "M5", "M6"];
const upgradeOptions = ["U1", "U2", "U3", "U4", "U5"];

const characterModal = document.getElementById('characterModal');
const closeCharacterModal = document.querySelector('.characterClose');
const characterTableBody = document.querySelector('#characterTable tbody');
let characterTargetInput, characterTargetButton;

document.querySelectorAll('.character-btn').forEach(button => {
    button.addEventListener('click', () => {
        characterTargetInput = document.getElementById(button.dataset.target);
        characterTargetButton = button;
        characterModal.style.display = 'block';
        loadCharacters();
    });
});

closeCharacterModal.addEventListener('click', () => {
    characterModal.style.display = 'none';
});

function loadCharacters() {
    characterTableBody.innerHTML = '';
    characters.forEach(character => {
        const characterRow = document.createElement('tr');
        characterRow.innerHTML = `
            <td>${character.i}</td>
            <td><img src="static/icons/characters/${character.name}.webp" alt="${character.name}" width="120"></td>
            <td>${character.name}</td>
            <td><img src="static/icons/ranks/${character.rank}.webp" alt="${character.rank}" width="32"></td>
            <td><img src="static/icons/atributes/${character.atribute}.webp" alt="${character.atribute}" width="64">${character.atribute}</td>
            <td><img src="static/icons/specialties/${character.specialty}.webp" alt="${character.specialty}" width="64">${character.specialty}</td>
            <td><img src="static/icons/factions/${character.faction}.webp" alt="${character.faction}" width="120"></td>
        `;
        characterRow.addEventListener('click', () => {
            characterTargetInput.value = character.name;
            characterTargetButton.innerHTML = `
            <img src="static/icons/characters/${character.name}.webp" alt="${character.name}" width="40" style="margin-right: 5px;">
            ${character.name}
        `;
            characterModal.style.display = 'none';
        });
        characterTableBody.appendChild(characterRow);
    });
}

const wEngineModal = document.getElementById('wEngineModal');
const closeWEngineModal = document.querySelector('.wEngineClose');
const wEngineTableBody = document.querySelector('#wEngineTable tbody');
let wEngineTargetInput, wEngineTargetButton;

document.querySelectorAll('.wengine-btn').forEach(button => {
    button.addEventListener('click', () => {
        wEngineTargetInput = document.getElementById(button.dataset.target);
        wEngineTargetButton = button;
        wEngineModal.style.display = 'block';
        loadWEngines();
    });
});

closeWEngineModal.addEventListener('click', () => {
    wEngineModal.style.display = 'none';
});

function loadWEngines() {
    wEngineTableBody.innerHTML = '';
    wEngines.forEach(wEngine => {
        const wEngineRow = document.createElement('tr');
        wEngineRow.innerHTML = `
            <td>${wEngine.i}</td>
            <td><img src="static/icons/wEngines/${wEngine.name}.webp" alt="${wEngine.name}" width="120"></td>
            <td>${wEngine.name}</td>
            <td><img src="static/icons/ranks/${wEngine.rank}.webp" alt="${wEngine.rank}" width="32"></td>
            <td><img src="static/icons/specialties/${wEngine.specialty}.webp" alt="${wEngine.specialty}" width="64">${wEngine.specialty}</td>
        `;
        wEngineRow.addEventListener('click', () => {
            wEngineTargetInput.value = wEngine.name;
            wEngineTargetButton.innerHTML = `
        <img src="static/icons/wEngines/${wEngine.name}.webp" alt="${wEngine.name}" width="40" style="margin-right: 5px;">
        ${wEngine.name}
    `;
            wEngineModal.style.display = 'none';
        });
        wEngineTableBody.appendChild(wEngineRow);
    });
}

function createCharacterOption(character) {
    const option = document.createElement('option');
    option.value = character.name;
    option.innerHTML = `
    <div style="display: flex; align-items: center;">
            <img src="static/icons/characters/${character.name}.webp" alt="${character.name}" width="50" height="50" style="margin-right: 10px;">
            <span>${character.name} — ${character.rank}, ${character.atribute}, ${character.specialty}, ${character.faction}</span>
        </div>
    `;
    return option;
}

function createOptionList(options, callback) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.style.display = 'block';

    const content = document.createElement('div');
    content.className = 'modal-content';
    modal.appendChild(content);

    options.forEach(option => {
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = option;
        button.addEventListener('click', () => {
            callback(option);
            modal.style.display = 'none';
            document.body.removeChild(modal);
        });
        content.appendChild(button);
    });

    document.body.appendChild(modal);
}

document.querySelectorAll('.mental-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetInput = document.getElementById(button.dataset.target);
        createOptionList(mentalOptions, selectedOption => {
            targetInput.value = selectedOption;
            button.textContent = `${selectedOption}`;
        });
    });
});

document.querySelectorAll('.upgrade-btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetInput = document.getElementById(button.dataset.target);
        createOptionList(upgradeOptions, selectedOption => {
            targetInput.value = selectedOption;
            button.textContent = `${selectedOption}`;
        });
    });
});

function createwEngineOption(wEngine) {
    const option = document.createElement('option');
    option.value = wEngine.name;
    option.innerHTML = `
        <div style="display: flex; align-items: center;">
            <img src="static/icons/wEngines/${wEngine.name}.webp" alt="${wEngine.name}" width="50" height="50" style="margin-right: 10px;">
            <span>${wEngine.name} — ${wEngine.rank}, ${wEngine.specialty}</span>
        </div>
    `;
    return option;
}

document.querySelectorAll('select[name^="c"]').forEach(select => {
    characters.forEach(character => {
        const option = createCharacterOption(character);
        select.appendChild(option);
    });
});

document.querySelectorAll('select[name^="a"]').forEach(select => {
    wEngines.forEach(wEngine => {
        const option = createwEngineOption(wEngine);
        select.appendChild(option);
    });
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    for (let i = 1; i <= 6; i++) {
        const character = formData.get(`c${i}`);
        const mental = formData.get(`m${i}`);
        const amplifier = formData.get(`a${i}`);
        const upgrade = formData.get(`u${i}`);

        if (character && amplifier) {
            data[`group${i}`] = `${character} [${mental}] (${amplifier} [${upgrade}])`;
        }
    }

    fetch('https://zzz-tournament.onrender.com/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => alert(result.message))
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных!');
    });
});

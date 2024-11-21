const characters = [{
    i: 0,
    name: 'Антон Иванов',
    rank: 'А-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Нападение',
    faction: 'Комбинат "Белобог"'
}, {
    i: 1,
    name: 'Бен Биггер',
    rank: 'А-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Оборона',
    faction: 'Комбинат "Белобог"'
}, {
    i: 2,
    name: 'Билли Кид',
    rank: 'А-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Хитрые Зайцы'
}, {
    i: 3,
    name: 'Бёрнис Уайт',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Огонь',
    specialty: 'Аномалия',
    faction: 'Сыны "Калидона"'
}, {
    i: 4,
    name: 'Грейс Ховард',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Аномалия',
    faction: 'Комбинат "Белобог"'
}, {
    i: 5,
    name: 'Джейн Доу',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Физический',
    specialty: 'Аномалия',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 6,
    name: 'Коляда Белобог',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Устрашение',
    faction: 'Комбинат "Белобог"'
}, {
    i: 7,
    name: 'Корин Уинкс',
    rank: 'А-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Агенство домашнего персонала "Виктория"'
}, {
    i: 8,
    name: 'Фон Ликаон',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Лёд',
    specialty: 'Оборона',
    faction: 'Агентство домашнего персонала "Виктория"'
}, {
    i: 9,
    name: 'Люсиана де Монтефио',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Поддержка',
    faction: 'Сыны "Калидона"'
}, {
    i: 10,
    name: 'Николь Демара',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Эфир',
    specialty: 'Поддержка',
    faction: 'Хитрые зайцы'
}, {
    i: 11,
    name: 'Нэкомия Мана',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Нападение',
    faction: 'Хитрые зайцы'
}, {
    i: 12,
    name: 'Пайпер Уил',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Физический',
    specialty: 'Аномалия',
    faction: 'Сыны "Калидона"'
}, {
    i: 13,
    name: 'Александрина Себастиан',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Поддержка',
    faction: 'Агентство домашнего персонала "Виктория"'
}, {
    i: 14,
    name: 'Сет Лоуэлл',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Оборона',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 15,
    name: 'Сокаку',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Лёд',
    specialty: 'Поддержка',
    faction: 'Секция 6'
}, {
    i: 16,
    name: 'Солдат 11',
    rank: 'S-ранг',
    limited: false,
    atribute: 'Огонь',
    specialty: 'Нападение',
    faction: 'Отряд Обол'
}, {
    i: 17,
    name: 'Цезарь Кинг',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Физический',
    specialty: 'Оборона',
    faction: 'Сыны "Калидона"'
}, {
    i: 18,
    name: 'Циньи',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Электро',
    specialty: 'Устрашение',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 19,
    name: 'Чжу Юань',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Эфир',
    specialty: 'Нападение',
    faction: 'Группа особого реагирования угрозыска'
}, {
    i: 20,
    name: 'Эллен Джо',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Лёд',
    specialty: 'Нападение',
    faction: 'Агентство домашнего персонала "Виктория"'
}, {
    i: 21,
    name: 'Энби Демара',
    rank: 'A-ранг',
    limited: false,
    atribute: 'Электро',
    specialty: 'Устрашение',
    faction: 'Хитрые зайцы'
}, {
    i: 22,
    name: 'Цукисиро Янаги',
    rank: 'S-ранг',
    limited: true,
    atribute: 'Электро',
    specialty: 'Аномалия',
    faction: 'Секция 6'
}
];

const wEngines = [{
    i: 0,
    name: 'Встроенный компилятор',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 1,
    name: 'Заострённые шипы',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 2,
    name: 'Шейкер-огнемейкер',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 3,
    name: 'Плачущие близнецы',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 4,
    name: 'Ревущая тачка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: true
}, {
    i: 5,
    name: 'Тропический гурман',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 6,
    name: 'Электроблеск для губ',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 7,
    name: 'Магнитная буря: Альфа',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 8,
    name: 'Магнитная буря: Браво',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 9,
    name: 'Магнитная буря: Чарли',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Аномалия',
    isSignA: false
}, {
    i: 10,
    name: 'Гость из глубин',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 11,
    name: 'Сера',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 12,
    name: 'Стальная лапа',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 13,
    name: 'Усмиритель беспорядков VI',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 14,
    name: 'Артиллерийский Ротор',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 15,
    name: 'Бур - красная ось',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 16,
    name: 'Домработница',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 17,
    name: 'Звёздный двигатель',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 18,
    name: 'Звезда улиц',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 19,
    name: 'Златоцвет',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 20,
    name: 'Реплика Звёздного двигателя',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: true
}, {
    i: 21,
    name: 'Фаза луны: Новолуние',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 22,
    name: 'Фаза луны: Полнолуние',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 23,
    name: 'Фаза луны: Убывающая',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Нападение',
    isSignA: false
}, {
    i: 24,
    name: 'Клыки ярости',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 25,
    name: 'Большой цилиндр',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 26,
    name: 'Весеннее тепло',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 27,
    name: 'Заячья корзинка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 28,
    name: 'Миротворец - специализированный',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: true
}, {
    i: 29,
    name: 'Оригинальный трансформатор',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 30,
    name: 'Идентичность: Изменчивость',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 31,
    name: 'Идентичность: Постоянство',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Оборона',
    isSignA: false
}, {
    i: 32,
    name: 'Колыбель плача',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 33,
    name: 'Бум-пушка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 34,
    name: 'Застенчивый монстр',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 35,
    name: 'Кадр на память',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 36,
    name: 'Мяч для игры без правил',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 37,
    name: 'Сундук сокровищ',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: true
}, {
    i: 38,
    name: 'Ревербератор I',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 39,
    name: 'Ревербератор II',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 40,
    name: 'Ревербератор III',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Поддержка',
    isSignA: false
}, {
    i: 41,
    name: 'Сдержанность',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 42,
    name: 'Чайник нефритовой чистоты',
    rank: 'S-ранг',
    limited: true,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 43,
    name: 'Шестерни адского пламени',
    rank: 'S-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 44,
    name: 'Аккумулятор Демары II',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: true
}, {
    i: 45,
    name: 'Драгоценная окаменелость',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 46,
    name: 'Пароварка',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 47,
    name: 'Шестизарядник',
    rank: 'A-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 48,
    name: 'Турбулентность: Револьвер',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 49,
    name: 'Турбулентность: Стрела',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}, {
    i: 50,
    name: 'Турбулентность: Топор',
    rank: 'B-ранг',
    limited: false,
    specialty: 'Устрашение',
    isSignA: false
}
];

document.querySelectorAll('select[name^="c"]').forEach(select => {
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character.name;
        option.textContent = character.name;
        select.appendChild(option);
    });
});

document.querySelectorAll('select[name^="a"]').forEach(select => {
    wEngines.forEach(wEngine => {
        const option = document.createElement('option');
        option.value = wEngine.name;
        option.textContent = wEngine.name;
        select.appendChild(option);
    });
});

document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

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

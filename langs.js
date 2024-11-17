let elements = document.querySelectorAll("*");
let selectedLang = localStorage.getItem('lang') == null ? 'sr' : localStorage.getItem('lang');

// Objects with all of the translations for each element
const translationSR = {
    "portfolio": "Portfolio",
    "kontakt": "Kontakt",
    "zdr-txt": "Zdravo, ja sam",
    "moje-ime": "Filip Grujić",
    "sta_radim": "Specijalizujem se u pravljenju vebsajtova, desktop aplikacija i jednostavnih igrica.",
    "portfolio-title": "PORTFOLIO",
    "rocket_title": "Putanja rakete",
    "rocket_desc": "Program u python-u koji pomoću diferencijalnih jednačina izračunava putanju rakete, sa datim početnim vrednostima",
    "quiz_title": "Aplikacija kvizova",
    "quiz_desc": "C# program koji iz JSON fajlova učitava kvizove, koji od strane korisnika mogu da se igraju",
    "kontakt-txt": "KONTAKT",
    "moj-insta": "Instagram nalog",
    "moj-tlgrm": "Telegram nalog",
    "prava": "© 2024. Filip Grujić. Sva prava zadržana",

    "vidi-vise-btn": "Vidi više"
};

const translationEN = {
    "portfolio": "Portfolio",
    "kontakt": "Contact",
    "zdr-txt": "Hello, I am",
    "moje-ime": "Filip Grujić",
    "sta_radim": "I specialize in the making of websites, desktop applications and simple games.",
    "portfolio-title": "PORTFOLIO",
    "rocket_title": "Rocket trajectory",
    "rocket_desc": "Program made in Python that uses differential equations and preset parameters to calculate the trajectory of a rocket",
    "quiz_title": "Quiz application",
    "quiz_desc": "C# application that from JSON files loads quizes, that the user can play",
    "kontakt-txt": "CONTACT",
    "moj-insta": "Instagram account",
    "moj-tlgrm": "Telegram account",
    "prava": "© 2024. Filip Grujić. All rights reserved.",

    "vidi-vise-btn": "See more"
};

const translationRU = {
    "portfolio": "Портфолио",
    "kontakt": "Контакты",
    "zdr-txt": "Здраствуйте, я",
    "moje-ime": "Филип Груич",
    "sta_radim": "Я занимаюсь созданием вебсайтов, компьютерных программ и простых игр.",
    "portfolio-title": "ПОРТФОЛИО",
    "rocket_title": "Траектория ракеты",
    "rocket_desc": "Программа на Python, которая использует дифференциальные уравнения для расчёта траектории ракеты, с заданными начальными значениями",
    "quiz_title": "Программа викторин",
    "quiz_desc": "Программа на C#, которая заряжает викторины из JSON файлов, в которые пользователь может играть",
    "kontakt-txt": "КОНТАКТЫ",
    "moj-insta": "Инстаграм аккаунт",
    "moj-tlgrm": "Телеграм аккаунт",
    "prava": "© 2024 Филип Груич. Все права защищены.",

    "vidi-vise-btn": "Подробности"
};

// Applying the languages
function applyLanguage() {
    document.getElementById('language-select-button').style.backgroundImage = "url('./img/flag_" + selectedLang + ".png')";
    localStorage.setItem('lang', selectedLang);
    elements.forEach(element => {
        if (element.getAttribute("lang") in translationSR) {
            switch(selectedLang) {
                case 'sr':
                    element.textContent = translationSR[element.getAttribute("lang")];
                    break;
                case 'en':
                    element.textContent = translationEN[element.getAttribute("lang")];
                    break;
                case 'ru':
                    element.textContent = translationRU[element.getAttribute("lang")];
                    break;
                default:
                    element.textContent = translationEN[element.getAttribute("lang")];
                    break;
            }
        }
    });
}

function switchToRU() {
    selectedLang = 'ru';
    applyLanguage();
}

function switchToEN() {
    selectedLang = 'en';
    applyLanguage();
}

function switchToSR() {
    selectedLang = 'sr';
    applyLanguage();
}

function switchLanguage() {
    switch(selectedLang) {
        case 'sr':
            selectedLang = 'en';
            break;
        case 'ru':
            selectedLang = 'sr';
            break;
        case 'en':
            selectedLang = 'ru';
            break;
    }

    applyLanguage();
}

//  Apply language on the start
applyLanguage();
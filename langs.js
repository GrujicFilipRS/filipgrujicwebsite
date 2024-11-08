let elements = document.querySelectorAll("*");
let selectedLang = localStorage.getItem('lang') == null ? 'sr' : localStorage.getItem('lang');

// Objects with all of the translations for each element
const translationSR = {
    "o_meni": "O meni",
    "portfolio": "Portfolio",
    "usluge": "Usluge",
    "kontakt": "Kontakt",
    "zdravo": "Zdravo, ja sam Filip Grujić!",
    "sta_radim": "Specijalizujem se u pravljenju vebsajtova, desktop aplikacija i jednostavnih igrica.",
    "rocket_title": "Putanja rakete",
    "rocket_desc": "Program u python-u koji pomoću diferencijalnih jednačina izračunava putanju rakete, sa datim početnim vrednostima",
    "quiz_title": "Aplikacija kvizova",
    "quiz_desc": "C# program koji iz JSON fajlova učitava kvizove, koji od strane korisnika mogu da se igraju",
    "moj_portfolio": "Moj portfolio"
};

const translationEN = {
    "o_meni": "About me",
    "portfolio": "Portfolio",
    "usluge": "Services",
    "kontakt": "Contacts",
    "zdravo": "Hello, I am Filip Grujić!",
    "sta_radim": "I specialize in making websites, desktop applications and simple games.",
    "rocket_title": "Rocket trajectory",
    "rocket_desc": "Python program that uses differential equations to calculate the trajectory of a rocket, with given starting values",
    "quiz_title": "Quiz application",
    "quiz_desc": "C# windows forms program that loads quizes from JSON files and lets the user play the quizes",
    "moj_portfolio": "My portfolio"
};

const translationRU = {
    "o_meni": "Обо мне",
    "portfolio": "Портфолио",
    "usluge": "Услуги",
    "kontakt": "Контакты",
    "zdravo": "Здравствуйте, я Филип Груич",
    "sta_radim": "Я занимаюсь созданием вебсайтов, компьютерных программ и простых игр.",
    "rocket_title": "Траектория ракеты",
    "rocket_desc": "Программа на Python, которая использует дифференциальные уравнения для расчёта траектории ракеты, с заданными начальными значениями",
    "quiz_title": "Программа викторин",
    "quiz_desc": "Программа на C#, которая заряжает викторины из JSON файлов, в которые пользователь может играть",
    "moj_portfolio": "Моё портфолио"
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
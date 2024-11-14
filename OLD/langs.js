let elements = document.querySelectorAll("*");
let selectedLang = localStorage.getItem('lang') == null ? 'sr' : localStorage.getItem('lang');

// Objects with all of the translations for each element
const translationSR = {
    "o_meni": "O meni",
    "portfolio": "Portfolio",
    "kontakt": "Usluge/Kontakt",
    "zdravo": "Zdravo, ja sam Filip Grujić!",
    "sta_radim": "Specijalizujem se u pravljenju vebsajtova, desktop aplikacija i jednostavnih igrica.",
    "rocket_title": "Putanja rakete",
    "rocket_desc": "Program u python-u koji pomoću diferencijalnih jednačina izračunava putanju rakete, sa datim početnim vrednostima",
    "quiz_title": "Aplikacija kvizova",
    "quiz_desc": "C# program koji iz JSON fajlova učitava kvizove, koji od strane korisnika mogu da se igraju",
    "moj_portfolio": "Moj portfolio",

    "usluge-text": "Usluge",
    "primam-zahteve": "Primam zahteve za:",
    "pravim-vebsajtove": "pravljenje vebsajtova za manje i srednje biznise, kao i individualce",
    "pravim-desktop": "pravljenje desktop aplikacija malih/srednjih veličina",
    "pravim-igrice": "pravljenje igrica malih/srednjih veličina u Python-u ili Unity-ju",
    "radim-domaci": "čak i rađenje školskih zadataka iz programiranja",
    "cena": "Cena uvek po dogovoru",
    "kontakt-text": "Kontakt",
    "ako-ima-pitanja": "Ako imate bilo kakvih pitanja, ili želite da napravite zahtev za nešto od spomenutog, ovo su načini na koje me možete dobiti:",
    "moj-insta": "Moj instagram nalog",
    "odgovaram": "Odgovaram brzo i na svaku poruku.",
    "copyright": "© 2024 Filip Grujić. Sva prava zadržana."
};

const translationEN = {
    "o_meni": "About me",
    "portfolio": "Portfolio",
    "kontakt": "Services/Contacts",
    "zdravo": "Hello, I am Filip Grujić!",
    "sta_radim": "I specialize in making websites, desktop applications and simple games.",
    "rocket_title": "Rocket trajectory",
    "rocket_desc": "Python program that uses differential equations to calculate the trajectory of a rocket, with given starting values",
    "quiz_title": "Quiz application",
    "quiz_desc": "C# windows forms program that loads quizes from JSON files and lets the user play the quizes",
    "moj_portfolio": "My portfolio",

    "usluge-text": "Services",
    "primam-zahteve": "I take requests for: ",
    "pravim-vebsajtove": "making websites for small and medium scale-businesses and individuals",
    "pravim-desktop": "making desktop applications of small to medium scales",
    "pravim-igrice": "making small games in Python or Unity",
    "radim-domaci": "even doing your programming homework and school projects!",
    "cena": "The price is always negotiated beforehand",
    "kontakt-text": "Contacts",
    "ako-ima-pitanja": "If you have any additional questions, or you want to create a request, you can reach me via the following platforms:",
    "moj-insta": "My instagram account",
    "odgovaram": "I respond quickly and to every message",
    "copyright": "© 2024 Filip Grujić. All rights reserved."
};

const translationRU = {
    "o_meni": "Обо мне",
    "portfolio": "Портфолио",
    "kontakt": "Услуги/Контакты",
    "zdravo": "Здравствуйте, я Филип Груич",
    "sta_radim": "Я занимаюсь созданием вебсайтов, компьютерных программ и простых игр.",
    "rocket_title": "Траектория ракеты",
    "rocket_desc": "Программа на Python, которая использует дифференциальные уравнения для расчёта траектории ракеты, с заданными начальными значениями",
    "quiz_title": "Программа викторин",
    "quiz_desc": "Программа на C#, которая заряжает викторины из JSON файлов, в которые пользователь может играть",
    "moj_portfolio": "Моё портфолио",

    "usluge-text": "Услуги",
    "primam-zahteve": "Я принимаю заявки на:",
    "pravim-vebsajtove": "создание сайтов для малого и среднего бизнеса, а также частных лиц",
    "pravim-desktop": "создание компьютерных программ малого/среднего размера",
    "pravim-igrice": "создание небольших/средних игр на Python или Unity",
    "radim-domaci": "даже делаю домашние задания по программированию",
    "cena": "Цена всегда договорная",
    "kontakt-text": "Контакты",
    "ako-ima-pitanja": "Если у вас есть какие-то вопросы, или у вас есть запрос, можно меня контактировать через:",
    "moj-insta": "Мой инстаграм аккаунт",
    "odgovaram": "Отвечаю быстро и на каждое сообщение",
    "copyright": "© 2024 Филип Груич. Все права защищены."
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
let elements = document.querySelectorAll("*");
let selectedLang = localStorage.getItem('lang') == null ? 'sr' : localStorage.getItem('lang');

// Objects with all of the translations for each element
const translationSR = {
    "portfolio": "Portfolio",
    "kontakt": "Kontakt",
    "zdr-txt": "Zdravo, ja sam",
    "moje-ime": "Filip Grujić",
    "sta_radim": "Dizajniram veb-sajtove i desktop aplikacije kako bih olakšao zadatke i poboljšao korisničko iskustvo. Moj cilj je da kreiram praktična rešenja koja podržavaju ljude i biznise u ostvarivanju njihovih ciljeva.",
    "portfolio-title": "PORTFOLIO",
    "rocket_title": "Online biblioteka",
    "rocket_desc": "Web aplikacija koja dozvoljava korisniku da traži i čita lektire, i dozvoljava administratoru da dodaje, uklanja i menja lektire",
    "quiz_title": "Pregledač algoritama",
    "quiz_desc": "Desktop aplikacija koja vizuelizuje tok rada bitnih algoritama. Korisnik može da izabere pojedini algoritam, modifikuje početne parametre i vidi vizuelizaciju algoritma.",
    "kontakt-txt": "KONTAKT",
    "moj-insta": "Instagram nalog",
    "moj-tlgrm": "Github nalog",
    "prava": "© 2025. Filip Grujić. Sva prava zadržana",
    "more-projs": "Više projekata možete naći na mojoj <a href='https://github.com/GrujicFilipRS' target='_blank'>Github stranici</a>",

    "vidi-vise-btn": "Vidi više"
};

const translationEN = {
    "portfolio": "Portfolio",
    "kontakt": "Contact",
    "zdr-txt": "Hello, I am",
    "moje-ime": "Filip Grujić",
    "sta_radim": "I design websites and desktop applications to make tasks easier and improve user experiences. My goal is to create practical solutions that support people and businesses in reaching their objectives.",
    "portfolio-title": "PORTFOLIO",
    "rocket_title": "Online library",
    "rocket_desc": "Web application that allows the user to search for and read lektiras (books that are mandatory to read in Serbian schools), and for the admins to add, remove and edit them.",
    "quiz_title": "Algorithm visualizer",
    "quiz_desc": "A desktop application that visualizes how common algorithms work. The user can choose a specific algorithm, modify the starting parameters and see the visualization of the algorithm",
    "kontakt-txt": "CONTACT",
    "moj-insta": "Instagram account",
    "moj-tlgrm": "Gihub account",
    "prava": "© 2025. Filip Grujić. All rights reserved.",
    "more-projs": "You can find more of my projects on my <a href='https://github.com/GrujicFilipRS' target='_blank'>Github page</a>",

    "vidi-vise-btn": "See more"
};

const translationRU = {
    "portfolio": "Портфолио",
    "kontakt": "Контакты",
    "zdr-txt": "Здраствуйте, я",
    "moje-ime": "Филип Груич",
    "sta_radim": "Я разрабатываю веб-сайты и приложения для ПК, чтобы упростить задачи и сделать опыт пользователей лучше. Моя цель — создавать практичные решения, которые помогают людям и бизнесам достигать своих целей.",
    "portfolio-title": "ПОРТФОЛИО",
    "rocket_title": "Онлайн библиотека",
    "rocket_desc": "Веб приложение, которое позволяет пользователю искать и читать лектиры (книги необходимые прочитать в сербских школах), и позволяет админу их принимать, удалять и изменять.",
    "quiz_title": "Визуализатор алгоритмов",
    "quiz_desc": "Приложение для ПК, которое визуелизирует процесс работы общих алгоритмов. Пользователь может выбрать алгоритм, изменить начальные параметры и увидеть визуализацию.",
    "kontakt-txt": "КОНТАКТЫ",
    "moj-insta": "Инстаграм аккаунт",
    "moj-tlgrm": "Гитхаб аккаунт",
    "prava": "© 2025 Филип Груич. Все права защищены.",
    "more-projs": "Вы можете найти больше моих проектов на моей <a href='https://github.com/GrujicFilipRS' target='_blank'>Гитхаб странице</a>",
    "github-stranica": "Гитхаб странице",

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
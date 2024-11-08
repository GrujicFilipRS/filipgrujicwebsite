let elements = document.querySelectorAll("*");
let selectedLang = localStorage.getItem('lang') == null ? 'sr' : localStorage.getItem('lang');

// Objects with all of the translations for each element
const translationSR = {

};

const translationEN = {

};

const translationRU = {
    
};

// Applying the languages
function applyLanguage() {
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

//  Apply language on the start
applyLanguage();
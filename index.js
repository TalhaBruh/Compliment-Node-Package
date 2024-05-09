// Define an object containing compliments in different languages
const complimentsByLanguage = {
    english: [
        "You're as bright as a shooting star on a clear night!",
        "Your smile could light up the darkest room!",
        "You're a ray of sunshine on a cloudy day!",
        "You're as awesome as a double rainbow after a storm!",
        "You're more fun than a bubble bath full of rubber ducks!",
        "You're one in a million!",
        "You're the bee's knees!",
        "You're as cool as a cucumber!",
        "You're sweeter than a basket of puppies!",
        "You're as smart as Einstein!",
        // Add more English compliments here
    ],
    spanish: [
        "¡Eres tan brillante como una estrella fugaz en una noche clara!",
        "¡Tu sonrisa podría iluminar la habitación más oscura!",
        "¡Eres un rayo de sol en un día nublado!",
        // Add more Spanish compliments here
    ],
    french: [
        "Tu es aussi lumineux qu'une étoile filante par une nuit claire!",
        "Ton sourire pourrait illuminer la pièce la plus sombre!",
        "Tu es un rayon de soleil par une journée nuageuse!",
        // Add more French compliments here
    ],
    // Add more languages and their compliments as needed
};

// Default language
let currentLanguage = 'english';

// Function to generate a random compliment in a specified language
function generateCompliment(language = currentLanguage) {
    const languageCompliments = complimentsByLanguage[language.toLowerCase()];
    if (!languageCompliments) {
        throw new Error(`Language '${language}' is not supported.`);
    }
    const randomIndex = Math.floor(Math.random() * languageCompliments.length);
    return languageCompliments[randomIndex];
}

// Function to add a custom compliment
function addCompliment(newCompliment) {
    complimentsByLanguage[currentLanguage].push(newCompliment);
}

// Function to reset compliments to default
function resetCompliments() {
    complimentsByLanguage[currentLanguage] = [
        "You're as bright as a shooting star on a clear night!",
        "Your smile could light up the darkest room!",
        "You're a ray of sunshine on a cloudy day!",
        "You're as awesome as a double rainbow after a storm!",
        "You're more fun than a bubble bath full of rubber ducks!",
        "You're one in a million!",
        "You're the bee's knees!",
        "You're as cool as a cucumber!",
        "You're sweeter than a basket of puppies!",
        "You're as smart as Einstein!",
        // Add more default compliments here
    ];
}

// Function to set the current language
function setLanguage(language) {
    if (!complimentsByLanguage[language.toLowerCase()]) {
        throw new Error(`Language '${language}' is not supported.`);
    }
    currentLanguage = language.toLowerCase();
}

// Function to get the list of supported languages
function getSupportedLanguages() {
    return Object.keys(complimentsByLanguage);
}

// Export the functions so they can be used by other modules
module.exports = { generateCompliment, addCompliment, resetCompliments, setLanguage, getSupportedLanguages };

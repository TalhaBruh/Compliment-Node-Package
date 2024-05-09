// Define an array of compliments
const compliments = [
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
];

// Function to generate a random compliment
function generateCompliment() {
    const randomIndex = Math.floor(Math.random() * compliments.length);
    return compliments[randomIndex];
}

// Function to add a custom compliment
function addCompliment(newCompliment) {
    compliments.push(newCompliment);
}

// Function to reset compliments to default
function resetCompliments() {
    compliments = [
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


// Export the function so it can be used by other modules
module.exports = { generateCompliment };

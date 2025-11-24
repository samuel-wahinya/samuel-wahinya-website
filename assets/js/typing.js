const titles = [
    "Data Warehouse Engineer",
    "SQL Data Analyst",
    "Tableau Dashboard Developer"
];

let i = 0, j = 0, deleting = false;
const speed = 80;
const typeSpan = document.getElementById("typewriter");

// Start with empty text so nothing blinks initially
typeSpan.textContent = "";

function typeEffect() {
    let current = titles[i];

    if (!deleting) {
        typeSpan.textContent = current.slice(0, j++);
        if (j > current.length) deleting = true; // remove extra +10
    } else {
        typeSpan.textContent = current.slice(0, j--);
        if (j < 0) {
            deleting = false;
            i = (i + 1) % titles.length;
        }
    }
    setTimeout(typeEffect, speed);
}

typeEffect();

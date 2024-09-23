let cookies = 0;
let autoClickerCost = 50;
let autoClickerActive = false;
let cookieMultiplier = 1;  // multiplicador inicial
let boostCost = 100;
let boostActive = false;
let luckCost = 300; // costo de la suerte
let cookieLuckActive = false; // para la suerte

const cookieCountElement = document.getElementById('cookieCount');
const cookieElement = document.getElementById('cookie');
const autoClickerBtn = document.getElementById('autoClickerBtn');
const cookieBoostBtn = document.getElementById('cookieBoostBtn');
const cookieLuckBtn = document.getElementById('cookieLuckBtn'); // Asegúrate de que esto está en tu código

// Función para actualizar el contador de cookies
function updateCookieCount() {
    cookieCountElement.textContent = cookies;
}

const achievements = [
    { name: 'Primera Cookie', description: 'Haz clic en la galleta por primera vez.', condition: () => cookies > 0 },
    { name: 'Mil Cookies', description: 'Haz clic en la galleta 1000 veces.', condition: () => cookies >= 1000 },
    { name: 'Millón de Cookies', description: 'Consigue 1,000,000 cookies.', condition: () => cookies >= 1000000 },
    
];

function displayAchievements() {
    const achievementsElement = document.getElementById('achievements');
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.classList.add('achievement');

        const imageElement = document.createElement('logro1.jpg');
        imageElement.src = achievement.image; // Add the image source for each achievement
        achievementElement.appendChild(imageElement);

        const titleElement = document.createElement('h3');
        titleElement.textContent = achievement.name;
        achievementElement.appendChild(titleElement);

        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = achievement.description;
        achievementElement.appendChild(descriptionElement);

        if (achievement.condition()) {
            achievementElement.classList.add('unlocked');
        }

        achievementsElement.appendChild(achievementElement);
    });
}

// Call the displayAchievements function when the window loads
window.onload = function() {
    loadGame();
    displayHighScore();
    displayAchievements();
};


// Evento para hacer clic en la cookie
cookieElement.addEventListener('click', function() {
    cookies += 1 * cookieMultiplier;  // aplica el multiplicador aquí
    updateCookieCount();
});





// Comprar Auto-Clicker
autoClickerBtn.addEventListener('click', function() {
    if (cookies >= autoClickerCost && !autoClickerActive) {
        cookies -= autoClickerCost;
        updateCookieCount();
        autoClickerActive = true;
        autoClickerBtn.disabled = true;
        autoClickerBtn.textContent = 'Auto-Clicker Activado';

        // Auto-Clicker: gana 1 cookie cada segundo
        setInterval(function() {
            cookies += 1 * cookieMultiplier;  // aplica el multiplicador
            updateCookieCount();
        }, 1000);
    }
});

// Comprar Suerte de Cookies
cookieLuckBtn.addEventListener('click', function() {
    if (cookies >= luckCost && !cookieLuckActive) {
        cookies -= luckCost;  // Resta cookies correctamente
        updateCookieCount();
        cookieLuckActive = true;
        cookieLuckBtn.disabled = true;
        cookieLuckBtn.textContent = 'Suerte de Cookies Activada';

        // Suerte de Cookies: gana 10 cookies con una probabilidad del 50%
        setInterval(function() {
            if (Math.random() < 0.6) {
                cookies += 10 * cookieMultiplier;  // aplica el multiplicador de suerte
                updateCookieCount();
            }
        }, 10000);
    }
});

// Comprar Boost de Cookies
cookieBoostBtn.addEventListener('click', function() {
    if (cookies >= boostCost && !boostActive) {
        cookies -= boostCost;
        updateCookieCount();
        boostActive = true;
        cookieBoostBtn.disabled = true;
        cookieBoostBtn.textContent = 'Boost Activado';

        cookieMultiplier = 5;  // activa el multiplicador

        setTimeout(function() {
            // Después de 10 segundos, vuelve al estado normal
            cookieMultiplier = 1;
            boostActive = false;
            cookieBoostBtn.disabled = false;
            cookieBoostBtn.textContent = 'Activar Boost (Costo: 100 cookies)';
        }, 10000);
    }
});

// Guardar el progreso del juego
function saveGame() {
    localStorage.setItem('cookies', cookies);
}

// Cargar el progreso del juego
function loadGame() {
    if (localStorage.getItem('cookies')) {
        cookies = parseInt(localStorage.getItem('cookies'));
        updateCookieCount();
    }
}

// Cargar el juego al iniciar
window.onload = loadGame;

// Guardar el progreso automáticamente cada 10 segundos
setInterval(saveGame, 10000);

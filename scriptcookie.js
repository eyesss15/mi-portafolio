let cookies = 0;
let autoClickerCost = 50;
let autoClickerActive = false;
let cookieMultiplier = 1;
let boostCost = 100;
let boostActive = false;

const cookieCountElement = document.getElementById('cookieCount');
const cookieElement = document.getElementById('cookie');
const autoClickerBtn = document.getElementById('autoClickerBtn');
const cookieBoostBtn = document.getElementById('cookieBoostBtn');

// Función para actualizar el contador de cookies
function updateCookieCount() {
    cookieCountElement.textContent = cookies;
}

// Evento para hacer clic en la cookie
cookieElement.addEventListener('click', function() {
    cookies += 1;
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
            cookies += 1;
            updateCookieCount();
        }, 1000);
    }
});

// Guardar el progreso en localStorage
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


cookieBoostBtn.addEventListener('click', function() {
    if (cookies >= boostCost && !boostActive) {
        cookies -= boostCost;
        updateCookieCount();
        boostActive = true;
        boostBtn.disabled = true;
        boostBtn.textContent = 'Boost Activado';

        cookieMultiplier = 5;

        setTimeout(function() {
            // Después de 10 segundos, vuelve al estado normal
            cookieMultiplier = 1;
            boostActive = false;
            cookieBoostBtn.disabled = false;
            cookieBoostBtn.textContent = 'Activar Boost (Costo: 100 cookies)';
        }, 10000);
    }
});

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




// Llamar a la función de cargar cuando se inicie el juego
window.onload = loadGame;

// Guardar el progreso automáticamente cada 10 segundos
setInterval(saveGame, 10000);

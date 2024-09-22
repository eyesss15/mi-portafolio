document.querySelector('.comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

 // Obtener los valores del formulario
 const nombre = document.querySelector('#nombre').value;
 const comentario = document.querySelector('#comentario').value;

 // Crear un nuevo comentario
 const comentarioPublicado = document.createElement('div');
 comentarioPublicado.innerHTML = `<h3>${nombre}</h3><p>${comentario}</p>`;

 // Agregar el comentario a la sección de comentarios publicados
 document.querySelector('#comentarios-publicados').appendChild(comentarioPublicado);

 // Limpiar el formulario
 document.querySelector('#nombre').value = '';
 document.querySelector('#comentario').value = '';

})


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleDarkMode');
    const body = document.body;

    // Verifica si hay un modo guardado en localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        toggleButton.innerText = 'Desactivar modo oscuro';
    }

    // Agrega un evento al botón
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Cambia el texto del botón
        if (body.classList.contains('dark-mode')) {
            toggleButton.innerText = 'Desactivar modo oscuro';
            localStorage.setItem('dark-mode', 'enabled'); // Guarda el modo oscuro
        } else {
            toggleButton.innerText = 'Activar modo oscuro';
            localStorage.removeItem('dark-mode'); // Elimina el modo oscuro
        }
    });
});

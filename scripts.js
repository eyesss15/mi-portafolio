// Simula una carga durante 4 segundos y luego muestra el contenido y el nav
window.addEventListener("load", function() {
    setTimeout(function() {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("content").style.display = "block";
        document.querySelector('nav').style.display = 'block'; // Muestra el nav
    }, 4000); // 4 segundos de carga
});


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


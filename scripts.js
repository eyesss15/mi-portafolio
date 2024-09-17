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
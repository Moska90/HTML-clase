function splitImage() {
    var image = document.querySelector('.image');
    image.classList.add('image1');

    var newDiv = document.createElement('div');
    newDiv.classList.add('image1');

    // Agregar evento de clic al div
    newDiv.addEventListener('click', function() {
    window.location.href = 'atacantes.html'; // Reemplaza 'ruta/pagina.html' con la ruta de la página a la que deseas redirigir
    });
    image.parentNode.appendChild(newDiv);

    var newDiv = document.createElement('div');
    newDiv.classList.add('image2');

    // Agregar evento de clic al div
    newDiv.addEventListener('click', function() {
    window.location.href = 'defensores.html'; // Reemplaza 'ruta/pagina.html' con la ruta de la página a la que deseas redirigir
    });
    image.parentNode.appendChild(newDiv);
    image.remove();

    setTimeout(function() {
      newImage.style.width = '350px';
      newImage1.style.width = '350px';
      image.remove();
    }, 400);
  }
function splitImage() {
    var image = document.querySelector('.image');
    image.classList.add('image1');

    var newDiv = document.createElement('div');
    newDiv.classList.add('image1');
    newDiv.addEventListener('click', function() {
    window.location.href = 'atacantes.html';
    });
    image.parentNode.appendChild(newDiv);

    var newDiv = document.createElement('div');
    newDiv.classList.add('image2');
    newDiv.addEventListener('click', function() {
    window.location.href = 'defensores.html';
    });

    image.parentNode.appendChild(newDiv);
    image.remove();

    setTimeout(function() {
      newImage.style.width = '350px';
      newImage1.style.width = '350px';
    }, 400);
  }
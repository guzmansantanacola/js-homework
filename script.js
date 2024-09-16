function upDate(previewPic) {
    document.getElementById('image').style.backgroundImage = `url(${previewPic.src})`;
    document.getElementById('image').innerHTML = previewPic.alt;
    console.log("upDate triggered");
  }

  // Función para restaurar el contenido original del div #image
  function unDo() {
    document.getElementById('image').style.backgroundImage = "none";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
    console.log("unDo triggered");
  }

  // Usar un bucle for para recorrer cada imagen y añadir tabindex
  const images = document.querySelectorAll('.preview');
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0'); // Añadir tabindex para accesibilidad
    images[i].addEventListener('focus', function() {
      console.log('Image focused: ', images[i].alt); // Consola cuando la imagen recibe foco
    });
    images[i].addEventListener('blur', function() {
      console.log('Image blurred: ', images[i].alt); // Consola cuando la imagen pierde foco
    });
  }
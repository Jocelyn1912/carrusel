$(document).ready(function() {
  // Guardando imgItems el conteo de las diapositivas
  var imgItems = $('.slider li').length;
  var imgPos = 1;

  //Con este ciclo lo que hacemos es agregar los puntos dinamicamente y dependiendo de cuantas diapos hayan se agregará 1 sólo
  for (i = 1; i <= imgItems; i++){
    $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
  }

  // Ocultando todas las diapositivas
  $('.slider li').hide();
  // Mostrando la primera diapositiva
  $('.slider li:first').show();
  // dandole al cprimer circulo un color
  $('.pagination li:first').css({color:'#CD6E2E'});

  // Ejecutando funciones
  $('.pagination li').click(pagination);
  $('.right span').click(nextSlider);
  $('.left span').click(prevSlider);

  // Haciendo las diapos automaticas
  setInterval(function(){
    nextSlider();
  }, 4000);

  // Funcion de paginación
  function pagination() {
    // guardando el valor de la posisión del elemento
    var paginationPos = $(this).index() + 1;

    // Oculto todas las diapos
    $('.slider li').hide();
    // Mostramos solo la diapo que correspondiente al circulo que le hemos dado click
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();
    // Cada circulo no seleccionado tendrá ese color
    $('.pagination li').css({color:'#858585'});
    // Cada circulo al darle click se debe cambiar sus estilos
    $(this).css({color:'#CD6E2E'});

    imgPos = paginationPos;
  }

  // Función flecha siguiente imagen
  function nextSlider() {
    // Condición para que se repita el ciclo apenas se acaben las diapos
    if (imgPos >= imgItems) {
      imgPos = 1;
    } else {
      imgPos++;
    }
    // Cada circulo no seleccionado tendrá ese color
    $('.pagination li').css({color:'#858585'});
    // Cada circulo al darle click se debe cambiar sus estilos
    $('.pagination li:nth-child('+ imgPos +')').css({color:'#CD6E2E'});


    // Oculto todas las diapos
    $('.slider li').hide();
    // Mostramos solo la diapo que correspondiente al circulo que le hemos dado click
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
  }

  // Función flecha anterior imagen
  function prevSlider() {
    // Condición para que se repita el ciclo apenas se acaben las diapos
    if (imgPos <= 1) {
      imgPos = imgItems;
    } else {
      imgPos--;
    }
    // Cada circulo no seleccionado tendrá ese color
    $('.pagination li').css({color:'#858585'});
    // Cada circulo al darle click se debe cambiar sus estilos
    $('.pagination li:nth-child('+ imgPos +')').css({color:'#CD6E2E'});


    // Oculto todas las diapos
    $('.slider li').hide();
    // Mostramos solo la diapo que correspondiente al circulo que le hemos dado click
    $('.slider li:nth-child('+ imgPos +')').fadeIn();

  }

});


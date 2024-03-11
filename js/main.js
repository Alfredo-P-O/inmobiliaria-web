$(document).ready(function() {
    // Nos ayuda a cambiar la transparencia de la barra de navegacion horizontal
    $(window).on("scroll", function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $("header").removeClass("transparente");
        } else{
            $("header").addClass("transparente");
        }
    });
    // Metodo que asigna una clases a cierto elementos del HTML
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    });
    // Metodo que asigna una clases a cierto elementos del HTML
    $('.menu-link').click(function(){
        /* Cierra el menú al alterar la clase 'abierto' */
        $('.menu').toggleClass('abierto');
        /* Restaura la apariencia del botón de menú al alterar la clase 'abierto' */
        $('#burger').toggleClass('abierto');
    });
    //Desplazamiento Smooth Scroll
    // Selecciona todos los elementos <a> en el documento
    $('a').on('click', function() {
        // Verifica si el atributo href del enlace no está vacío
        if(this.hash !== '') {
            // Guarda el valor del atributo href en la variable hash
            let hash = this.hash;
            // Utiliza animate para animar el desplazamiento suave hasta el elemento con el id especificado en hash
            // scrollTop: $(hash).offset().top obtiene la posición superior del elemento con el id especificado en hash
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 500); // Duración de la animación en milisegundos (opcional)
        }
    });
});
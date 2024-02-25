$(document).ready(function() {
    // Nos ayuda a cambiar la transparencia de la barra de navegacion horizontal
    $(window).on("scroll", function() {
        let posicion = $('#pr').offset();
        if ($(window).scrollTop() >= posicion.top) {
            $("header").removeClass("transparente");
        } else{
            $("header").addClass("transparente");
        }
    })
    // Metodo que asigna una clases a cierto elementos del HTML
    $('#burger').click(function() {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })
})
//Estructura basica $ dolar y selector
$(document).ready(function () {
    // Cambia el colo de fondo de los elementos Indicados
    // Especificidad parecida a CSS
    $("p").css({ "background-color": "skyblue" });
    $("#tercero").css({ "background-color": "silver" });
    $(".cuarto").css({ "background-color": "yellow" });

    /** Agrega la clase Roja a los encabezados */
    $("#btn-agrega-clase-red").click(function () {
        $("h1").addClass("red");
        $("h1").removeClass("blue");
    });

    /** Agrega la clase Roja a los encabezados */
    $("#btn-agrega-clase-blue").click(function () {
        $("h1").addClass("blue");
        $("h1").removeClass("red");
    });

    /** MANTIENE LA CLASE HASTA QUE SE DESHABILITA CON EL MISMO BOTON */
    /** Agrega la clase ROSA a los encabezados */
    $("#btn-agrega-clase-pink").click(function () {
        $("h1").toggleClass("pink");
    });

    $("#btn-vacia-p").click(function () {
        $("p").empty();
    });


    /**Borra los encabezados al presionar el boton*/
    $("#btn-borra-h1").click(function () {
        $("h1").remove();
    });

    /** Agrega al final del parrafo 1 un boton Rojo */
    $("#btn-add-btn-red").click(function () {
        $("#primero").append(" Uno mas -> <button style='background: red;'> Ese boton es Rojo </button>");
    });

    /** Agrega al inicio del parrafo 1 un boton Azul */
    $("#btn-add-btn-azul").click(function () {
        $("#segundo").prepend(" Uno mas -> <button style='background: blue;'> Ese boton es Azul </button>");
    });

    /** Agrega un boton verde al final y separado del parrafo */
    $("#btn-add-btn-verde").click(function () {
        $("#tercero").after(" Uno mas -> <button style='background: green;'> BOTON Verde </button>");
    });

    /** Agrega un boton GRIS antes pero separado del parrafo */
    $("#btn-add-btn-silver").click(function () {
        $("#cuarto").before(" Uno mas -> <button style='background: silver;'> BOTON Silver </button>");
    });

    /**Cambia de color el parrafo 3 cuando pasamos el Mouse */
    $("#tercero").mouseenter(function () {
        $("#tercero").css({ "background-color": "brown" });
    });

    $("#tercero").mouseleave(function () {
        $("#tercero").css({ "background-color": "silver" });
    });

    /**Oculta con suavidad el parrafo 2 */
    $("#segundo").mouseenter(function () {
        $("#segundo").fadeOut();
    });

    $("#segundo").mouseleave(function () {
        $("#segundo").fadeIn();
    });

    /**Oculta con suavidad el parrafo 2 */
    $("#primero").mouseenter(function () {
        $("#primero").slideUp();
    });

    $("#primero").mouseleave(function () {
        $("#primero").slideDown();
    });




});


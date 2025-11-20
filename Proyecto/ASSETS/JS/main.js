$(document).ready(function () {

    // Clic genérico para cualquier elemento con clase "accion"
    $(".accion").on("click", function () {
        console.log("Acción ejecutada");
    });

    // Mostrar/Ocultar algo (cuando exista)
    $(".toggle").on("click", function () {
        $(".contenido").toggle();
    });

    // Validación mínima sin saber campos
    $("form").on("submit", function (e) {
        console.log("Formulario enviado");
    });
});

const formulario = document.getElementById("formularioContacto");
const mensajeFormulario = document.getElementById("mensajeFormulario");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const correo = document.getElementById("correo").value;
    const negocio = document.getElementById("negocio").value;
    const mensaje = document.getElementById("mensaje").value;

    if (
        nombre === "" ||
        correo === "" ||
        negocio === "" ||
        mensaje === ""
    ) {

        mensajeFormulario.textContent = "Por favor complete todos los campos.";
        mensajeFormulario.style.color = "red";
        return;
    }

    mensajeFormulario.textContent = "Formulario enviado correctamente.";
    mensajeFormulario.style.color = "green";

    formulario.reset();

});
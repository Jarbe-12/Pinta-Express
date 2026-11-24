const tienda = sessionStorage.getItem("tiendaSeleccionada");

const texto = document.getElementById("tiendaSeleccionada");

if(tienda){
    texto.textContent = `Comercio seleccionado: ${tienda}`;
}
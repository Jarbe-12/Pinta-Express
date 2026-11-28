const tiendas = [
    {
        nombre: "Almacén El Buen Vestir",
        descripcion: "Ropa para toda la familia con estilos modernos y precios accesibles."
    },

    {
        nombre: "Moda Familiar JM",
        descripcion: "Prendas para adultos, niños y bebés con variedad para toda ocasión."
    },

    {
        nombre: "Confecciones San José",
        descripcion: "Especialistas en ropa casual, uniformes y prendas confeccionadas localmente."
    },

    {
        nombre: "Boutique Central",
        descripcion: "Moda femenina con las últimas tendencias y accesorios exclusivos."
    },

    {
        nombre: "Almacén Nueva Imagen",
        descripcion: "Ropa juvenil y urbana para quienes buscan estilo y comodidad."
    },

    {
        nombre: "Confecciones La Esperanza",
        descripcion: "Prendas clásicas y elegantes para toda la familia."
    }
];

const contenedor = document.getElementById("contenedorTiendas");

function seleccionarTienda(nombre) {

    sessionStorage.setItem("tiendaSeleccionada", nombre);

    window.location.href = "catalogo.html";
}

tiendas.forEach(tienda => {

    contenedor.innerHTML += `

        <article class="tarjeta">

            <h3>${tienda.nombre}</h3>

            <p>${tienda.descripcion}</p>

            <button onclick="seleccionarTienda('${tienda.nombre}')">
                Ver Catálogo
            </button>

        </article>

    `;
});
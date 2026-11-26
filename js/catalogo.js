const tiendaSeleccionada = sessionStorage.getItem("tiendaSeleccionada");

const nombreTienda = document.getElementById("nombreTienda");
const catalogo = document.getElementById("catalogo");

const catalogos = {

    "Almacén El Buen Vestir": [
        {
            nombre: "Camiseta Básica",
            precio: "$35.000"
        },
        {
            nombre: "Jean Clásico",
            precio: "$75.000"
        },
        {
            nombre: "Chaqueta Casual",
            precio: "$120.000"
        }
    ],

    "Moda Familiar JM": [
        {
            nombre: "Pijama Infantil",
            precio: "$40.000"
        },
        {
            nombre: "Camiseta Niño",
            precio: "$28.000"
        },
        {
            nombre: "Conjunto Deportivo",
            precio: "$65.000"
        }
    ],

    "Confecciones San José": [
        {
            nombre: "Uniforme Empresarial",
            precio: "$90.000"
        },
        {
            nombre: "Camisa Formal",
            precio: "$55.000"
        },
        {
            nombre: "Pantalón Ejecutivo",
            precio: "$85.000"
        }
    ],

    "Boutique Central": [
        {
            nombre: "Blusa Elegante",
            precio: "$60.000"
        },
        {
            nombre: "Falda Formal",
            precio: "$80.000"
        },
        {
            nombre: "Vestido Ejecutivo",
            precio: "$150.000"
        }
    ],

    "Almacén Nueva Imagen": [
        {
            nombre: "Hoodie Oversize",
            precio: "$95.000"
        },
        {
            nombre: "Jean Skinny",
            precio: "$85.000"
        },
        {
            nombre: "Camiseta Urbana",
            precio: "$45.000"
        }
    ],

    "Confecciones La Esperanza": [
        {
            nombre: "Camisa Clásica",
            precio: "$50.000"
        },
        {
            nombre: "Pantalón Casual",
            precio: "$70.000"
        },
        {
            nombre: "Chaqueta Elegante",
            precio: "$130.000"
        }
    ]

};

if (tiendaSeleccionada) {

    nombreTienda.textContent = tiendaSeleccionada;

    const productos = catalogos[tiendaSeleccionada];

    productos.forEach(producto => {

        catalogo.innerHTML += `
            <article class="tarjeta">

                <h3>${producto.nombre}</h3>

                <p><strong>${producto.precio}</strong></p>

            </article>
        `;

    });

} else {

    nombreTienda.textContent = "No se ha seleccionado ninguna tienda.";

}
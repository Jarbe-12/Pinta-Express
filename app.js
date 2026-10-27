const tiendas = [
    {
        id: 1,
        nombre: "Fashion Style",
        descripcion: "Moda para toda la familia.",
        whatsapp: "573001112233",

        productos: [
            {
                nombre: "Camisa Polo",
                precio: "$80.000"
            },
            {
                nombre: "Jean Clásico",
                precio: "$120.000"
            },
            {
                nombre: "Chaqueta Denim",
                precio: "$150.000"
            }
        ]
    },

    {
        id: 2,
        nombre: "Elegancia Boutique",
        descripcion: "Moda femenina y accesorios.",

        whatsapp: "573004445566",

        productos: [
            {
                nombre: "Vestido Elegante",
                precio: "$180.000"
            },
            {
                nombre: "Blusa Premium",
                precio: "$75.000"
            },
            {
                nombre: "Bolso Casual",
                precio: "$90.000"
            }
        ]
    },

    {
        id: 3,
        nombre: "Kids Store",
        descripcion: "Ropa y accesorios infantiles.",

        whatsapp: "573007778899",

        productos: [
            {
                nombre: "Conjunto Infantil",
                precio: "$65.000"
            },
            {
                nombre: "Pijama Niño",
                precio: "$45.000"
            },
            {
                nombre: "Chaqueta Escolar",
                precio: "$70.000"
            }
        ]
    },

    {
        id: 4,
        nombre: "Moda Urbana",
        descripcion: "Ropa juvenil y estilo urbano.",

        whatsapp: "573009991111",

        productos: [
            {
                nombre: "Hoodie Oversize",
                precio: "$110.000"
            },
            {
                nombre: "Jogger Cargo",
                precio: "$95.000"
            },
            {
                nombre: "Gorra Street",
                precio: "$45.000"
            }
        ]
    },

    {
        id: 5,
        nombre: "Sport Wear",
        descripcion: "Ropa deportiva y fitness.",

        whatsapp: "573001234567",

        productos: [
            {
                nombre: "Licra Deportiva",
                precio: "$65.000"
            },
            {
                nombre: "Camiseta Dry Fit",
                precio: "$55.000"
            },
            {
                nombre: "Sudadera Deportiva",
                precio: "$120.000"
            }
        ]
    },

    {
        id: 6,
        nombre: "Baby World",
        descripcion: "Moda y accesorios para bebés.",

        whatsapp: "573006668888",

        productos: [
            {
                nombre: "Body Bebé",
                precio: "$35.000"
            },
            {
                nombre: "Pijama Bebé",
                precio: "$40.000"
            },
            {
                nombre: "Set Infantil",
                precio: "$55.000"
            }
        ]
    }
];

const contenedorTiendas = document.getElementById("contenedorTiendas");
const catalogoSeccion = document.getElementById("catalogoSeccion");
const nombreTienda = document.getElementById("nombreTienda");
const descripcionTienda = document.getElementById("descripcionTienda");
const productos = document.getElementById("productos");
const buscador = document.getElementById("buscador");
const btnWhatsapp = document.getElementById("btnWhatsapp");

function mostrarTiendas(lista) {

    contenedorTiendas.innerHTML = "";

    lista.forEach(tienda => {

        contenedorTiendas.innerHTML += `
            <div class="card">

                <h3>${tienda.nombre}</h3>

                <p>${tienda.descripcion}</p>

                <button onclick="abrirCatalogo(${tienda.id})">
                    Ver Catálogo
                </button>

            </div>
        `;
    });
}

function abrirCatalogo(id) {

    const tienda = tiendas.find(
        tienda => tienda.id === id
    );

    if (!tienda) return;

    sessionStorage.setItem(
        "ultimaTienda",
        id
    );

    nombreTienda.textContent =
        tienda.nombre;

    descripcionTienda.textContent =
        tienda.descripcion;

    productos.innerHTML = "";

    tienda.productos.forEach(producto => {

        productos.innerHTML += `
            <div class="producto">

                <h4>${producto.nombre}</h4>

                <span>${producto.precio}</span>

            </div>
        `;
    });

    btnWhatsapp.href =
        `https://wa.me/${tienda.whatsapp}`;

    catalogoSeccion.classList.remove("oculto");

    catalogoSeccion.scrollIntoView({
        behavior: "smooth"
    });
}

window.abrirCatalogo = abrirCatalogo;

mostrarTiendas(tiendas);

buscador.addEventListener("keyup", () => {

    const texto =
        buscador.value.toLowerCase();

    const resultado =
        tiendas.filter(tienda =>
            tienda.nombre
                .toLowerCase()
                .includes(texto)
        );

    mostrarTiendas(resultado);
});

document
    .getElementById("volver")
    .addEventListener("click", () => {

        catalogoSeccion.classList.add("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

const ultimaTienda =
    sessionStorage.getItem("ultimaTienda");

if (ultimaTienda) {

    abrirCatalogo(
        Number(ultimaTienda)
    );
}

document
    .getElementById("formulario")
    .addEventListener("submit", function (e) {

        e.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        const correo =
            document.getElementById("correo").value;

        const mensaje =
            document.getElementById("mensaje").value;

        sessionStorage.setItem(
            "nombreUsuario",
            nombre
        );

        sessionStorage.setItem(
            "correoUsuario",
            correo
        );

        sessionStorage.setItem(
            "mensajeUsuario",
            mensaje
        );

        document.getElementById("respuesta")
            .textContent =
            `✅ Gracias ${nombre}, hemos recibido tu mensaje correctamente.`;

        this.reset();
    }
);
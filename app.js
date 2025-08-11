/* ======= productosMock: 20 productos (placeholders de imagen) ======= */
const productosMock = [
  { nombre: "Leche Entera 1L", imagen: "https://images.unsplash.com/photo-1582719478147-8ee236b18a70?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 0.97 },
    { nombre: "Carrefour", precio: 0.99 },
    { nombre: "Alcampo", precio: 0.98 },
    { nombre: "Lidel", precio: 0.95 },
    { nombre: "DIA", precio: 0.96 }
  ]},
  { nombre: "Pan Baguette 250g", imagen: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 0.90 },
    { nombre: "Carrefour", precio: 1.00 },
    { nombre: "Alcampo", precio: 0.95 },
    { nombre: "Lidel", precio: 0.92 },
    { nombre: "DIA", precio: 0.94 }
  ]},
  { nombre: "Huevos 12u", imagen: "https://images.unsplash.com/photo-1505253210343-6f9a9b7e9e8b?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 2.60 },
    { nombre: "Carrefour", precio: 2.55 },
    { nombre: "Alcampo", precio: 2.50 },
    { nombre: "Lidel", precio: 2.45 },
    { nombre: "DIA", precio: 2.48 }
  ]},
  { nombre: "Arroz Largo 1kg", imagen: "https://images.unsplash.com/photo-1585238342020-d85ad8f1d7ac?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Alcampo", precio: 1.19 },
    { nombre: "Carrefour", precio: 1.32 },
    { nombre: "Mercadona", precio: 1.35 },
    { nombre: "Lidel", precio: 1.20 },
    { nombre: "DIA", precio: 1.25 }
  ]},
  { nombre: "Aceite Girasol 1L", imagen: "https://images.unsplash.com/photo-1585325701789-8d33c051fa92?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.95 },
    { nombre: "Carrefour", precio: 2.00 },
    { nombre: "Alcampo", precio: 1.85 },
    { nombre: "Lidel", precio: 1.80 },
    { nombre: "DIA", precio: 1.88 }
  ]},
  { nombre: "Tomate Frito 400g", imagen: "https://images.unsplash.com/photo-1576186724105-6ab01361ab9d?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 0.75 },
    { nombre: "Carrefour", precio: 0.80 },
    { nombre: "Alcampo", precio: 0.78 },
    { nombre: "Lidel", precio: 0.73 },
    { nombre: "DIA", precio: 0.76 }
  ]},
  { nombre: "Lechuga Iceberg", imagen: "https://images.unsplash.com/photo-1556910103-1a241f4aa4c4?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.00 },
    { nombre: "Carrefour", precio: 1.10 },
    { nombre: "Alcampo", precio: 1.05 },
    { nombre: "Lidel", precio: 0.98 },
    { nombre: "DIA", precio: 1.00 }
  ]},
  { nombre: "Zumo Naranja 1L", imagen: "https://images.unsplash.com/photo-1572441710551-978fe993d83b?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.40 },
    { nombre: "Carrefour", precio: 1.35 },
    { nombre: "Alcampo", precio: 1.30 },
    { nombre: "Lidel", precio: 1.32 },
    { nombre: "DIA", precio: 1.29 }
  ]},
  { nombre: "Manzanas Golden 1kg", imagen: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.90 },
    { nombre: "Carrefour", precio: 2.00 },
    { nombre: "Alcampo", precio: 1.85 },
    { nombre: "Lidel", precio: 1.88 },
    { nombre: "DIA", precio: 1.89 }
  ]},
  { nombre: "Plátanos 1kg", imagen: "https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.80 },
    { nombre: "Carrefour", precio: 1.75 },
    { nombre: "Alcampo", precio: 1.85 },
    { nombre: "Lidel", precio: 1.70 },
    { nombre: "DIA", precio: 1.72 }
  ]},
  { nombre: "Yogur natural pack 4", imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.10 },
    { nombre: "Carrefour", precio: 1.05 },
    { nombre: "Alcampo", precio: 1.08 },
    { nombre: "Lidel", precio: 1.12 },
    { nombre: "DIA", precio: 1.07 }
  ]},
  { nombre: "Café molido 250g", imagen: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 2.20 },
    { nombre: "Carrefour", precio: 2.10 },
    { nombre: "Alcampo", precio: 2.15 },
    { nombre: "Lidel", precio: 2.18 },
    { nombre: "DIA", precio: 2.12 }
  ]},
  { nombre: "Galletas María 800g", imagen: "https://images.unsplash.com/photo-1561214119-e85b89f9377b?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.25 },
    { nombre: "Carrefour", precio: 1.30 },
    { nombre: "Alcampo", precio: 1.28 },
    { nombre: "Lidel", precio: 1.22 },
    { nombre: "DIA", precio: 1.27 }
  ]},
  { nombre: "Pollo entero (kg)", imagen: "https://images.unsplash.com/photo-1604908177522-bd48d3a0d119?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 3.90 },
    { nombre: "Carrefour", precio: 4.00 },
    { nombre: "Alcampo", precio: 3.95 },
    { nombre: "Lidel", precio: 3.85 },
    { nombre: "DIA", precio: 3.88 }
  ]},
  { nombre: "Pechuga pollo (kg)", imagen: "https://images.unsplash.com/photo-1590080877777-639c02c2f98a?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 6.50 },
    { nombre: "Carrefour", precio: 6.70 },
    { nombre: "Alcampo", precio: 6.40 },
    { nombre: "Lidel", precio: 6.30 },
    { nombre: "DIA", precio: 6.35 }
  ]},
  { nombre: "Filetes ternera (kg)", imagen: "https://images.unsplash.com/photo-1587393564653-1ff30c1ec94e?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 10.50 },
    { nombre: "Carrefour", precio: 10.30 },
    { nombre: "Alcampo", precio: 10.40 },
    { nombre: "Lidel", precio: 10.20 },
    { nombre: "DIA", precio: 10.25 }
  ]},
  { nombre: "Macarrones 500g", imagen: "https://images.unsplash.com/photo-1590080877831-4f315f5e5166?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 0.90 },
    { nombre: "Carrefour", precio: 0.85 },
    { nombre: "Alcampo", precio: 0.88 },
    { nombre: "Lidel", precio: 0.87 },
    { nombre: "DIA", precio: 0.89 }
  ]},
  { nombre: "Pasta integral 500g", imagen: "https://images.unsplash.com/photo-1590080877827-8f2e99e786f0?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 1.20 },
    { nombre: "Carrefour", precio: 1.18 },
    { nombre: "Alcampo", precio: 1.15 },
    { nombre: "Lidel", precio: 1.10 },
    { nombre: "DIA", precio: 1.12 }
  ]},
  { nombre: "Cerveza 6 pack", imagen: "https://images.unsplash.com/photo-1510626176961-4b78a4e9a15f?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 3.50 },
    { nombre: "Carrefour", precio: 3.60 },
    { nombre: "Alcampo", precio: 3.55 },
    { nombre: "Lidel", precio: 3.45 },
    { nombre: "DIA", precio: 3.48 }
  ]},
  { nombre: "Agua mineral 1.5L", imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", supermercados: [
    { nombre: "Mercadona", precio: 0.50 },
    { nombre: "Carrefour", precio: 0.52 },
    { nombre: "Alcampo", precio: 0.48 },
    { nombre: "Lidel", precio: 0.47 },
    { nombre: "DIA", precio: 0.49 }
  ]}
];

/* ======= Variables y selección de elementos ======= */
const busquedaInput = document.getElementById("busqueda");
const filterSuper = document.getElementById("filter-super");
const btnBuscar = document.getElementById("btn-buscar");
const listaResultados = document.getElementById("listaResultados");
const listaProductos = document.getElementById("listaProductos");
const countList = document.getElementById("count-list");
const resultadoEconomico = document.getElementById("resultadoEconomico");
const btnClear = document.getElementById("btn-clear");
const btnDownload = document.getElementById("btn-download");

/* ======= Estado de la lista de la compra ======= */
let listaCompra = [];

/* ======= Función para mostrar productos filtrados ======= */
function mostrarResultados(productos) {
  listaResultados.innerHTML = "";
  if (productos.length === 0) {
    listaResultados.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }
  productos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto-card";
    // Precio más barato según filtro
    let preciosFiltrados = producto.supermercados;
    const filtro = filterSuper.value;
    if (filtro !== "all") {
      preciosFiltrados = producto.supermercados.filter(s => s.nombre === filtro);
    }
    if (preciosFiltrados.length === 0) return; // No hay precios para ese supermercado

    const precioMin = Math.min(...preciosFiltrados.map(s => s.precio));
    const superMin = preciosFiltrados.find(s => s.precio === precioMin).nombre;

    div.innerHTML = `
      <img src="${producto.imagen}" alt="Imagen de ${producto.nombre}" />
      <h4>${producto.nombre}</h4>
      <p>Precio más barato en <strong>${superMin}</strong>: ${precioMin.toFixed(2)} €</p>
      <button class="btn-agregar">Agregar a lista</button>
    `;

    // Agregar funcionalidad al botón
    const btnAgregar = div.querySelector(".btn-agregar");
    btnAgregar.addEventListener("click", () => {
      agregarALista(producto, superMin, precioMin);
    });

    listaResultados.appendChild(div);
  });
}

/* ======= Función para agregar producto a lista ======= */
function agregarALista(producto, supermercado, precio) {
  const existe = listaCompra.find(item => item.nombre === producto.nombre && item.supermercado === supermercado);
  if (existe) {
    existe.cantidad++;
  } else {
    listaCompra.push({ nombre: producto.nombre, supermercado, precio, cantidad: 1 });
  }
  actualizarLista();
}

/* ======= Función para actualizar lista de la compra ======= */
function actualizarLista() {
  listaProductos.innerHTML = "";
  if (listaCompra.length === 0) {
    listaProductos.innerHTML = "<li>No hay productos en la lista.</li>";
    resultadoEconomico.textContent = "";
    countList.textContent = "0";
    return;
  }
  let total = 0;
  listaCompra.forEach(item => {
    total += item.precio * item.cantidad;
    const li = document.createElement("li");
    li.textContent = `${item.nombre} (${item.supermercado}) x${item.cantidad} - ${(item.precio * item.cantidad).toFixed(2)} €`;
    listaProductos.appendChild(li);
  });
  resultadoEconomico.textContent = `Total aproximado: ${total.toFixed(2)} €`;
  countList.textContent = listaCompra.length.toString();
}

/* ======= Función para filtrar productos según búsqueda y supermercado ======= */
function filtrarProductos() {
  const texto = busquedaInput.value.trim().toLowerCase();
  const filtro = filterSuper.value;
  const filtrados = productosMock.filter(producto => {
    const matchNombre = producto.nombre.toLowerCase().includes(texto);
    if (!matchNombre) return false;
    if (filtro === "all") return true;
    return producto.supermercados.some(s => s.nombre === filtro);
  });
  mostrarResultados(filtrados);
}

/* ======= Eventos ======= */
btnBuscar.addEventListener("click", filtrarProductos);

busquedaInput.addEventListener("keyup", e => {
  if (e.key === "Enter") filtrarProductos();
});

btnClear.addEventListener("click", () => {
  listaCompra = [];
  actualizarLista();
});

btnDownload.addEventListener("click", () => {
  if (listaCompra.length === 0) {
    alert("La lista está vacía.");
    return;
  }
  let csv = "Producto,Supermercado,Precio,Cantidad\n";
  listaCompra.forEach(item => {
    csv += `${item.nombre},${item.supermercado},${item.precio.toFixed(2)},${item.cantidad}\n`;
  });
  const blob = new Blob([csv], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "lista_compra.csv";
  a.click();
  URL.revokeObjectURL(url);
});

/* ======= Mostrar inicialmente todos los productos ======= */
mostrarResultados(productosMock);
actualizarLista();

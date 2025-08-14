/* ---------- Constantes y Estado Global ---------- */
let listaCompra = []; // Array de objetos añadidos

/* ---------- Datos Mock ---------- */
const productosMock = [
  { nombre: "Leche Entera 1L", imagen: "https://static-centrallecheraasturiana.pro.centrallecheraasturiana.es/uploads/2017/02/08410297112041_C1N1-2048x2048.png", supermercados: [{ nombre: "Mercadona", precio: 0.97 }, { nombre: "Carrefour", precio: 0.99 }, { nombre: "Alcampo", precio: 0.98 }, { nombre: "Lidl", precio: 0.95 }, { nombre: "Dia", precio: 1.02 }] },
  { nombre: "Pan Baguette 250g", imagen: "https://a1.soysuper.com/1b8ba2c5ab77e8e4e19bea1653b410d4.340.340.0.min.wmark.fa28f641.jpg", supermercados: [{ nombre: "Mercadona", precio: 0.57 }, { nombre: "Carrefour", precio: 0.94 }, { nombre: "Alcampo", precio: 0.95 }, { nombre: "Lidl", precio: 0.85 }, { nombre: "Dia", precio: 0.53 }] },
  { nombre: "Huevos 12u", imagen: "https://prod-mercadona.imgix.net/images/caff2c1966c9890184b1a49c72679ad1.jpg?fit=crop&h=300&w=300", supermercados: [{ nombre: "Mercadona", precio: 2.80 }, { nombre: "Carrefour", precio: 2.80 }, { nombre: "Alcampo", precio: 2.47 }, { nombre: "Lidl", precio: 2.45 }, { nombre: "Dia", precio: 2.60 }] },
  { nombre: "Arroz Largo 1kg", imagen: "https://static.carrefour.es/hd_510x_/img_pim_food/197726_00_1.jpg", supermercados: [{ nombre: "Alcampo", precio: 1.19 }, { nombre: "Carrefour", precio: 1.35 }, { nombre: "Mercadona", precio: 1.35 }, { nombre: "Lidl", precio: 1.05 }, { nombre: "Dia", precio: 1.35 }] },
  { nombre: "Aceite Girasol 1L", imagen: "https://via.placeholder.com/600x400?text=Aceite+Girasol", supermercados: [{ nombre: "Mercadona", precio: 1.95 }, { nombre: "Carrefour", precio: 2.00 }, { nombre: "Alcampo", precio: 1.85 }, { nombre: "Lidl", precio: 1.79 }, { nombre: "Dia", precio: 1.98 }] },
  { nombre: "Tomate Frito 400g", imagen: "https://via.placeholder.com/600x400?text=Tomate+Frito", supermercados: [{ nombre: "Mercadona", precio: 0.75 }, { nombre: "Carrefour", precio: 0.80 }, { nombre: "Alcampo", precio: 0.78 }, { nombre: "Lidl", precio: 0.72 }, { nombre: "Dia", precio: 0.79 }] },
  { nombre: "Lechuga Iceberg", imagen: "https://via.placeholder.com/600x400?text=Lechuga+Iceberg", supermercados: [{ nombre: "Mercadona", precio: 1.00 }, { nombre: "Carrefour", precio: 1.10 }, { nombre: "Alcampo", precio: 1.05 }, { nombre: "Lidl", precio: 0.95 }, { nombre: "Dia", precio: 1.08 }] },
  { nombre: "Zumo Naranja 1L", imagen: "https://via.placeholder.com/600x400?text=Zumo+Naranja", supermercados: [{ nombre: "Mercadona", precio: 1.40 }, { nombre: "Carrefour", precio: 1.35 }, { nombre: "Alcampo", precio: 1.30 }, { nombre: "Lidl", precio: 1.25 }, { nombre: "Dia", precio: 1.42 }] },
  { nombre: "Manzanas Golden 1kg", imagen: "https://via.placeholder.com/600x400?text=Manzanas+Golden", supermercados: [{ nombre: "Mercadona", precio: 1.90 }, { nombre: "Carrefour", precio: 2.00 }, { nombre: "Alcampo", precio: 1.85 }, { nombre: "Lidl", precio: 1.75 }, { nombre: "Dia", precio: 1.88 }] },
  { nombre: "Plátanos 1kg", imagen: "https://via.placeholder.com/600x400?text=Platanos+1kg", supermercados: [{ nombre: "Mercadona", precio: 1.80 }, { nombre: "Carrefour", precio: 1.75 }, { nombre: "Alcampo", precio: 1.85 }, { nombre: "Lidl", precio: 1.60 }, { nombre: "Dia", precio: 1.70 }] },
  // ... (puedes agregar el resto de productos mock si los tienes)
];

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const updateCount = () => ($('count-list')?.textContent = listaCompra.length || 0);

/* ---------- Funciones de Renderizado ---------- */
function renderResultados(items) {
  const cont = $('listaResultados');
  if (!cont) {
    console.error("Elemento listaResultados no encontrado");
    return;
  }
  cont.innerHTML = '';
  if (!items || items.length === 0) {
    cont.innerHTML = '<p>No se encontraron productos.</p>';
    return;
  }
  items.forEach((p) => {
    const minPriceSup = p.supermercados.reduce((min, s) => (min.precio < s.precio ? min : s), p.supermercados[0]);
    const card = document.createElement('div');
    card.className = 'card-producto';
    card.innerHTML = `
      <img loading="lazy" src="${p.imagen || 'https://via.placeholder.com/150?text=Producto'}" alt="${p.nombre}" />
      <div class="info">
        <h4>${p.nombre}</h4>
        <div class="price-row">
          ${p.supermercados.map(s => `<p>${s.nombre}: $${s.precio.toFixed(2)}</p>`).join('')}
        </div>
        <p class="hint">Mejor precio: <strong>$${minPriceSup.precio.toFixed(2)} (${minPriceSup.nombre})</strong></p>
        <button data-name="${p.nombre}" onclick="agregarALista(${JSON.stringify(p)})">Añadir</button>
      </div>
    `;
    cont.appendChild(card);
  });
}

/* ---------- Búsqueda y Filtrado ---------- */
async function buscarProducto() {
  const q = $('busqueda')?.value.trim().toLowerCase() || '';
  const filtro = $('filter-super')?.value || 'all';

  if (!q) {
    renderResultados([]);
    return;
  }

  try {
    const response = await fetch(`/api/buscar?q=${encodeURIComponent(q)}`);
    if (!response.ok) throw new Error('Error en la búsqueda: ' + response.statusText);
    const resultados = await response.json();

    // Normalizar estructura para compatibilidad con mock
    const normalizedResults = resultados.map(item => ({
      nombre: item.nombre,
      imagen: item.imagen,
      supermercados: [
        { nombre: "Mercadona", precio: item.supermercado === "Mercadona" ? parseFloat(item.precio.replace(/[^0-9.,]/g, "").replace(",", ".")) : 9999 },
        { nombre: "Carrefour", precio: item.supermercado === "Carrefour" ? parseFloat(item.precio.replace(/[^0-9.,]/g, "").replace(",", ".")) : 9999 },
        { nombre: "Alcampo", precio: 9999 },
        { nombre: "Lidl", precio: 9999 },
        { nombre: "Dia", precio: 9999 }
      ]
    }));

    // Filtrar por supermercado si se selecciona
    let filteredResults = normalizedResults;
    if (filtro !== 'all') {
      filteredResults = normalizedResults.filter(p => p.supermercados.some(s => s.nombre === filtro && s.precio < 9999));
    }

    renderResultados(filteredResults.length > 0 ? filteredResults : []);
  } catch (error) {
    console.error('Error al buscar:', error);
    alert('No se pudieron cargar los productos desde la API. Usando datos mock.');
    const mockResults = productosMock.filter(p => p.nombre.toLowerCase().includes(q));
    if (filtro !== 'all') {
      mockResults = mockResults.filter(p => p.supermercados.some(s => s.nombre === filtro));
    }
    renderResultados(mockResults);
  }
}

/* ---------- Gestión de Lista de Compra ---------- */
function agregarALista(producto) {
  const mejor = producto.supermercados.reduce((acc, s) => (acc.precio < s.precio ? acc : s), producto.supermercados[0]);
  const item = {
    nombre: producto.nombre,
    imagen: producto.imagen,
    supermercado: mejor.nombre,
    precio: mejor.precio,
    origen: producto
  };
  listaCompra.push(item);
  actualizarLista();
}

function actualizarLista() {
  const ul = $('listaProductos');
  if (!ul) {
    console.error("Elemento listaProductos no encontrado");
    return;
  }
  ul.innerHTML = '';
  listaCompra.forEach((it, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${it.nombre}</strong><br>
        <small>Elegido: ${it.supermercado} • $${it.precio.toFixed(2)}</small>
      </div>
      <button aria-label="eliminar" data-i="${idx}">❌</button>
    `;
    li.querySelector('button').addEventListener('click', () => eliminarProducto(idx));
    ul.appendChild(li);
  });
  updateCount();
  calcularSuperEconomico();
}

function eliminarProducto(index) {
  listaCompra.splice(index, 1);
  actualizarLista();
}

/* ---------- Cálculo de Resumen ---------- */
function calcularSuperEconomico() {
  const totales = {};
  const supermercadosSet = new Set();

  productosMock.forEach(p => p.supermercados.forEach(s => supermercadosSet.add(s.nombre)));
  supermercadosSet.forEach(s => totales[s] = 0);

  listaCompra.forEach(item => {
    item.origen.supermercados.forEach(s => {
      if (!totales[s.nombre]) totales[s.nombre] = 0;
      totales[s.nombre] += s.precio;
    });
  });

  const orden = Object.entries(totales).sort((a, b) => a[1] - b[1]);
  const out = $('resultadoEconomico');
  if (!out || listaCompra.length === 0) {
    out.innerHTML = '<p>No hay productos en la lista.</p>';
    return;
  }

  const [mejor, totalMejor] = orden[0];
  const [peor, totalPeor] = orden[orden.length - 1] || [mejor, totalMejor];
  const ahorro = totalPeor - totalMejor;

  let detalle = '<h4>Detalle por producto</h4><ul>';
  listaCompra.forEach(it => {
    const p = it.origen;
    detalle += `<li><strong>${p.nombre}</strong>: ${p.supermercados.map(s => `${s.nombre}: $${s.precio.toFixed(2)}`).join(' / ')}</li>`;
  });
  detalle += '</ul>';

  let listaTotalesHtml = orden.map(([k, v]) => `<li>${k}: $${v.toFixed(2)}</li>`).join('');

  out.innerHTML = `
    <h3>Resumen de Compra</h3>
    <p><strong>Mejor opción (total):</strong> ${mejor} — $${totalMejor.toFixed(2)}</p>
    <p><strong>Ahorro estimado:</strong> $${ahorro.toFixed(2)} (comparado con ${peor})</p>
    <hr>
    <h4>Totales por supermercado</h4>
    <ul>${listaTotalesHtml}</ul>
    <hr>
    ${detalle}
    <h4 style="color: green;">✅ Total ahorrado estimado: $${ahorro.toFixed(2)}</h4>
  `;
}

/* ---------- Acciones Auxiliares ---------- */
function vaciarLista() {
  if (confirm('Vaciar la lista?')) {
    listaCompra = [];
    actualizarLista();
  }
}

function downloadCSV() {
  if (listaCompra.length === 0) return alert('La lista está vacía.');
  const rows = [['Producto', 'Supermercado elegido', 'Precio elegido']];
  listaCompra.forEach(it => rows.push([it.nombre, it.supermercado, it.precio.toFixed(2)]));
  const csv = rows.map(r => r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'lista_compra.csv';
  a.click();
  URL.revokeObjectURL(url);
}

/* ---------- Inicialización ---------- */
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM cargado, inicializando...");
  renderResultados(productosMock); // Carga inicial con mock
  $('btn-buscar')?.addEventListener('click', buscarProducto);
  $('btn-clear')?.addEventListener('click', vaciarLista);
  $('btn-download')?.addEventListener('click', downloadCSV);
  $('btn-open-list')?.addEventListener('click', () => {
    const listaCompraEl = $('#listaCompra');
    if (listaCompraEl) {
      window.scrollTo({ top: listaCompraEl.offsetTop - 20, behavior: 'smooth' });
    } else {
      console.error("Elemento #listaCompra no encontrado");
    }
  });
  $('busqueda')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') buscarProducto(); });
  updateCount();
});

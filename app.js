/* ---------- Constantes y Estado Global ---------- */
let listaCompra = []; // Array de objetos añadidos

/* ---------- Helpers ---------- */
const $ = (id) => document.getElementById(id);
const updateCount = () => ($('count-list')?.textContent = listaCompra.length || 0);

/* ---------- Funciones de Renderizado ---------- */
function renderResultados(items) {
  const cont = $('listaResultados');
  if (!cont) return;
  cont.innerHTML = '';
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
        <p class="hint">Mejor precio: <strong>$${minPriceSup.precio.toFixed(2)}</strong></p>
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
    if (!response.ok) throw new Error('Error en la búsqueda');
    const resultados = await response.json();

    // Filtrar por supermercado si se selecciona
    let filteredResults = resultados;
    if (filtro !== 'all') {
      filteredResults = resultados.filter(p => p.supermercado === filtro);
    }

    // Normalizar estructura para compatibilidad con mock
    const normalizedResults = filteredResults.map(item => ({
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

    renderResultados(normalizedResults);
  } catch (error) {
    console.error('Error al buscar:', error);
    alert('No se pudieron cargar los productos. Usando datos mock.');
    const mockResults = productosMock.filter(p => p.nombre.toLowerCase().includes(q));
    if (filtro !== 'all') {
      mockResults.filter(p => p.supermercados.some(s => s.nombre === filtro));
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
  if (!ul) return;
  ul.innerHTML = '';
  listaCompra.forEach((it, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${it.nombre}</strong><br>
        <small>Elegido: ${it.supermercado} • ${it.precio.toFixed(2)} €</small>
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
    detalle += `<li><strong>${p.nombre}</strong>: ${p.supermercados.map(s => `${s.nombre}: €${s.precio.toFixed(2)}`).join(' / ')}</li>`;
  });
  detalle += '</ul>';

  let listaTotalesHtml = orden.map(([k, v]) => `<li>${k}: €${v.toFixed(2)}</li>`).join('');

  out.innerHTML = `
    <h3>Resumen de Compra</h3>
    <p><strong>Mejor opción (total):</strong> ${mejor} — €${totalMejor.toFixed(2)}</p>
    <p><strong>Ahorro estimado:</strong> €${ahorro.toFixed(2)} (comparado con ${peor})</p>
    <hr>
    <h4>Totales por supermercado</h4>
    <ul>${listaTotalesHtml}</ul>
    <hr>
    ${detalle}
    <h4 style="color: green;">✅ Total ahorrado estimado: €${ahorro.toFixed(2)}</h4>
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
  renderResultados(productosMock); // Carga inicial con mock
  $('btn-buscar')?.addEventListener('click', buscarProducto);
  $('btn-clear')?.addEventListener('click', vaciarLista);
  $('btn-download')?.addEventListener('click', downloadCSV);
  $('btn-open-list')?.addEventListener('click', () => {
    window.scrollTo({ top: document.querySelector('#listaCompra').offsetTop - 20, behavior: 'smooth' });
  });
  $('busqueda')?.addEventListener('keypress', (e) => { if (e.key === 'Enter') buscarProducto(); });
  updateCount();
});

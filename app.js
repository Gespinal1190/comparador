/* ======= productosMock: 30 productos (placeholders de imagen) ======= */
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

  { nombre: "Yogur natural pack 4", imagen: "https://via.placeholder.com/600x400?text=Yogur+4", supermercados: [{ nombre: "Mercadona", precio: 1.10 }, { nombre: "Carrefour", precio: 1.05 }, { nombre: "Alcampo", precio: 1.08 }, { nombre: "Lidl", precio: 0.99 }, { nombre: "Dia", precio: 1.12 }] },
  { nombre: "Café molido 250g", imagen: "https://via.placeholder.com/600x400?text=Cafe+250g", supermercados: [{ nombre: "Mercadona", precio: 2.20 }, { nombre: "Carrefour", precio: 2.10 }, { nombre: "Alcampo", precio: 2.15 }, { nombre: "Lidl", precio: 1.99 }, { nombre: "Dia", precio: 2.25 }] },
  { nombre: "Galletas María 800g", imagen: "https://via.placeholder.com/600x400?text=Galletas+Maria", supermercados: [{ nombre: "Mercadona", precio: 1.25 }, { nombre: "Carrefour", precio: 1.30 }, { nombre: "Alcampo", precio: 1.28 }, { nombre: "Lidl", precio: 1.15 }, { nombre: "Dia", precio: 1.22 }] },
  { nombre: "Pollo entero (kg)", imagen: "https://via.placeholder.com/600x400?text=Pollo+Entero", supermercados: [{ nombre: "Mercadona", precio: 3.90 }, { nombre: "Carrefour", precio: 4.00 }, { nombre: "Alcampo", precio: 3.95 }, { nombre: "Lidl", precio: 3.70 }, { nombre: "Dia", precio: 3.85 }] },
  { nombre: "Pechuga pollo (kg)", imagen: "https://via.placeholder.com/600x400?text=Pechuga+Pollo", supermercados: [{ nombre: "Mercadona", precio: 6.50 }, { nombre: "Carrefour", precio: 6.70 }, { nombre: "Alcampo", precio: 6.40 }, { nombre: "Lidl", precio: 6.20 }, { nombre: "Dia", precio: 6.45 }] },
  { nombre: "Filetes ternera (kg)", imagen: "https://via.placeholder.com/600x400?text=Filetes+Ternera", supermercados: [{ nombre: "Mercadona", precio: 10.50 }, { nombre: "Carrefour", precio: 10.30 }, { nombre: "Alcampo", precio: 10.40 }, { nombre: "Lidl", precio: 9.95 }, { nombre: "Dia", precio: 10.20 }] },
  { nombre: "Macarrones 500g", imagen: "https://via.placeholder.com/600x400?text=Macarrones+500g", supermercados: [{ nombre: "Mercadona", precio: 0.90 }, { nombre: "Carrefour", precio: 0.85 }, { nombre: "Alcampo", precio: 0.88 }, { nombre: "Lidl", precio: 0.79 }, { nombre: "Dia", precio: 0.83 }] },
  { nombre: "Chocolate 100g", imagen: "https://via.placeholder.com/600x400?text=Chocolate+100g", supermercados: [{ nombre: "Mercadona", precio: 0.90 }, { nombre: "Carrefour", precio: 0.95 }, { nombre: "Alcampo", precio: 0.92 }, { nombre: "Lidl", precio: 0.85 }, { nombre: "Dia", precio: 0.88 }] },
  { nombre: "Sal fina 1kg", imagen: "https://via.placeholder.com/600x400?text=Sal+1kg", supermercados: [{ nombre: "Mercadona", precio: 0.40 }, { nombre: "Carrefour", precio: 0.38 }, { nombre: "Alcampo", precio: 0.39 }, { nombre: "Lidl", precio: 0.35 }, { nombre: "Dia", precio: 0.37 }] },
  { nombre: "Azúcar blanco 1kg", imagen: "https://via.placeholder.com/600x400?text=Azucar+1kg", supermercados: [{ nombre: "Mercadona", precio: 1.05 }, { nombre: "Carrefour", precio: 1.00 }, { nombre: "Alcampo", precio: 1.03 }, { nombre: "Lidl", precio: 0.95 }, { nombre: "Dia", precio: 0.99 }] },

  { nombre: "Leche Semidesnatada 1L", imagen: "https://via.placeholder.com/600x400?text=Leche+Semi", supermercados: [{ nombre: "Mercadona", precio: 0.95 }, { nombre: "Carrefour", precio: 0.98 }, { nombre: "Alcampo", precio: 0.96 }, { nombre: "Lidl", precio: 0.92 }, { nombre: "Dia", precio: 0.99 }] },
  { nombre: "Queso Gouda 250g", imagen: "https://via.placeholder.com/600x400?text=Queso+Gouda", supermercados: [{ nombre: "Mercadona", precio: 2.80 }, { nombre: "Carrefour", precio: 2.95 }, { nombre: "Alcampo", precio: 2.75 }, { nombre: "Lidl", precio: 2.50 }, { nombre: "Dia", precio: 2.85 }] },
  { nombre: "Atún en aceite pack 3x80g", imagen: "https://via.placeholder.com/600x400?text=Atun+3x80g", supermercados: [{ nombre: "Mercadona", precio: 3.60 }, { nombre: "Carrefour", precio: 3.75 }, { nombre: "Alcampo", precio: 3.55 }, { nombre: "Lidl", precio: 3.40 }, { nombre: "Dia", precio: 3.70 }] },
  { nombre: "Pasta Tagliatelle 500g", imagen: "https://via.placeholder.com/600x400?text=Tagliatelle+500g", supermercados: [{ nombre: "Mercadona", precio: 1.10 }, { nombre: "Carrefour", precio: 1.05 }, { nombre: "Alcampo", precio: 1.08 }, { nombre: "Lidl", precio: 0.99 }, { nombre: "Dia", precio: 1.02 }] },
  { nombre: "Leche de Avena 1L", imagen: "https://via.placeholder.com/600x400?text=Leche+Avena", supermercados: [{ nombre: "Mercadona", precio: 1.55 }, { nombre: "Carrefour", precio: 1.60 }, { nombre: "Alcampo", precio: 1.50 }, { nombre: "Lidl", precio: 1.45 }, { nombre: "Dia", precio: 1.58 }] },
  { nombre: "Mantequilla 250g", imagen: "https://via.placeholder.com/600x400?text=Mantequilla+250g", supermercados: [{ nombre: "Mercadona", precio: 2.10 }, { nombre: "Carrefour", precio: 2.05 }, { nombre: "Alcampo", precio: 2.00 }, { nombre: "Lidl", precio: 1.95 }, { nombre: "Dia", precio: 2.12 }] },
  { nombre: "Cereales 500g", imagen: "https://via.placeholder.com/600x400?text=Cereales+500g", supermercados: [{ nombre: "Mercadona", precio: 2.85 }, { nombre: "Carrefour", precio: 2.95 }, { nombre: "Alcampo", precio: 2.80 }, { nombre: "Lidl", precio: 2.40 }, { nombre: "Dia", precio: 2.70 }] },
  { nombre: "Leche Desnatada 1L", imagen: "https://via.placeholder.com/600x400?text=Leche+Desnatada", supermercados: [{ nombre: "Mercadona", precio: 0.94 }, { nombre: "Carrefour", precio: 0.96 }, { nombre: "Alcampo", precio: 0.95 }, { nombre: "Lidl", precio: 0.90 }, { nombre: "Dia", precio: 0.98 }] },
  { nombre: "Aceitunas 200g", imagen: "https://via.placeholder.com/600x400?text=Aceitunas+200g", supermercados: [{ nombre: "Mercadona", precio: 1.45 }, { nombre: "Carrefour", precio: 1.50 }, { nombre: "Alcampo", precio: 1.40 }, { nombre: "Lidl", precio: 1.35 }, { nombre: "Dia", precio: 1.48 }] }
];

let listaCompra = []; // array de objetos añadidos

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const updateCount = () => { const el = $('count-list'); if(el) el.textContent = listaCompra.length; }

/* ---------- render resultados ---------- */
function renderResultados(items){
  const cont = $('listaResultados');
  cont.innerHTML = '';
  items.forEach((p, globalIndex) => {
    const card = document.createElement('div');
    card.className = 'card-producto';
    card.innerHTML = `
      <img loading="lazy" src="${p.imagen}" alt="${p.nombre}" />
      <div class="info">
        <h4>${p.nombre}</h4>
        <div class="price-row">
          <small>${p.supermercados.map(s => s.nombre).join(' • ')}</small>
        </div>
        <p class="hint">Precio ejemplo: <strong>${minPrice(p).toFixed(2)} €</strong></p>
        <button data-name="${p.nombre}">Añadir a lista</button>
      </div>
    `;
    // botón añadir
    card.querySelector('button').addEventListener('click', () => {
      agregarALista(p);
    });
    cont.appendChild(card);
  });
}

/* ---------- búsqueda y filtrado ---------- */
function minPrice(producto){
  return Math.min(...producto.supermercados.map(s => s.precio));
}

function buscarProducto(){
  const q = ($('busqueda') && $('busqueda').value.trim().toLowerCase()) || '';
  const filtro = $('filter-super') ? $('filter-super').value : 'all';
  let resultados = productosMock.filter(p => p.nombre.toLowerCase().includes(q));
  if(filtro !== 'all'){
    resultados = resultados.filter(p => p.supermercados.some(s => s.nombre === filtro));
  }
  renderResultados(resultados);
}

/* ---------- añadir / actualizar lista ---------- */
function agregarALista(producto){
  // guardamos una copia ligera con la referencia al producto original (origen)
  const mejor = producto.supermercados.reduce((acc,s) => acc.precio < s.precio ? acc : s);
  const item = {
    nombre: producto.nombre,
    imagen: producto.imagen,
    supermercado: mejor.nombre,
    precio: mejor.precio,
    origen: producto // referencia al objeto original para poder consultar todos los precios
  };
  listaCompra.push(item);
  actualizarLista();
}

function actualizarLista(){
  const ul = $('listaProductos');
  ul.innerHTML = '';
  listaCompra.forEach((it, idx) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${it.nombre}</strong><br>
        <small>Elegido: ${it.supermercado} • ${it.precio.toFixed(2)} €</small>
      </div>
      <div>
        <button aria-label="eliminar" data-i="${idx}">❌</button>
      </div>
    `;
    li.querySelector('button').addEventListener('click', () => {
      eliminarProducto(idx);
    });
    ul.appendChild(li);
  });
  updateCount();
  calcularSuperEconomico();
}

/* ---------- eliminar ---------- */
function eliminarProducto(index){
  listaCompra.splice(index,1);
  actualizarLista();
}

/* ---------- cálculo resumen ---------- */
function calcularSuperEconomico(){
  // Queremos calcular el total POR supermercado sumando el precio que tendría cada producto
  // en ese supermercado (usando la referencia `origen` en cada item).
  const totales = {};
  const supermercadosSet = new Set();

  // Inicializar totales con todas las cadenas que aparezcan en datos
  productosMock.forEach(p => p.supermercados.forEach(s => supermercadosSet.add(s.nombre)));
  supermercadosSet.forEach(s => totales[s] = 0);

  // Para cada producto en la lista, sumar en cada supermercado el precio que ese producto tiene allí
  listaCompra.forEach(item => {
    const productoOriginal = item.origen;
    productoOriginal.supermercados.forEach(s => {
      // si no existe el supermercado en totales (por si hay nombres nuevos), lo creamos
      if (!totales[s.nombre]) totales[s.nombre] = 0;
      totales[s.nombre] += s.precio;
    });
  });

  // Convertir a array ordenado por total ascendente
  const orden = Object.entries(totales).sort((a,b)=> a[1]-b[1]);

  const out = $('resultadoEconomico');
  if(!out) return;
  // Si la lista está vacía, mostramos mensaje y no mostramos totales con 0 acumulado
  if(listaCompra.length === 0){
    out.innerHTML = '<p>No hay productos en la lista.</p>';
    return;
  }

  const [mejor, totalMejor] = orden[0];
  const [peor, totalPeor] = orden[orden.length-1] || [mejor,totalMejor];
  const ahorro = (totalPeor - totalMejor);

  // Detalle por producto (mostrar cada producto con precios en todos los supers)
  let detalle = '<h4>Detalle por producto</h4><ul>';
  listaCompra.forEach(it => {
    const p = it.origen;
    detalle += `<li><strong>${p.nombre}</strong>: ${p.supermercados.map(s => `${s.nombre}: €${s.precio.toFixed(2)}`).join(' / ')}</li>`;
  });
  detalle += '</ul>';

  // Totales por supermercado (solo mostrar aquellos que tienen suma > 0)
  let listaTotalesHtml = orden.map(([k,v]) => `<li>${k}: €${v.toFixed(2)}</li>`).join('');

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

/* ---------- acciones auxiliares ---------- */
function vaciarLista(){ listaCompra=[]; actualizarLista(); }
function downloadCSV(){
  if(listaCompra.length===0) return alert('La lista está vacía.');
  const rows = [['Producto','Supermercado elegido','Precio elegido']];
  listaCompra.forEach(it => rows.push([it.nombre,it.supermercado,it.precio.toFixed(2)]));
  const csv = rows.map(r=> r.map(cell=> `"${String(cell).replace(/"/g,'""')}"`).join(',')).join('\n');
  const blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'lista_compra.csv'; a.click();
  URL.revokeObjectURL(url);
}

/* ---------- inicialización ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderResultados(productosMock);
  const btnBuscar = $('btn-buscar');
  if(btnBuscar) btnBuscar.addEventListener('click', buscarProducto);
  const btnClear = $('btn-clear');
  if(btnClear) btnClear.addEventListener('click', ()=>{ if(confirm('Vaciar la lista?')) vaciarLista(); });
  const btnDownload = $('btn-download');
  if(btnDownload) btnDownload.addEventListener('click', downloadCSV);
  const btnOpen = $('btn-open-list');
  if(btnOpen) btnOpen.addEventListener('click', ()=>{ window.scrollTo({top: document.querySelector('#listaCompra').offsetTop - 20, behavior:'smooth'})});
  const busquedaEl = $('busqueda');
  if(busquedaEl) busquedaEl.addEventListener('keypress', (e)=>{ if(e.key==='Enter') buscarProducto(); });
  updateCount();
});

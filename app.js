/* ======= productosMock: 20 productos (placeholders de imagen) ======= */
const productosMock = [
  { nombre: "Leche Entera 1L", imagen: "https://via.placeholder.com/600x400?text=Leche+Entera", supermercados: [{ nombre: "Mercadona", precio: 0.97 }, { nombre: "Carrefour", precio: 0.99 }, { nombre: "Alcampo", precio: 0.98 }] },
  { nombre: "Pan Baguette 250g", imagen: "https://via.placeholder.com/600x400?text=Pan+Baguette", supermercados: [{ nombre: "Mercadona", precio: 0.90 }, { nombre: "Carrefour", precio: 1.00 }, { nombre: "Alcampo", precio: 0.95 }] },
  { nombre: "Huevos 12u", imagen: "https://via.placeholder.com/600x400?text=Huevos+12u", supermercados: [{ nombre: "Mercadona", precio: 2.60 }, { nombre: "Carrefour", precio: 2.55 }, { nombre: "Alcampo", precio: 2.50 }] },
  { nombre: "Arroz Largo 1kg", imagen: "https://via.placeholder.com/600x400?text=Arroz+1kg", supermercados: [{ nombre: "Alcampo", precio: 1.19 }, { nombre: "Carrefour", precio: 1.32 }, { nombre: "Mercadona", precio: 1.35 }] },
  { nombre: "Aceite Girasol 1L", imagen: "https://via.placeholder.com/600x400?text=Aceite+Girasol", supermercados: [{ nombre: "Mercadona", precio: 1.95 }, { nombre: "Carrefour", precio: 2.00 }, { nombre: "Alcampo", precio: 1.85 }] },
  { nombre: "Tomate Frito 400g", imagen: "https://via.placeholder.com/600x400?text=Tomate+Frito", supermercados: [{ nombre: "Mercadona", precio: 0.75 }, { nombre: "Carrefour", precio: 0.80 }, { nombre: "Alcampo", precio: 0.78 }] },
  { nombre: "Lechuga Iceberg", imagen: "https://via.placeholder.com/600x400?text=Lechuga", supermercados: [{ nombre: "Mercadona", precio: 1.00 }, { nombre: "Carrefour", precio: 1.10 }, { nombre: "Alcampo", precio: 1.05 }] },
  { nombre: "Zumo Naranja 1L", imagen: "https://via.placeholder.com/600x400?text=Zumo+Naranja", supermercados: [{ nombre: "Mercadona", precio: 1.40 }, { nombre: "Carrefour", precio: 1.35 }, { nombre: "Alcampo", precio: 1.30 }] },
  { nombre: "Manzanas Golden 1kg", imagen: "https://via.placeholder.com/600x400?text=Manzanas", supermercados: [{ nombre: "Mercadona", precio: 1.90 }, { nombre: "Carrefour", precio: 2.00 }, { nombre: "Alcampo", precio: 1.85 }] },
  { nombre: "Plátanos 1kg", imagen: "https://via.placeholder.com/600x400?text=Platanos", supermercados: [{ nombre: "Mercadona", precio: 1.80 }, { nombre: "Carrefour", precio: 1.75 }, { nombre: "Alcampo", precio: 1.85 }] },
  { nombre: "Yogur natural pack 4", imagen: "https://via.placeholder.com/600x400?text=Yogur+4", supermercados: [{ nombre: "Mercadona", precio: 1.10 }, { nombre: "Carrefour", precio: 1.05 }, { nombre: "Alcampo", precio: 1.08 }] },
  { nombre: "Café molido 250g", imagen: "https://via.placeholder.com/600x400?text=Cafe+250g", supermercados: [{ nombre: "Mercadona", precio: 2.20 }, { nombre: "Carrefour", precio: 2.10 }, { nombre: "Alcampo", precio: 2.15 }] },
  { nombre: "Galletas María 800g", imagen: "https://via.placeholder.com/600x400?text=Galletas+Maria", supermercados: [{ nombre: "Mercadona", precio: 1.25 }, { nombre: "Carrefour", precio: 1.30 }, { nombre: "Alcampo", precio: 1.28 }] },
  { nombre: "Pollo entero (kg)", imagen: "https://via.placeholder.com/600x400?text=Pollo+Entero", supermercados: [{ nombre: "Mercadona", precio: 3.90 }, { nombre: "Carrefour", precio: 4.00 }, { nombre: "Alcampo", precio: 3.95 }] },
  { nombre: "Pechuga pollo (kg)", imagen: "https://via.placeholder.com/600x400?text=Pechuga+Pollo", supermercados: [{ nombre: "Mercadona", precio: 6.50 }, { nombre: "Carrefour", precio: 6.70 }, { nombre: "Alcampo", precio: 6.40 }] },
  { nombre: "Filetes ternera (kg)", imagen: "https://via.placeholder.com/600x400?text=Ternera", supermercados: [{ nombre: "Mercadona", precio: 10.50 }, { nombre: "Carrefour", precio: 10.30 }, { nombre: "Alcampo", precio: 10.40 }] },
  { nombre: "Macarrones 500g", imagen: "https://via.placeholder.com/600x400?text=Macarrones", supermercados: [{ nombre: "Mercadona", precio: 0.90 }, { nombre: "Carrefour", precio: 0.85 }, { nombre: "Alcampo", precio: 0.88 }] },
  { nombre: "Chocolate 100g", imagen: "https://via.placeholder.com/600x400?text=Chocolate", supermercados: [{ nombre: "Mercadona", precio: 0.90 }, { nombre: "Carrefour", precio: 0.95 }, { nombre: "Alcampo", precio: 0.92 }] },
  { nombre: "Sal fina 1kg", imagen: "https://via.placeholder.com/600x400?text=Sal+1kg", supermercados: [{ nombre: "Mercadona", precio: 0.40 }, { nombre: "Carrefour", precio: 0.38 }, { nombre: "Alcampo", precio: 0.39 }] },
  { nombre: "Azúcar blanco 1kg", imagen: "https://via.placeholder.com/600x400?text=Azucar+1kg", supermercados: [{ nombre: "Mercadona", precio: 1.05 }, { nombre: "Carrefour", precio: 1.00 }, { nombre: "Alcampo", precio: 1.03 }] }
];

let listaCompra = []; // array de objetos añadidos

/* ---------- helpers ---------- */
const $ = id => document.getElementById(id);
const updateCount = () => { $('count-list').textContent = listaCompra.length; }

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
  const q = $('busqueda').value.trim().toLowerCase();
  const filtro = $('filter-super').value;
  let resultados = productosMock.filter(p => p.nombre.toLowerCase().includes(q));
  if(filtro !== 'all'){
    resultados = resultados.filter(p => p.supermercados.some(s => s.nombre === filtro));
  }
  renderResultados(resultados);
}

/* ---------- añadir / actualizar lista ---------- */
function agregarALista(producto){
  // guardamos una copia ligera con el precio elegido: elegimos el precio mínimo por defecto
  const mejor = producto.supermercados.reduce((acc,s) => acc.precio < s.precio ? acc : s);
  const item = {
    nombre: producto.nombre,
    imagen: producto.imagen,
    supermercado: mejor.nombre,
    precio: mejor.precio,
    origen: producto // referencia
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
        <small>${it.supermercado} • ${it.precio.toFixed(2)} €</small>
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
  const totales = {};
  listaCompra.forEach(item => {
    totales[item.supermercado] = (totales[item.supermercado] || 0) + item.precio;
  });
  const orden = Object.entries(totales).sort((a,b)=> a[1]-b[1]);
  const out = $('resultadoEconomico');
  if(orden.length===0){
    out.innerHTML = '<p>No hay productos en la lista.</p>';
    return;
  }
  const [mejor, totalMejor] = orden[0];
  const [peor, totalPeor] = orden[orden.length-1] || [mejor,totalMejor];
  const ahorro = (totalPeor - totalMejor);
  out.innerHTML = `
    <h4>Resumen de compra</h4>
    <p><strong>Mejor opción:</strong> ${mejor} — ${totalMejor.toFixed(2)} €</p>
    <p><strong>Ahorro estimado:</strong> ${ahorro.toFixed(2)} € (comparado con ${peor})</p>
    <hr>
    <h5>Totales por supermercado</h5>
    <ul>
      ${orden.map(([k,v])=>`<li>${k}: ${v.toFixed(2)} €</li>`).join('')}
    </ul>
  `;
}

/* ---------- acciones auxiliares ---------- */
function vaciarLista(){ listaCompra=[]; actualizarLista(); }
function downloadCSV(){
  if(listaCompra.length===0) return alert('La lista está vacía.');
  const rows = [['Producto','Supermercado','Precio']];
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
  $('btn-buscar').addEventListener('click', buscarProducto);
  $('busqueda').addEventListener('keypress', (e)=>{ if(e.key==='Enter') buscarProducto(); });
  $('btn-clear').addEventListener('click', ()=>{ if(confirm('Vaciar la lista?')) vaciarLista(); });
  $('btn-download').addEventListener('click', downloadCSV);
  $('btn-open-list').addEventListener('click', ()=>{ window.scrollTo({top: document.querySelector('#listaCompra').offsetTop - 20, behavior:'smooth'})});
  updateCount();
});

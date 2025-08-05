const productosMock = [
  { nombre: "Leche Entera", supermercados: [ { nombre: "Super A", precio: 1.20 }, { nombre: "Super B", precio: 1.15 } ],  imagen: "https://via.placeholder.com/300x150?text=Leche" }, 
  { nombre: "Pan Baguette", supermercados: [ { nombre: "Super A", precio: 0.90 }, { nombre: "Super B", precio: 1.00 } ] ,  imagen: "https://via.placeholder.com/300x150?text=Leche" },
  { nombre: "Huevos 12u", supermercados: [ { nombre: "Super A", precio: 2.60 }, { nombre: "Super B", precio: 2.45 } ] ,  imagen: "https://via.placeholder.com/300x150?text=Leche" },
];

let listaCompra = [];

function buscarProducto() {
  const input = document.getElementById("busqueda").value.toLowerCase();
  const resultados = productosMock.filter(p => p.nombre.toLowerCase().includes(input));
  const contenedor = document.getElementById("listaResultados");
  contenedor.innerHTML = "";
  resultados.forEach(producto => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `<strong>${producto.nombre}</strong><br>${
      producto.supermercados.map(s => `${s.nombre}: $${s.precio.toFixed(2)}`).join("<br>")
    }<br><button onclick='agregarALista(${JSON.stringify(productosMock.indexOf(producto))})'>Añadir</button>`;
    contenedor.appendChild(div);
  });
}

function agregarALista(index) {
  const producto = productosMock[index];
  if (!listaCompra.includes(producto)) {
    listaCompra.push(producto);
    actualizarLista();
  }
}

function actualizarLista() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  listaCompra.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p.nombre;
    lista.appendChild(li);
  });
  calcularSuperEconomico();
}

function calcularSuperEconomico() {
  const totales = {};
  listaCompra.forEach(p => {
    p.supermercados.forEach(s => {
      totales[s.nombre] = (totales[s.nombre] || 0) + s.precio;
    });
  });
  const ordenado = Object.entries(totales).sort((a, b) => a[1] - b[1]);
  const resultado = document.getElementById("resultadoEconomico");
  if (ordenado.length > 0) {
    resultado.innerHTML = `<strong>${ordenado[0][0]}</strong> - Total: $${ordenado[0][1].toFixed(2)}`;
  } else {
    resultado.innerHTML = "";
  }
}

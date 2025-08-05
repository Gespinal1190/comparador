const productosMock = [
  {
    nombre: "Leche Entera",
    imagen: "https://via.placeholder.com/300x150?text=Leche",
    supermercados: [
      { nombre: "Super A", precio: 1.20 },
      { nombre: "Super B", precio: 1.15 }
    ]
  },
  {
    nombre: "Pan Baguette",
    imagen: "https://via.placeholder.com/300x150?text=Pan",
    supermercados: [
      { nombre: "Super A", precio: 0.90 },
      { nombre: "Super B", precio: 1.00 }
    ]
  },
  {
    nombre: "Huevos 12u",
    imagen: "https://via.placeholder.com/300x150?text=Huevos",
    supermercados: [
      { nombre: "Super A", precio: 2.60 },
      { nombre: "Super B", precio: 2.45 }
    ]
  }
];

let listaCompra = [];

function buscarProducto() {
  const input = document.getElementById("busqueda").value.toLowerCase();
  const resultados = productosMock.filter(p => p.nombre.toLowerCase().includes(input));
  const contenedor = document.getElementById("listaResultados");
  contenedor.innerHTML = "";

  if (resultados.length === 0) {
    contenedor.innerHTML = "<p>No se encontraron productos.</p>";
    return;
  }

  resultados.forEach(producto => {
    const index = productosMock.indexOf(producto);  // índice real del producto
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}" width="150" />
      <h4>${producto.nombre}</h4>
      ${producto.supermercados.map(s => `<p>${s.nombre}: $${s.precio.toFixed(2)}</p>`).join("")}
      <button onclick='agregarALista(${index})'>Añadir a la lista</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarALista(index) {
  const producto = productosMock[index];
  listaCompra.push(producto); // permite añadir múltiples veces cualquier producto
  actualizarLista();
}

function actualizarLista() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";

  listaCompra.forEach((p, i) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} <br>
      ${p.supermercados.map(s => `${s.nombre}: $${s.precio.toFixed(2)}`).join(" / ")}
      <button onclick="eliminarProducto(${i})">❌</button>
    `;
    lista.appendChild(li);
  });

  calcularSuperEconomico();
}

function eliminarProducto(index) {
  listaCompra.splice(index, 1);
  actualizarLista();
}

function calcularSuperEconomico() {
  const totales = {};

  listaCompra.forEach(p => {
    p.supermercados.forEach(s => {
      if (!totales[s.nombre]) totales[s.nombre] = 0;
      totales[s.nombre] += s.precio;
    });
  });

  const supermercadosOrdenados = Object.entries(totales).sort((a, b) => a[1] - b[1]);

  const resultado = document.getElementById("resultadoEconomico");
  if (supermercadosOrdenados.length === 0) {
    resultado.innerHTML = "";
    return;
  }

  const [superEcon, totalEcon] = supermercadosOrdenados[0];
  const [superCaro, totalCaro] = supermercadosOrdenados[supermercadosOrdenados.length - 1];
  const ahorro = totalCaro - totalEcon;

  resultado.innerHTML = `
    <h3>Resumen de Compra</h3>
    <p><strong>Total más económico:</strong> ${superEcon} - $${totalEcon.toFixed(2)}</p>
    <p><strong>Ahorro:</strong> $${ahorro.toFixed(2)} (comparado con ${superCaro})</p>
    <hr>
    <h4>Totales por supermercado:</h4>
    <ul>
      ${supermercadosOrdenados.map(([nombre, total]) => `<li>${nombre}: $${total.toFixed(2)}</li>`).join("")}
    </ul>
  `;
}

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

  resultados.forEach((producto, index) => {
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
  const yaExiste = listaCompra.find(p => p.nombre === producto.nombre);
  if (!yaExiste) {
    listaCompra.push(producto);
    actualizarLista();
  }
}

function actualizarLista() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  listaCompra.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${p.nombre} <br>
      ${p.supermercados.map(s => `${s.nombre}: $${s.precio.toFixed(2)}`).join(" / ")}
    `;
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
    resultado.innerHTML = `<h3>Supermercado más económico:</h3>
      <p><strong>${ordenado[0][0]}</strong> - Total: $${ordenado[0][1].toFixed(2)}</p>`;
  } else {
    resultado.innerHTML = "";
  }
}

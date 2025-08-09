const productosMock = [
  {
    nombre: "Leche Entera",
    imagen: "https://via.placeholder.com/300x150?text=Leche+Entera",
    supermercados: [
      { nombre: "Mercadona", precio: 1.20 },
      { nombre: "Carrefour", precio: 1.15 },
      { nombre: "Alcampo", precio: 1.18 }
    ]
  },
  {
    nombre: "Pan Baguette",
    imagen: "https://via.placeholder.com/300x150?text=Pan+Baguette",
    supermercados: [
      { nombre: "Mercadona", precio: 0.90 },
      { nombre: "Carrefour", precio: 1.00 },
      { nombre: "Alcampo", precio: 0.95 }
    ]
  },
  {
    nombre: "Huevos 12u",
    imagen: "https://via.placeholder.com/300x150?text=Huevos+12u",
    supermercados: [
      { nombre: "Mercadona", precio: 2.60 },
      { nombre: "Carrefour", precio: 2.45 },
      { nombre: "Alcampo", precio: 2.55 }
    ]
  },
  {
    nombre: "Arroz Largo 1kg",
    imagen: "https://via.placeholder.com/300x150?text=Arroz+Largo",
    supermercados: [
      { nombre: "Mercadona", precio: 1.10 },
      { nombre: "Carrefour", precio: 1.25 },
      { nombre: "Alcampo", precio: 1.20 }
    ]
  },
  {
    nombre: "Aceite de Girasol 1L",
    imagen: "https://via.placeholder.com/300x150?text=Aceite+Girasol",
    supermercados: [
      { nombre: "Mercadona", precio: 1.95 },
      { nombre: "Carrefour", precio: 2.00 },
      { nombre: "Alcampo", precio: 1.85 }
    ]
  },
  {
    nombre: "Tomate Frito 400g",
    imagen: "https://via.placeholder.com/300x150?text=Tomate+Frito",
    supermercados: [
      { nombre: "Mercadona", precio: 0.75 },
      { nombre: "Carrefour", precio: 0.80 },
      { nombre: "Alcampo", precio: 0.78 }
    ]
  },
  {
    nombre: "Lechuga Iceberg",
    imagen: "https://via.placeholder.com/300x150?text=Lechuga",
    supermercados: [
      { nombre: "Mercadona", precio: 1.00 },
      { nombre: "Carrefour", precio: 1.10 },
      { nombre: "Alcampo", precio: 1.05 }
    ]
  },
  {
    nombre: "Zumo de Naranja 1L",
    imagen: "https://via.placeholder.com/300x150?text=Zumo+Naranja",
    supermercados: [
      { nombre: "Mercadona", precio: 1.75 },
      { nombre: "Carrefour", precio: 1.79 },
      { nombre: "Alcampo", precio: 1.44 },
      { nombre: "Caprabo", precio: 1.79 }
    ]
  },
  {
    nombre: "Manzanas Golden (1kg)",
    imagen: "https://via.placeholder.com/300x150?text=Manzanas",
    supermercados: [
      { nombre: "Mercadona", precio: 1.90 },
      { nombre: "Carrefour", precio: 2.00 },
      { nombre: "Alcampo", precio: 1.85 }
    ]
  },
  {
    nombre: "Plátanos (1kg)",
    imagen: "https://via.placeholder.com/300x150?text=Platanos",
    supermercados: [
      { nombre: "Mercadona", precio: 1.80 },
      { nombre: "Carrefour", precio: 1.75 },
      { nombre: "Alcampo", precio: 1.85 }
    ]
  },
  {
    nombre: "Yogur Natural Pack 4",
    imagen: "https://via.placeholder.com/300x150?text=Yogur+Natural",
    supermercados: [
      { nombre: "Mercadona", precio: 1.10 },
      { nombre: "Carrefour", precio: 1.05 },
      { nombre: "Alcampo", precio: 1.08 }
    ]
  },
  {
    nombre: "Café Molido 250g",
    imagen: "https://via.placeholder.com/300x150?text=Cafe+Molido",
    supermercados: [
      { nombre: "Mercadona", precio: 2.20 },
      { nombre: "Carrefour", precio: 2.10 },
      { nombre: "Alcampo", precio: 2.15 }
    ]
  },
  {
    nombre: "Galletas María 800g",
    imagen: "https://via.placeholder.com/300x150?text=Galletas+Maria",
    supermercados: [
      { nombre: "Mercadona", precio: 1.25 },
      { nombre: "Carrefour", precio: 1.30 },
      { nombre: "Alcampo", precio: 1.28 }
    ]
  },
  {
    nombre: "Pollo entero (kg)",
    imagen: "https://via.placeholder.com/300x150?text=Pollo",
    supermercados: [
      { nombre: "Mercadona", precio: 3.90 },
      { nombre: "Carrefour", precio: 4.00 },
      { nombre: "Alcampo", precio: 3.95 }
    ]
  },
  {
    nombre: "Pechuga de pollo (kg)",
    imagen: "https://via.placeholder.com/300x150?text=Pechuga+Pollo",
    supermercados: [
      { nombre: "Mercadona", precio: 6.50 },
      { nombre: "Carrefour", precio: 6.70 },
      { nombre: "Alcampo", precio: 6.40 }
    ]
  },
  {
    nombre: "Filetes de ternera (kg)",
    imagen: "https://via.placeholder.com/300x150?text=Ternera",
    supermercados: [
      { nombre: "Mercadona", precio: 10.50 },
      { nombre: "Carrefour", precio: 10.30 },
      { nombre: "Alcampo", precio: 10.40 }
    ]
  },
  {
    nombre: "Pasta Macarrones 500g",
    imagen: "https://via.placeholder.com/300x150?text=Macarrones",
    supermercados: [
      { nombre: "Mercadona", precio: 0.90 },
      { nombre: "Carrefour", precio: 0.85 },
      { nombre: "Alcampo", precio: 0.88 }
    ]
  },
  {
    nombre: "Chocolate con leche 100g",
    imagen: "https://via.placeholder.com/300x150?text=Chocolate",
    supermercados: [
      { nombre: "Mercadona", precio: 0.90 },
      { nombre: "Carrefour", precio: 0.95 },
      { nombre: "Alcampo", precio: 0.92 }
    ]
  },
  {
    nombre: "Sal fina 1kg",
    imagen: "https://via.placeholder.com/300x150?text=Sal",
    supermercados: [
      { nombre: "Mercadona", precio: 0.40 },
      { nombre: "Carrefour", precio: 0.38 },
      { nombre: "Alcampo", precio: 0.39 }
    ]
  },
  {
    nombre: "Azúcar blanco 1kg",
    imagen: "https://via.placeholder.com/300x150?text=Azucar",
    supermercados: [
      { nombre: "Mercadona", precio: 1.05 },
      { nombre: "Carrefour", precio: 1.00 },
      { nombre: "Alcampo", precio: 1.03 }
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
    <p><strong>Ahorro al elegir la mejor opción:</strong> $${ahorro.toFixed(2)} (comparado con ${superCaro})</p>
    <hr>
    <h4>Totales por supermercado:</h4>
    <ul>
      ${supermercadosOrdenados.map(([nombre, total]) => `<li>${nombre}: $${total.toFixed(2)}</li>`).join("")}
    </ul>
    <hr>
    <h4 style="color: green;">✅ Total ahorrado: $${ahorro.toFixed(2)}</h4>
  `;
}


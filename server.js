const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());

// Configuración de Puppeteer
const browserOptions = {
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"], // Opciones para ejecución en algunos entornos
  timeout: 30000, // Timeout de 30 segundos
};

app.get("/api/buscar", async (req, res) => {
  const producto = req.query.q;
  if (!producto) {
    return res.status(400).json({ error: "Debe proporcionar un producto para buscar" });
  }

  const resultados = [];
  let browser;
  let page;

  try {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();

    // 🔎 Buscar en Mercadona
    await scrapeSupermercado(page, `https://tienda.mercadona.es/search-results?query=${encodeURIComponent(producto)}`, "Mercadona", resultados);

    // 🔎 Buscar en Carrefour
    await scrapeSupermercado(page, `https://www.carrefour.es/supermercado/buscar?query=${encodeURIComponent(producto)}`, "Carrefour", resultados);

    // Ordenar resultados por precio (normalizado)
    resultados.forEach(item => {
      item.precioNum = parseFloat(item.precio.replace(/[^0-9.,]/g, "").replace(",", "."));
    });
    resultados.sort((a, b) => a.precioNum - b.precioNum);

    res.json(resultados);
  } catch (error) {
    console.error("Error general:", error);
    res.status(500).json({ error: "Error al buscar productos" });
  } finally {
    if (page) await page.close();
    if (browser) await browser.close();
  }
});

// Función reutilizable para scraping
async function scrapeSupermercado(page, url, supermercado, resultados) {
  try {
    await page.goto(url, { waitUntil: "networkidle0", timeout: 15000 });
    const productos = await page.evaluate((supermercado) => {
      const items = [];
      const cards = document.querySelectorAll(".product-card"); // Selector genérico, ajustar según sitio
      cards.forEach(card => {
        let nombre = "";
        let precio = "";
        let imagen = "";

        // Mercadona
        if (supermercado === "Mercadona") {
          nombre = card.querySelector("h4")?.innerText.trim() || "";
          precio = card.querySelector(".product-price")?.innerText.trim() || "";
          imagen = card.querySelector("img")?.src || "";
        }
        // Carrefour
        if (supermercado === "Carrefour") {
          nombre = card.querySelector("h2")?.innerText.trim() || "";
          precio = card.querySelector(".price")?.innerText.trim() || "";
          imagen = card.querySelector("img")?.src || "";
        }

        if (nombre && precio) {
          items.push({ nombre, precio, imagen, supermercado });
        }
      });
      return items;
    }, supermercado);
    resultados.push(...productos);
  } catch (e) {
    console.error(`Error en ${supermercado}:`, e);
  }
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

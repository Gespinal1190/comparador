const express = require("express");
const puppeteer = require("puppeteer");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/buscar", async (req, res) => {
  const producto = req.query.q;
  const resultados = [];

  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // 🔎 Buscar en Mercadona
  try {
    await page.goto(`https://tienda.mercadona.es/search-results?query=${producto}`, { waitUntil: "networkidle0" });
    const mercadonaProductos = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll(".product-card").forEach(card => {
        const nombre = card.querySelector("h4")?.innerText || "";
        const precio = card.querySelector(".product-price")?.innerText || "";
        const imagen = card.querySelector("img")?.src || "";
        if (nombre && precio) {
          items.push({ nombre, precio, imagen, supermercado: "Mercadona" });
        }
      });
      return items;
    });
    resultados.push(...mercadonaProductos);
  } catch (e) {
    console.error("Error en Mercadona", e);
  }

  // 🔎 Buscar en Carrefour
  try {
    await page.goto(`https://www.carrefour.es/supermercado/buscar?query=${producto}`, { waitUntil: "networkidle0" });
    const carrefourProductos = await page.evaluate(() => {
      const items = [];
      document.querySelectorAll(".product-card").forEach(card => {
        const nombre = card.querySelector("h2")?.innerText || "";
        const precio = card.querySelector(".price")?.innerText || "";
        const imagen = card.querySelector("img")?.src || "";
        if (nombre && precio) {
          items.push({ nombre, precio, imagen, supermercado: "Carrefour" });
        }
      });
      return items;
    });
    resultados.push(...carrefourProductos);
  } catch (e) {
    console.error("Error en Carrefour", e);
  }

  await browser.close();
  res.json(resultados);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});

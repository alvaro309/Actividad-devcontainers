const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

// DATABASE_URL se define en docker-compose.yml, apuntando al servicio "db"
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/", (req, res) => {
  res.json({ message: "¡Hola desde el Dev Container!" });
});
// Saludo personalizado usando un parámetro de ruta
app.get("/saludo/:nombre", (req, res) => {
  res.json({ mensaje: `¡Hola, ${req.params.nombre}!` });
});
// Ruta de ejemplo que prueba la conexión real a PostgreSQL
app.get("/hora-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW() as hora_actual");
    res.json({ hora_actual: result.rows[0].hora_actual });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

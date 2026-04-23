const express = require('express');
const characterRoutes = require('./routes/character.routes');
const battleRoutes = require('./routes/battle.routes');
const errorHandler = require('./middleware/errorHandler');
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();
const PORT=3000;


app.use(express.json());
app.use("/api/characters", characterRoutes);
app.use("/api/battles", battleRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.json({
    message: "🗡️  RPG Battle API - Bienvenido!",
    endpoints: {
      characters: {
        "GET    /api/characters":      "Listar todos los personajes",
        "GET    /api/characters/:id":  "Obtener personaje por ID",
        "POST   /api/characters":      "Crear personaje",
        "PUT    /api/characters/:id":  "Actualizar personaje",
        "DELETE /api/characters/:id":  "Eliminar personaje",
      },
      battles: {
        "POST /api/battles": "Simulando batalla (body: { character1Id, character2Id })",
      },
    },
  });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
 
});
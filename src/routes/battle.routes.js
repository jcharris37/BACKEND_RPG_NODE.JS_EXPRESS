const express = require("express");
const router = express.Router();

const { battle } = require("../controllers/battle.controller");

/**
 * @swagger
 * /api/battles:
 *   post:
 *     summary: Simular batalla entre dos personajes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             character1Id: "id1"
 *             character2Id: "id2"
 *     responses:
 *       200:
 *         description: Resultado de la batalla
 */

router.post("/", battle);

module.exports = router;
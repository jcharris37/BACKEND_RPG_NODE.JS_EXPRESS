
const express = require("express");
const router = express.Router();
const {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
} = require("../controllers/character.controller");


/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: Obtener todos los personajes
 *     responses:
 *       200:
 *         description: Lista de personajes
 */
router.get("/", getAllCharacters);

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     summary: Obtener personaje por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Personaje encontrado
 *       404:
 *         description: No encontrado
 */

router.get("/", getAllCharacters);
router.get("/:id", getCharacterById);
router.post("/", createCharacter);
router.put("/:id", updateCharacter);
router.delete("/:id", deleteCharacter);

module.exports = router;
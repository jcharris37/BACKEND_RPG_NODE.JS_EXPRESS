const characterModel = require("../models/character.model");
const { simulateBattle } = require("../utils/battleEngine");

const battle = (req, res) => {
  const { character1Id, character2Id } = req.body;

  if (!character1Id || !character2Id) {
    return res.status(400).json({
      success: false,
      message: "Debes enviar character1Id y character2Id en el body",
    });
  }

  if (character1Id === character2Id) {
    return res.status(400).json({
      success: false,
      message: "Debes elegir dos personajes diferentes para la batalla",
    });
  }

  const char1 = characterModel.findById(character1Id);
  const char2 = characterModel.findById(character2Id);

  if (!char1) return res.status(404).json({ success: false, message: `Personaje 1 no encontrado` });
  if (!char2) return res.status(404).json({ success: false, message: `Personaje 2 no encontrado` });

  const result = simulateBattle(char1, char2);
  res.json({ success: true, message: " ¡Batalla completada!", battle: result });
};

module.exports = { battle };
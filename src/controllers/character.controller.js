const characterModel = require("../models/character.model");
const { validateCharacter } = require("../utils/validators");

const getAllCharacters = (req, res) => {
  const characters = characterModel.getAll();
  res.json({ success: true, count: characters.length, data: characters });
};

const getCharacterById = (req, res) => {
  const character = characterModel.findById(req.params.id);
  if (!character) {
    return res.status(404).json({
      success: false,
      message: `No se encontró el personaje con ID: ${req.params.id}`,
    });
  }
  res.json({ success: true, data: character });
};

const createCharacter = (req, res) => {
  const errors = validateCharacter(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: "Datos inválidos", errors });
  }
  const newCharacter = characterModel.create(req.body);
  res.status(201).json({
    success: true,
    message: "Personaje creado exitosamente ",
    data: newCharacter,
  });
};

const updateCharacter = (req, res) => {
  const updated = characterModel.update(req.params.id, req.body);
  if (!updated) {
    return res.status(404).json({
      success: false,
      message: `No se encontró el personaje con ID: ${req.params.id}`,
    });
  }
  res.json({ success: true, message: "Personaje actualizado ", data: updated });
};

const deleteCharacter = (req, res) => {
  const deleted = characterModel.delete(req.params.id);
  if (!deleted) {
    return res.status(404).json({
      success: false,
      message: `No se encontró el personaje con ID: ${req.params.id}`,
    });
  }
  res.json({ success: true, message: "Su personaje ah sido eliminado" });
};

module.exports = {
  getAllCharacters,
  getCharacterById,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};
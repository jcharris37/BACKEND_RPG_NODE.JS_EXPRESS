const { v4: uuidv4 } = require("uuid");

let characters = [
  {
    id: uuidv4(),
    name: "GOKU",
    skinColor: "blanco",
    race: "Humano",
    stats: { strength: 85, agility: 70, magic: 20, knowledge: 65 },
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "GORDO_BIGf",
    skinColor: "blanco",
    race: "Comelon",
    stats: { strength: 30, agility: 40, magic: 99, knowledge: 95 },
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "EL peque",
    skinColor: "blanco",
    race: "Elfo",
    stats: { strength: 60, agility: 98, magic: 45, knowledge: 70 },
    createdAt: new Date().toISOString(),
  },
  {
    id: uuidv4(),
    name: "chiquitin",
    skinColor: "rojizo",
    race: "Enano",
    stats: { strength: 92, agility: 35, magic: 10, knowledge: 55 },
    createdAt: new Date().toISOString(),
  },
];

module.exports = {
  getAll: () => characters,

  findById: (id) => characters.find((c) => c.id === id),

  create: (data) => {
    const newChar = {
      id: uuidv4(),
      name: data.name,
      skinColor: data.skinColor,
      race: data.race,
      stats: {
        strength:  data.stats.strength,
        agility:   data.stats.agility,
        magic:     data.stats.magic,
        knowledge: data.stats.knowledge,
      },
      createdAt: new Date().toISOString(),
    };
    characters.push(newChar);
    return newChar;
  },

  update: (id, data) => {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return null;

    characters[index] = {
      ...characters[index],
      name:      data.name      ?? characters[index].name,
      skinColor: data.skinColor ?? characters[index].skinColor,
      race:      data.race      ?? characters[index].race,
      stats: {
        strength:  data.stats?.strength  ?? characters[index].stats.strength,
        agility:   data.stats?.agility   ?? characters[index].stats.agility,
        magic:     data.stats?.magic     ?? characters[index].stats.magic,
        knowledge: data.stats?.knowledge ?? characters[index].stats.knowledge,
      },
      updatedAt: new Date().toISOString(),
    };

    return characters[index];
  },

  delete: (id) => {
    const index = characters.findIndex((c) => c.id === id);
    if (index === -1) return false;
    characters.splice(index, 1);
    return true;
  },
};
function validateCharacter(data) {
  const errors = [];

  if (!data.name || typeof data.name !== "string" || data.name.trim() === "") {
    errors.push("El campo 'name' es obligatorio");
  }
  if (!data.skinColor || typeof data.skinColor !== "string") {
    errors.push("El campo 'skinColor' es obligatorio");
  }
  if (!data.race || typeof data.race !== "string") {
    errors.push("El campo 'race' es obligatorio");
  }
  if (!data.stats || typeof data.stats !== "object") {
    errors.push("El campo 'stats' es obligatorio y debe ser un objeto");
  } else {
    ["strength", "agility", "magic", "knowledge"].forEach((field) => {
      const val = data.stats[field];
      if (val === undefined || val === null) {
        errors.push(`El stat '${field}' es obligatorio`);
      } else if (typeof val !== "number" || val < 0 || val > 100) {
        errors.push(`El stat '${field}' debe ser un número entre 0 y 100`);
      }
    });
  }

  return errors;
}

module.exports = { validateCharacter };
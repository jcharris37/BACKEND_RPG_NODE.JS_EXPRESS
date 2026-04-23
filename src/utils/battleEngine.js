function calculateAttack(stats) {
  const magicBonus = stats.magic > 70 ? stats.magic * 1.5 : stats.magic;
  const knowledgeBonus = stats.knowledge * 0.1;
  return stats.strength + magicBonus + knowledgeBonus;
}

function calculateDefense(stats) {
  return stats.agility + stats.knowledge * 0.05;
}

function simulateRound(char1, char2, roundNumber) {
  const r1 = 0.9 + Math.random() * 0.2;
  const r2 = 0.9 + Math.random() * 0.2;

  const attack1  = calculateAttack(char1.stats)  * r1;
  const defense1 = calculateDefense(char1.stats) * r1;
  const attack2  = calculateAttack(char2.stats)  * r2;
  const defense2 = calculateDefense(char2.stats) * r2;

  const damageToChar1 = Math.max(0, attack2 - defense1);
  const damageToChar2 = Math.max(0, attack1 - defense2);

  let winner, description;

  if (damageToChar2 > damageToChar1) {
    winner = char1.name;
    description = `${char1.name} infligió más daño (${damageToChar2.toFixed(1)}) vs ${char2.name} (${damageToChar1.toFixed(1)})`;
  } else if (damageToChar1 > damageToChar2) {
    winner = char2.name;
    description = `${char2.name} infligió más daño (${damageToChar1.toFixed(1)}) vs ${char1.name} (${damageToChar2.toFixed(1)})`;
  } else {
    winner = "Empate";
    description = "¡Ronda empatada!";
  }

  return {
    round: roundNumber,
    winner,
    [`${char1.name}_damageDone`]: parseFloat(damageToChar2.toFixed(1)),
    [`${char2.name}_damageDone`]: parseFloat(damageToChar1.toFixed(1)),
    description,
  };
}

function simulateBattle(char1, char2) {
  const rounds = [];
  let char1Wins = 0;
  let char2Wins = 0;

  for (let i = 1; i <= 3; i++) {
    const round = simulateRound(char1, char2, i);
    rounds.push(round);
    if (round.winner === char1.name) char1Wins++;
    else if (round.winner === char2.name) char2Wins++;
  }

  let winner, finalMessage;

  if (char1Wins > char2Wins) {
    winner = char1.name;
    finalMessage = `🏆 ${char1.name} gana con ${char1Wins} rondas!`;
  } else if (char2Wins > char1Wins) {
    winner = char2.name;
    finalMessage = `🏆 ${char2.name} gana con ${char2Wins} rondas!`;
  } else {
    winner = "Empate";
    finalMessage = "⚖️ ¡Empate total!";
  }

  return {
    fighters: {
      character1: { id: char1.id, name: char1.name, race: char1.race, score: parseFloat(calculateAttack(char1.stats).toFixed(1)) },
      character2: { id: char2.id, name: char2.name, race: char2.race, score: parseFloat(calculateAttack(char2.stats).toFixed(1)) },
    },
    rounds,
    summary: {
      roundsWon: { [char1.name]: char1Wins, [char2.name]: char2Wins },
      winner,
      message: finalMessage,
    },
  };
}

module.exports = { simulateBattle };
export const setRandomMonsters = (monsters) => {
  return {
    type: 'SET_RANDOM_MONSTERS',
    payload: monsters
  }
}

export const setCharacter = (character) => {
  return {
    type: 'SET_CHARACTER',
    payload: character
  }
}

export const setEnemy = (enemy) => {
  return {
    type: 'SET_ENEMY',
    payload: enemy
  }
}

export const setStartGame = () => {
  return {
    type: 'SET_START_GAME'
  }
}
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

export const setTextOneVisible = () => {
  return {
    type: 'SET_TEXT_ONE_VISIBLE'
  }
}

export const setTextTwoVisible = () => {
  return {
    type: 'SET_TEXT_TWO_VISIBLE'
  }  
}

export const applyStandardAttack = () => {
  return {
    type: 'APPLY_STANDARD_ATTACK'
  }
}

export const applyRandomAttack = (randomValue) => {
  return {
    type: 'APPLY_RANDOM_ATTACK',
    payload: randomValue
  }
}

export const setMenuButtonsStatus = () => {
  return {
    type: 'SET_MENU_BUTTONS_STATUS'
  }
}
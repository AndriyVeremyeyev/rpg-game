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

export const applyAttack = (value) => {
  return {
    type: 'APPLY_ATTACK',
    payload: value
  }
}

export const setAttackButtonsStatus = () => {
  return {
    type: 'SET_ATTACK_BUTTONS_STATUS'
  }
}

export const setInventoryButtonStatus = (status) => {
  return {
    type: 'SET_INVENTORY_BUTTON_STATUS',
    payload: status
  }
}

export const setWeapon = (weapon) => {
  return {
    type: 'SET_WEAPON',
    payload: weapon
  }
}

export const setSubtitle = (text) => {
  return {
    type: 'SET_SUBTITLE',
    payload: text
  }
}

export const setLegend = (text) => {
  return {
    type: 'SET_LEGEND',
    payload: text
  }
}

export const applyEnemyAttack = (randomValue) => {
  return {
    type: 'APPLY_ENEMY_ATTACK',
    payload: randomValue
  }
}

export const setCharacterCardStyle = (style) => {
  return {
    type: 'SET_CHARACTER_CARD_STYLE',
    payload: style
  }
}

export const setEnemyCardStyle = (style) => {
  return {
    type: 'SET_ENEMY_CARD_STYLE',
    payload: style
  }  
}

export const setInventory = (inventory) => {
  return {
    type: 'SET_INVENTORY',
    payload: inventory
  }
}

export const setRoundTitle = (text) => {
  return {
    type: 'SET_ROUND_TITLE',
    payload: text
  }
}

export const setEndGamePageStatus = () => {
  return {
    type: 'SET_END_GAME_PAGE_STATUS'
  }
}

export const setPageStatus = (page) => {
  return {
    type: 'SET_PAGE_STATUS',
    payload: page
  }
}

export const increaseBattlePageOpenCount = () => {
  return {
    type: 'INCREASE_BATTLE_PAGE_OPEN_COUNT'
  }
}
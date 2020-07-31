const initialState = {
  startGame: false,
  randomMonsters: [],
  character: null,
  enemy: null,
  menuButtons: true,
  subTitle: null,
  legend: null,
  characterCard: null,
  enemyCard: null,
  battlePage: false,
  inventoryPage: false,
  monstersMenuPage: false,
  inventory: null,
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SET_RANDOM_MONSTERS':
      return {
        ...state,
        randomMonsters: action.payload
      }
    case 'SET_CHARACTER':
      return {
        ...state,
        character: action.payload
      }
    case 'SET_ENEMY':
      return {
        ...state,
        enemy: action.payload
      }
    case 'SET_START_GAME':
      return {
        ...state,
        startGame: true
      }
    case 'APPLY_ATTACK':
      const modifiedHealth = state.enemy.health-action.payload > 0 ? state.enemy.health-action.payload : 0;
      return {
        ...state,
        enemy: {...state.enemy, health: modifiedHealth}
      }      
    case 'SET_MENU_BUTTONS_STATUS' :
      return {
        ...state,
        menuButtons: !state.menuButtons
      }
    case 'SET_SUBTITLE' :
      return {
        ...state,
        subTitle: action.payload
      }
    case 'SET_LEGEND' :
      return {
        ...state,
        legend: action.payload
      }
    case 'APPLY_ENEMY_ATTACK':
      const modifiedCharacterHealth = state.character.health-action.payload > 0 ? state.character.health-action.payload : 0;
      return {
        ...state,
        character: {...state.character, health: modifiedCharacterHealth}
      }
    case 'SET_CHARACTER_CARD_STYLE':
      return {
        ...state,
        characterCard: action.payload
      }
    case 'SET_ENEMY_CARD_STYLE':
      return {
        ...state,
        enemyCard: action.payload
      }
    case 'SET_BATTLE_VISIBLE':
      return {
        ...state,
        battlePage: !state.battlePage
      }
    case 'SET_INVENTORY_VISIBLE':
      return {
        ...state,
        inventoryPage: !state.inventoryPage
      }
    case 'SET_MONSTERS_MENU_VISIBLE':
      return {
        ...state,
        monstersMenuPage: !state.monstersMenuPage
      }          
    case 'SET_INVENTORY':
      return {
        ...state,
        inventory: action.payload
      }
    case 'SET_SWORD':
      const sword = state.inventory[0];
      const swordImprovedAttack = state.character.attack+sword.attack;
      const swordImprovedDefense = state.character.attack+sword.defense;
      const swordImprovedMagic = state.character.attack+sword.magic;
      const swordImprovedHealth = state.character.attack+sword.health;
      return {
        ...state,
        character: {...state.character, attack: swordImprovedAttack, defense: swordImprovedDefense, magic: swordImprovedMagic, health: swordImprovedHealth}
      }
    default:
      return state
  }
}

export default reducer;
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
  monstersMenuPage: false
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
      
    default:
      return state
  }
}

export default reducer;
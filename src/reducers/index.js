const initialState = {
  startGame: false,
  randomMonsters: [],
  character: null,
  enemy: null,
  menuButtons: true,
  subTitle: null,
  legend: null,
  characterCard: null,
  enemyCard: null
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
    case 'APPLY_STANDARD_ATTACK':
      const {health} = state.enemy;
      const {attack} = state.character;
      const modifiedHealth = health > 0 ? health-attack : 0;
      const modifiedEnemy = {...state.enemy, health: modifiedHealth};

      return {
        ...state,
        enemy: modifiedEnemy
      }
    case 'APPLY_RANDOM_ATTACK':
      const modifiedHealthWithRandom = state.enemy.health > 0 ? state.enemy.health-action.payload : 0;
      return {
        ...state,
        enemy: {...state.enemy, health: modifiedHealthWithRandom}
      }      
    case 'SET_MENU_BUTTONS_STATUS' :
      return {
        ...state,
        menuButtons: !state.menuButtons
      }
    case 'SET_SUBTITLE' :
      console.log(action.payload)
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
      const modifiedCharacterHealth = state.character.health > 0 ? state.character.health-action.payload : 0;
      return {
        ...state,
        enemy: {...state.character, health: modifiedCharacterHealth}
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
    default:
      return state
  }
}

export default reducer;
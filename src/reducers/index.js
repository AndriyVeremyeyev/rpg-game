const initialState = {
  startGame: false,
  randomMonsters: [],
  character: null,
  enemy: null,
  textOneVisible: false,
  textTwoVisible: false,
  menuButtons: true
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
    case 'SET_TEXT_ONE_VISIBLE':
      return {
        ...state,
        textOneVisible: !state.textOneVisible
      }
    case 'SET_TEXT_TWO_VISIBLE':
      return {
        ...state,
        textTwoVisible: !state.textTwoVisible
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
    default:
      return state
  }
}

export default reducer;
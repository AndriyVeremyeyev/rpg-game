const initialState = {
  startGame: false,
  randomMonsters: [],
  character: null,
  enemy: null
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
    default:
      return state
  }
}

export default reducer;
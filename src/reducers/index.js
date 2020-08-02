const initialState = {
  startGame: false,
  randomMonsters: [],
  character: null,
  enemy: null,
  attackButtons: true,
  inventoryButton: true,
  subTitle: null,
  legend: null,
  characterCard: null,
  enemyCard: null,
  inventory: null,
  battlePageOpenCount: 0,
  roundTitle: null,
  pageStatus: null
}

const reducer = (state = initialState, action) => {

  const applyAttack = (monster) => {
    const modifiedHealth = monster.health-action.payload > 0 ? monster.health-action.payload : 0;
    if (monster === state.character){
      return {
        ...state,
        character: {...monster, health: modifiedHealth}
      } 
    } else {
      return {
        ...state,
        enemy: {...monster, health: modifiedHealth}
      } 
    }
  }

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
      return applyAttack(state.enemy);
    case 'SET_ATTACK_BUTTONS_STATUS' :
      return {
        ...state,
        attackButtons: !state.attackButtons
      }
    case 'SET_INVENTORY_BUTTON_STATUS' :
      return {
        ...state,
        inventoryButton: action.payload
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
      return applyAttack(state.character);
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
    case 'SET_INVENTORY':
      return {
        ...state,
        inventory: action.payload
      }
    case 'SET_WEAPON':
      const {attack, defense, magic, health} = state.character;
      const improvedAttack = attack+action.payload.attack;
      const improvedDefense = defense+action.payload.defense;
      const improvedMagic = magic+action.payload.magic;
      const improvedHealth = health+action.payload.health;
      return {
        ...state,
        character: {...state.character, attack: improvedAttack, defense: improvedDefense, magic: improvedMagic, health: improvedHealth},
  
      }
    case 'SET_ROUND_TITLE':
      return{
        ...state,
        roundTitle: action.payload
      }
    case 'SET_PAGE_STATUS':
      return{
        ...state,
        pageStatus: action.payload
      }
    case 'INCREASE_BATTLE_PAGE_OPEN_COUNT':
      return{
        ...state,
        battlePageOpenCount: state.battlePageOpenCount + 1

      }         
    default:
      return state;
  }
}

export default reducer;
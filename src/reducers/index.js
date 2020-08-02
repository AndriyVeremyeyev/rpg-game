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
  swordCardStatus: false,
  shieldCardStatus: false,
  bowCardStatus: false,
  helmetCardStatus: false,
  pillsCardStatus: false,
  battlePageOpen: 0,
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

  const weaponApply = (weapon) => {
    const {attack, defense, magic, health} = state.character;
    const improvedAttack = attack+weapon.attack;
    const improvedDefense = defense+weapon.defense;
    const improvedMagic = magic+weapon.magic;
    const improvedHealth = health+weapon.health;
    return {
      ...state,
      character: {...state.character, attack: improvedAttack, defense: improvedDefense, magic: improvedMagic, health: improvedHealth},

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
    case 'SET_SWORD':
      return weaponApply(state.inventory[0]);
    case 'SET_SHIELD':
      return weaponApply(state.inventory[1]);
    case 'SET_BOW':
      return weaponApply(state.inventory[2]);
    case 'SET_HELMET':
      return weaponApply(state.inventory[3]);
    case 'SET_PILLS':
      return weaponApply(state.inventory[4]);
    case 'SET_SWORD_CARD_VISIBILITY':
      return {
        ...state,
        swordCardStatus: !state.swordCardStatus
      }
    case 'SET_SHIELD_CARD_VISIBILITY':
      return {
        ...state,
        shieldCardStatus: !state.shieldCardStatus
      }
    case 'SET_BOW_CARD_VISIBILITY':
      return {
        ...state,
        bowCardStatus: !state.bowCardStatus
      }
    case 'SET_HELMET_CARD_VISIBILITY':
      return {
        ...state,
        helmetCardStatus: !state.helmetCardStatus
      }
    case 'SET_PILLS_CARD_VISIBILITY':
      return {
        ...state,
        pillsCardStatus: !state.pillsCardStatus
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
    default:
      return state;
  }
}

export default reducer;
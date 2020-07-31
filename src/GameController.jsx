import React from 'react';
import {connect} from 'react-redux';
import StartGame from './StartGame';
import ChooseMonsters from './ChooseMonsters';
import Battle from './Battle';
import Header from './Header';
import EndGame from './EndGame';
import {setSubtitle} from './actions'
import Inventory from './Inventory';


const GameController = ({startGame, legend, setSubtitle, battlePage, inventoryPage, monstersMenuPage}) => {

  if (!startGame) {
    return <StartGame/>
  }

  const mode = () => {

    if (monstersMenuPage){
      return <ChooseMonsters/>
    } else if (legend === 'You loose') {
      setSubtitle('End of Game')
      return <EndGame/>
    }
    if (battlePage){
      return <Battle/>
    }
    if (inventoryPage){
      return <Inventory/>
    }
    
  }

  return (
    <React.Fragment>
      <Header/>
      {mode()}
    </React.Fragment>
  )

}

const mapStateToProps = state => {
  const {startGame, legend, battlePage, inventoryPage, monstersMenuPage} = state;
  return {
    startGame,
    legend,
    battlePage,
    inventoryPage,
    monstersMenuPage
  }
}

const mapDispatchToProps = dispatch => ({
  setSubtitle: (text) => dispatch(setSubtitle(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
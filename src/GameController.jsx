import React from 'react';
import {connect} from 'react-redux';
import StartGame from './StartGame';
import ChooseMonsters from './ChooseMonsters';
import Battle from './Battle';
import Header from './Header';
import EndGame from './EndGame';
import {setSubtitle, setInventory} from './actions';
import {databaseInventory} from './database';
import Inventory from './Inventory';


const GameController = ({startGame, setSubtitle, setInventory, pageStatus}) => {

  if (!startGame) {
    return <StartGame/>
  }

  const mode = () => {

    switch (pageStatus){
      case 'chooseMonsters':
        return <ChooseMonsters/>
      case 'battleMode':{
        setSubtitle('Battle Mode');
        return <Battle/>
      }
      case 'inventory':
        setSubtitle('Inventory');
        setInventory(databaseInventory);
        return <Inventory/>
      case 'endGame':
        setSubtitle('End of Game')
        return <EndGame/>
      default:
        return <StartGame/>
    }
  }

  console.log(pageStatus);

  return (
    <React.Fragment>
      <Header/>
      {mode()}
    </React.Fragment>
  )

}

const mapStateToProps = state => {
  const {startGame, pageStatus} = state;
  return {
    startGame,
    pageStatus
  }
}

const mapDispatchToProps = dispatch => ({
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setInventory: (inventory) => dispatch(setInventory(inventory))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
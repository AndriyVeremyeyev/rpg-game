import React from 'react';
import {connect} from 'react-redux';
import Battle from './Battle';
import ChooseMonsters from './ChooseMonsters';
import EndGame from './EndGame';
import Inventory from './Inventory';
import Header from './Header';
import StartGame from './StartGame';
import {setSubtitle, setInventory} from './actions';
import {databaseInventory} from './database';

const GameController = ({setSubtitle, setInventory, pageStatus, randomMonsters}) => {

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
        if (randomMonsters.length === 2){
          setInventory(databaseInventory);
        }
        return <Inventory/>
      case 'endGame':
        setSubtitle('End of Game')
        return <EndGame/>
      default:
        return <StartGame/>
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
  const {pageStatus, randomMonsters} = state;
  return {
    pageStatus,
    randomMonsters
  }
}

const mapDispatchToProps = dispatch => ({
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setInventory: (inventory) => dispatch(setInventory(inventory))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
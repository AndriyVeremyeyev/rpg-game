import React from 'react';
import {connect} from 'react-redux';
import StartGame from './StartGame';
import ChooseMonsters from './ChooseMonsters';
import Battle from './Battle';
import Header from './Header';


const GameController = ({startGame, character, enemy}) => {
  if (!startGame) {
    return <StartGame/>
  }

  const mode = () => {
    if (!character || !enemy){
      return <ChooseMonsters/>
    } else {
      return <Battle/>
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
  const {startGame, character, enemy} = state;
  return {
    startGame,
    character,
    enemy
  }
}

export default connect(mapStateToProps)(GameController);
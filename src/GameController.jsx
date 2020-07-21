import React from 'react';
import {connect} from 'react-redux';
import StartGame from './StartGame';
import ChooseMonsters from './ChooseMonsters';
import Battle from './Battle';

const GameController = ({startGame, character, enemy}) => {
   if (!startGame) {
     return <StartGame/>
   }
   if (!character || !enemy){
     return <ChooseMonsters/>
   } else {
     return <Battle/>
   }
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
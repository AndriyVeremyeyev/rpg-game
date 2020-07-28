import React from 'react';
import {connect} from 'react-redux';
import StartGame from './StartGame';
import ChooseMonsters from './ChooseMonsters';
import Battle from './Battle';
import Header from './Header';
import EndGame from './EndGame';
import {setSubtitle} from './actions'


const GameController = ({startGame, character, enemy, legend, setSubtitle}) => {
  if (!startGame) {
    return <StartGame/>
  }

  const mode = () => {

    if (!character || !enemy){
      return <ChooseMonsters/>
    } else if (legend === 'You loose') {
      setSubtitle('End of Game')
      return <EndGame/>
    } 
    
    else {
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
  const {startGame, character, enemy, legend} = state;
  return {
    startGame,
    character,
    enemy,
    legend
  }
}

const mapDispatchToProps = dispatch => ({
  setSubtitle: (text) => dispatch(setSubtitle(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameController);
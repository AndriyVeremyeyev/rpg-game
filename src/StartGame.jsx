import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core/';
import {connect} from 'react-redux';
import { setStartGame, setPageStatus } from './actions';

const StartGame = ({setStartGame, setPageStatus}) => {

  const letStartGame = () => {
    setStartGame();
    setPageStatus('chooseMonsters');
  }

  return (
    <Grid style={{height: 500}} container direction="column" justify="center" alignItems="center">
      <Typography style={{marginBottom: 20}} variant='h4'>Welcome to game</Typography>
      <Typography style={{marginBottom: 20}} variant='h3'>Monsters Fight</Typography>
      <Button variant='contained' color='primary' onClick={letStartGame}>Start game</Button>
    </Grid>
  )
}


const mapDispatchToProps = dispatch => ({
  setStartGame: () => dispatch(setStartGame()),
  setPageStatus: (page) => dispatch(setPageStatus(page)), 
})

export default connect(null, mapDispatchToProps)(StartGame);
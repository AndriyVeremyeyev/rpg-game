import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core/';
import {connect} from 'react-redux';
import { setStartGame } from './actions';

const StartGame = ({setStartGame}) => {
  return (
    <Grid style={{height: 500}} container direction="column" justify="center" alignItems="center">
      <Typography style={{marginBottom: 20}} variant='h4'>Welcome to game</Typography>
      <Button variant='contained' color='primary' onClick={setStartGame}>Start game</Button>
    </Grid>
  )
}


const mapDispatchToProps = dispatch => ({
  setStartGame: () => dispatch(setStartGame()),
})

export default connect(null, mapDispatchToProps)(StartGame);
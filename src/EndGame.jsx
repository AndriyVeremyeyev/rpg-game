import React from 'react';
import {connect} from 'react-redux';
import {Grid, Typography, Button} from '@material-ui/core';
import {setPageStatus, setDefeatedEnemiesEmpty} from './actions';

const EndGame = ({setPageStatus, setDefeatedEnemiesEmpty}) => {

  const playAgain = () => {
    setDefeatedEnemiesEmpty();
    setPageStatus('chooseMonsters');
  }


  return(
    <div>
      <Grid container direction='column' alignItems='center'>
        <Typography variant='subtitle1'>Do you want to play again?</Typography>
        <Grid container direction='row' alignItems='center'>
          <Button
            variant='contained' 
            color='primary'
            onClick={playAgain}
          >Yes</Button>
          <Button
            variant='contained' 
            color='primary'          
          >No</Button>
        </Grid>
      </Grid>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  setPageStatus: (page) => dispatch(setPageStatus(page)),
  setDefeatedEnemiesEmpty: () => dispatch(setDefeatedEnemiesEmpty()),
})

export default connect(null, mapDispatchToProps)(EndGame);;
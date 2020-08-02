import React from 'react';
import {connect} from 'react-redux';
import {Grid, Typography, Button} from '@material-ui/core';
import {setPageStatus} from './actions';
import winImage from './images/grunge-textured-win-stamp-seal-vector-22741386.jpg';
import loseImage from './images/you-lose-rubber-stamp-vector-17695736.jpg';

const EndGame = ({setPageStatus, randomMonsters}) => {

  const playAgain = () => {
    setPageStatus('chooseMonsters');
  }

  return(
    <div>
      <Grid container direction='column' alignItems='center'>
        <img style={{width: 500}} src={randomMonsters.length === 0 ? winImage : loseImage} alt={randomMonsters.length === 0 ? 'win' : 'lose'}/>
        <Typography variant='subtitle1'>Do you want to play again?</Typography>
        <Grid item>
          <Grid container direction='row' alignItems='center' spacing={2}>
            <Grid item>
              <Button
                variant='contained' 
                color='primary'
                onClick={playAgain}
              >
                Yes
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant='contained' 
                color='primary'          
              >
                No
              </Button>
            </Grid>            
          </Grid>
        </Grid>

      </Grid>
    </div>
  )
}

const mapStateToProps = state => {

  const {randomMonsters } = state;

  return {
    randomMonsters,
  }
}
const mapDispatchToProps = dispatch => ({
  setPageStatus: (page) => dispatch(setPageStatus(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(EndGame);;
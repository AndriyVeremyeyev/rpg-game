import React from 'react';
import {Grid, Typography, Button} from '@material-ui/core';

const EndGame = () => {


  const playAgain = () => {

  }


  return(
    <div>
      <Grid container direction='column' alignItems='center'>
        <Typography variant='subtitle1'>Do you want to play again?</Typography>
        <Grid container direction='row' alignItems='center'>
          <Button
            variant='contained' 
            color='primary'
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



export default EndGame;
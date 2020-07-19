import React, {Component} from 'react';
import {Grid, Typography, Button} from '@material-ui/core/';
import ChooseMonsters from './ChooseMonsters';

class StartGame extends Component {

  constructor(){
    super();
    this.state = {
      startGame: false
    }
  }
  
  setStartGame = () => {
    this.setState({
      startGame: true
    })
  }

  render(){
    if (this.state.startGame){
      return (
        <ChooseMonsters/>
      )
    } else {
      return(
        <Grid style={{height: 500}} container direction="column" justify="center" alignItems="center">
          <Typography style={{marginBottom: 20}} variant='h4'>Welcome to game</Typography>
          <Button variant='contained' color='primary' onClick={this.setStartGame}>Start game</Button>
        </Grid>
      )
    }
  }
}


export default StartGame
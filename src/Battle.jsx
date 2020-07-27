import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import {setTextOneVisible, setTextTwoVisible, applyStandardAttack , setMenuButtonsStatus} from './actions';

class Battle extends Component {


  componentDidMount = () => {

    const {setTextOneVisible, setTextTwoVisible} = this.props;
    setTimeout(setTextOneVisible, 100);
    setTimeout(setTextOneVisible, 1900);
    setTimeout(setTextTwoVisible, 2000);
  }


  legend = () => {

    const {textOneVisible, textTwoVisible} = this.props;
    const textOne = 'Welcome to battle';
    const textTwo = 'Please, make your action';

    return (
      <React.Fragment>
        {textOneVisible? textOne : null}
        {textTwoVisible? textTwo : null}
      </React.Fragment>
    )
  }

  textWrapping = (text, fontSize) => {
  return <Typography align='center' variant={fontSize} color='inherit'>{text}</Typography>
  }

  monsterCard = (monster) => {
    return (
      <Paper elevation={5}>
        <img alt='monster' src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}/>
        {this.textWrapping(monster.name, 'h6')}
        {[`Attack: ${monster.attack}`, `Defense: ${monster.defense}`, `Health: ${monster.health}`, `Magic: ${monster.magic}`].map((m, idx) => {
          return (<div key={idx}>{this.textWrapping(m, 'subtitle1')}</div>)
        })
        }
      </Paper>          
    )
  }

  standardAttack = () => {
    this.props.applyStandardAttack();
    this.props.setMenuButtonsStatus();
  }

  render(){

    console.log(this.props);

    const {character, enemy, menuButtons} = this.props;

    return (
      <React.Fragment>
        <Typography style={{textAlign: 'center'}} variant='h3'>Battle</Typography>
        <Grid container justify='space-around'>
          <Grid item>
            {this.textWrapping('Your character', 'h5')}
            {this.monsterCard(character)}
          </Grid>
          <Grid item>
            {this.textWrapping('Your enemy', 'h5')}
            {this.monsterCard(enemy)}
          </Grid>
          
        </Grid>
        <Grid container justify='center' alignItems='center'>
          <div style={{borderStyle: 'solid', borderWidth: 1, height: 50, marginTop: 20, marginBottom: 20, paddingRight: 50, paddingLeft: 50, paddingTop: 15}}>
            {this.textWrapping(this.legend(), 'subtitle1')}
          </div>
        </Grid>
        <Grid container spacing={2} justify='center'>
          <Grid item>
            <Button 
              variant='contained' 
              color='primary'
              onClick={this.standardAttack}
              disabled={menuButtons}
            >
              Standard Attack
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant='contained' 
              color='primary'
              disabled={menuButtons}
            >
              Random Attack
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant='contained' 
              color='primary'
              disabled={menuButtons}
            >
              Store
            </Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {

  const {character, enemy, textOneVisible, textTwoVisible, menuButtons} = state;

  return {
    character,
    enemy,
    textOneVisible,
    textTwoVisible,
    menuButtons
  }
}

const mapDispatchToProps = dispatch => ({
  setTextOneVisible: () => dispatch(setTextOneVisible()),
  setTextTwoVisible: () => dispatch(setTextTwoVisible()),
  applyStandardAttack: () => dispatch(applyStandardAttack()),
  setMenuButtonsStatus: () => dispatch(setMenuButtonsStatus())
})

export default connect(mapStateToProps, mapDispatchToProps)(Battle);;
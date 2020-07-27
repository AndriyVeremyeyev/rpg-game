import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import {
  applyStandardAttack , 
  setMenuButtonsStatus, 
  applyRandomAttack,
  setLegend,
  setSubtitle
} from './actions';

class Battle extends Component {


  allowApplyAttack = () => {
    const {setLegend, setMenuButtonsStatus} = this.props;
    setLegend('Buttons became active now. Please, choose your action')
    setMenuButtonsStatus();
  }


  componentDidMount = () => {

    const {setLegend, setSubtitle} = this.props;
    setLegend(null);
    setSubtitle('Battle Mode');
    setTimeout(setLegend('This is Battle Mode'), 100);
    setTimeout(this.allowApplyAttack, 2000);
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

  randomAttack = () => {
    const attackValues = [0, 5, 10, 15, 20];
    const randomAttackValue = attackValues[Math.floor(Math.random() * attackValues.length)];
    this.props.applyRandomAttack(randomAttackValue);
    this.props.setMenuButtonsStatus();
  }

  render(){

    const {character, enemy, menuButtons} = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
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
        <Grid style={{marginTop: 50}} container spacing={2} justify='center'>
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
              onClick={this.randomAttack}
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
  applyStandardAttack: () => dispatch(applyStandardAttack()),
  applyRandomAttack: (randomValue) => dispatch(applyRandomAttack(randomValue)),
  setMenuButtonsStatus: () => dispatch(setMenuButtonsStatus()),
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setLegend: (text) => dispatch(setLegend(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Battle);;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Button, Typography, Paper } from '@material-ui/core';
import {
  applyStandardAttack , 
  setMenuButtonsStatus, 
  applyRandomAttack,
  setLegend,
  setSubtitle,
  applyEnemyAttack,
  setCharacterCardStyle,
  setEnemyCardStyle
} from './actions';
import './Battle.css';

class Battle extends Component {


  allowApplyAttack = () => {
    const {setLegend, setMenuButtonsStatus} = this.props;
    setLegend('Buttons became active now')
    setMenuButtonsStatus();
    const secondText = () => {
      setLegend('Make your choice from menu')
    }
    setTimeout(secondText, 1500);
  }


  componentDidMount = () => {

    const firstText = () => {
      setLegend('This is Battle Mode')
    }

    const {setLegend, setSubtitle} = this.props;
    setLegend(null);
    setSubtitle('Battle Mode');
    setTimeout(firstText, 1000);
    setTimeout(this.allowApplyAttack, 2500);
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

  enemyAttack = () => {
    const {
      applyEnemyAttack, 
      setMenuButtonsStatus, 
      setLegend,
      setCharacterCardStyle
    } = this.props;
    const attackValues = [0, 5, 10, 15, 20];
    const randomAttackValue = attackValues[Math.floor(Math.random() * attackValues.length)];
    applyEnemyAttack(randomAttackValue);
    setCharacterCardStyle('monsterCard');
    setLegend('Your enemy made attack');
    const secondText = () => {
      setLegend(`Your health damage is ${randomAttackValue}`);
      setCharacterCardStyle(null);
    }
    const thirdText = () => {
      setLegend('Now it\'s your turn');
      setMenuButtonsStatus();
    }
    setTimeout(secondText, 1500);
    setTimeout(thirdText, 3000);
  }

  standardAttack = () => {
    const {
      applyStandardAttack, 
      setMenuButtonsStatus, 
      setEnemyCardStyle, 
      setLegend
    } = this.props;
    applyStandardAttack();
    setEnemyCardStyle('monsterCard');
    setMenuButtonsStatus();
    setLegend('You made standard attack');
    const secondText = () => {
      setLegend('Now it\'s turn of your enemy');
      this.enemyAttack();
      setEnemyCardStyle(null);
    }
    setTimeout(secondText, 1500);
  }

  randomAttack = () => {
    const {
      applyRandomAttack, 
      setMenuButtonsStatus, 
      setLegend,
      setEnemyCardStyle
    } = this.props;
    const attackValues = [0, 5, 10, 15, 20];
    const randomAttackValue = attackValues[Math.floor(Math.random() * attackValues.length)];
    const secondText = () => {
      setLegend(`Enemy health damage is ${randomAttackValue}`);
      setEnemyCardStyle(null);
    }
    const thirdText = () => {
      setLegend('Now it\'s turn of your enemy');
      this.enemyAttack();
    }
    applyRandomAttack(randomAttackValue);
    setEnemyCardStyle('monsterCard');
    setMenuButtonsStatus();
    setLegend('You made random attack');
    setTimeout(secondText, 1500);
    setTimeout(thirdText, 3000);
  }

  render(){

    const {character, enemy, menuButtons, characterCard, enemyCard} = this.props;
    console.log(this.props);
    return (
      <React.Fragment>
        <Grid container justify='space-around'>
          <Grid item>
            {this.textWrapping('Your character', 'h5')}
            <div className={characterCard}>
              {this.monsterCard(character)}
            </div>
          </Grid>
          <Grid item>
            {this.textWrapping('Your enemy', 'h5')}
            <div className={enemyCard}>
              {this.monsterCard(enemy)}
            </div>
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

  const {character, enemy, textOneVisible, textTwoVisible, menuButtons, characterCard, enemyCard} = state;

  return {
    character,
    enemy,
    textOneVisible,
    textTwoVisible,
    menuButtons,
    characterCard,
    enemyCard
  }
}

const mapDispatchToProps = dispatch => ({
  applyStandardAttack: () => dispatch(applyStandardAttack()),
  applyRandomAttack: (randomValue) => dispatch(applyRandomAttack(randomValue)),
  setMenuButtonsStatus: () => dispatch(setMenuButtonsStatus()),
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setLegend: (text) => dispatch(setLegend(text)),
  applyEnemyAttack: (randomValue) => dispatch(applyEnemyAttack(randomValue)),
  setCharacterCardStyle: (style) => dispatch(setCharacterCardStyle(style)),
  setEnemyCardStyle: (style) => dispatch(setEnemyCardStyle(style)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Battle);;
import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core/';
import database from './database';
import './ChooseMonsters.css';
import {connect} from 'react-redux';
import {
  setRandomMonsters, 
  setCharacter, 
  setEnemy
} from './actions';

class ChooseMonsters extends Component {

  componentDidMount = () => {
    const shuffled = database.sort(() => 0.5 - Math.random()).slice(0, 4);
    this.props.setRandomMonsters(shuffled); 
  }

  comments = () => {
    if (!this.props.character){
      return "Choose your character"
    }
    if (this.props.character && !this.props.enemy){
      return "Choose your enemy"
    }
  } 
  
  gridOnClick = (id) => {
    const monster = this.props.randomMonsters.filter(m => m.id === id)
    const otherMonsters = this.props.randomMonsters.filter(m => m.id !== id)
    const {setCharacter, setEnemy, setRandomMonsters} = this.props;
    if (!this.props.character){
      setCharacter(monster[0]);
      setRandomMonsters(otherMonsters);
    } else {
      setEnemy(monster[0]);
      setRandomMonsters(otherMonsters);
    }
  }

  render(){
    return(
      <React.Fragment>
        <Grid container spacing={2} direction="row" alignItems="center" justify="center" style={{height: 500}}>
          {this.props.randomMonsters.map(m => {
            return (
              <Grid 
                className='item' 
                item 
                key={m.id}
                onClick={() => this.gridOnClick(m.id)}
              >
                <Paper elevation={5}>
                  <img alt='monster' src={`https://robohash.org/${m.id}?set=set2&size=200x200`}/>
                  <Typography align='center' variant='h6' color='inherit'>{m.name}</Typography>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
        <Typography variant='h5'>{this.comments()}</Typography>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {

  const {randomMonsters, character, enemy} = state;

  return {
    randomMonsters,
    character,
    enemy
  }
}

const mapDispatchToProps = dispatch => ({
  setRandomMonsters: (monsters) => dispatch(setRandomMonsters(monsters)),
  setCharacter: (character) => dispatch(setCharacter(character)),
  setEnemy: (enemy) => dispatch(setEnemy(enemy)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonsters);
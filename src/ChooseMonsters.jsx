import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core/';
import database from './database';
import './ChooseMonsters.css';
import {connect} from 'react-redux';
import {
  setRandomMonsters, 
  setCharacter, 
  setEnemy,
  setSubtitle,
  setLegend,
  setBattleVisible,
  setMonstersMenuVisible
} from './actions';

class ChooseMonsters extends Component {

  componentDidMount = () => {
    const {setRandomMonsters, setSubtitle, setLegend} = this.props;
    const shuffled = database.sort(() => 0.5 - Math.random()).slice(0, 4);
    setRandomMonsters(shuffled);
    setSubtitle('Monsters Menu')
    setLegend('Choose your character')
  }
  
  gridOnClick = (id) => {
    const monster = this.props.randomMonsters.filter(m => m.id === id)
    const otherMonsters = this.props.randomMonsters.filter(m => m.id !== id)
    const {
      setCharacter, 
      setEnemy, 
      setRandomMonsters, 
      setLegend, 
      setMonstersMenuVisible, 
      setBattleVisible
    } = this.props;

    if (!this.props.character){
      setCharacter(monster[0]);
      setRandomMonsters(otherMonsters);
      setLegend('Choose your enemy')
    } else {
      setEnemy(monster[0]);
      setRandomMonsters(otherMonsters);
      setMonstersMenuVisible();
      setBattleVisible();
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
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setLegend: (text) => dispatch(setLegend(text)),
  setBattleVisible: () => dispatch(setBattleVisible()),
  setMonstersMenuVisible: () => dispatch(setMonstersMenuVisible())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonsters);
import React, {Component} from 'react';
import {Grid, Paper, Typography} from '@material-ui/core/';
import {databaseMonsters} from './database';
import './ChooseMonsters.css';
import {connect} from 'react-redux';
import {
  setRandomMonsters, 
  setCharacter, 
  setEnemy,
  setSubtitle,
  setLegend,
  setPageStatus
} from './actions';

class ChooseMonsters extends Component {

  componentDidMount = () => {
    const {setRandomMonsters, setSubtitle, setLegend, randomMonsters} = this.props;
    if (randomMonsters.length === 0){
      const shuffled = databaseMonsters.sort(() => 0.5 - Math.random()).slice(0, 4);
      setRandomMonsters(shuffled);
      setLegend('Choose your character')
    } else if (randomMonsters.length === 2){
      setLegend('Choose your enemy for 2 round')
    } else if (randomMonsters.length === 1){
      setLegend('Choose your enemy for 3 round')
    }
    setSubtitle('Monsters Menu')
  }
  
  gridOnClick = (id) => {
    const monster = this.props.randomMonsters.filter(m => m.id === id)
    const otherMonsters = this.props.randomMonsters.filter(m => m.id !== id)
    const {
      setCharacter, 
      setEnemy, 
      setRandomMonsters, 
      setLegend, 
      setPageStatus
    } = this.props;

    if (!this.props.character){
      setCharacter(monster[0]);
      setRandomMonsters(otherMonsters);
      setLegend('Choose your enemy')
    } else {
      setEnemy(monster[0]);
      setRandomMonsters(otherMonsters);
      setPageStatus('battleMode');
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

  const {randomMonsters, character, enemy, defeatedEnemies} = state;

  return {
    randomMonsters,
    character,
    enemy,
    defeatedEnemies
  }
}

const mapDispatchToProps = dispatch => ({
  setRandomMonsters: (monsters) => dispatch(setRandomMonsters(monsters)),
  setCharacter: (character) => dispatch(setCharacter(character)),
  setEnemy: (enemy) => dispatch(setEnemy(enemy)),
  setSubtitle: (text) => dispatch(setSubtitle(text)),
  setLegend: (text) => dispatch(setLegend(text)),
  setPageStatus: (page) => dispatch(setPageStatus(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseMonsters);
import React from 'react';
import {connect} from 'react-redux';
import { Grid, Typography, Paper } from '@material-ui/core';

const Battle = ({character, enemy}) => {
  console.log(character);
  console.log(enemy);
  return (
    <React.Fragment>
      <Typography style={{textAlign: 'center'}} variant='h3'>Battle</Typography>
      <Grid container justify='space-around'>
        <Grid item>
          <Paper elevation={5}>
            <img alt='monster' src={`https://robohash.org/${character.id}?set=set2&size=200x200`}/>
            <Typography align='center' variant='h6' color='inherit'>{character.name}</Typography>
          </Paper>          
        </Grid>
        <Grid item>
          <Paper elevation={5}>
            <img alt='monster' src={`https://robohash.org/${enemy.id}?set=set2&size=200x200`}/>
            <Typography align='center' variant='h6' color='inherit'>{enemy.name}</Typography>
          </Paper> 
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

const mapStateToProps = state => {

  const {character, enemy} = state;

  return {
    character,
    enemy
  }
}

export default connect(mapStateToProps)(Battle);;
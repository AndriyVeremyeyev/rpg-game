import React from 'react';
import {Typography, Button, Grid} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBattleVisible, setInventoryVisible} from './actions';

const Inventory = ({setBattleVisible, setInventoryVisible}) => {

  const letsSetBattleVisible = () => {
    setBattleVisible();
    setInventoryVisible();
  }

  return (
    <Grid container direction='column'>
      <Typography>Inventory</Typography>
      <Grid container direction="row">
      </Grid>
      <Button
        variant='contained' 
        color='primary'
        onClick={letsSetBattleVisible}
      >
        Back to Battle
      </Button>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  setBattleVisible: () => dispatch(setBattleVisible()),
  setInventoryVisible: () => dispatch(setInventoryVisible()),
})


export default connect(null, mapDispatchToProps)(Inventory);
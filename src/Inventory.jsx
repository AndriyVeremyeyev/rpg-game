import React from 'react';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {
  setInventoryButtonStatus,
  setPageStatus,
  setInventory,
  setWeapon
} from './actions';
import './Inventory.css';
import Image1 from './images/35043557-sword.jpg';
import Image2 from './images/13103920-aged-metal-shield-isolated-on-white.jpg';
import Image3 from './images/151337054-bow-and-arrows-black-silhouette-.jpg';
import Image4 from './images/36278563-medieval-knight-helmet-isolated-on-white-photo-realistic-vector-illustration.jpg';
import Image5 from './images/140266864-medical-pills-bottle-on-white.jpg';

const Inventory = ({
  inventory, 
  setInventoryButtonStatus,
  setPageStatus,
  setInventory,
  setWeapon
}) => {

  const clickOnWeapon = (id) => {
    const weapon = inventory.filter ( w => w.id === id);
    const otherWeapons = inventory.filter (w => w.id !== id);
    setWeapon(weapon[0]);
    setInventory(otherWeapons);
    
    setInventoryButtonStatus(true);
    setPageStatus('battleMode')
  }

  const textWrapping = (text, fontSize) => {
    return <Typography align='center' variant={fontSize} color='inherit'>{text}</Typography>
  }


  const imageCover = (item) => {
    const images = [Image1, Image2, Image3, Image4, Image5];
    return (
      <Paper style={{height: 300}} elevation={5}>
        <div style={{height: 150}}>
          <img style={{width: 150}} src={images[item.id-1]} alt={item.name}/>
        </div>
        {textWrapping(item.name, 'h6')}
        {[`Attack: ${item.attack}`, `Defense: ${item.defense}`, `Health: ${item.health}`, `Magic: ${item.magic}`].map((m, idx) => {
          return (<div key={idx}>{textWrapping(m, 'subtitle1')}</div>)
        })
        }           
      </Paper>
    )
  }
  return (
    <Grid container direction='column' justify="center" alignItems='center'>
      <Grid container direction="row" justify="center" spacing={2}>
        {inventory.map((w) => {
            return (
              <Grid className='weapon' item key={w.id} onClick={() => clickOnWeapon(w.id)}>
              {imageCover(w)}
            </Grid>
            )
          })
        }
      </Grid>
      <Grid item style={{marginTop: 50}}>
        <Button
          variant='contained' 
          color='primary'
          onClick={() => setPageStatus('battleMode')}
        >
          Back to Battle
        </Button>
      </Grid>

    </Grid>
  )
}

const mapStateToProps = state => {

  const {inventory} = state;

  return {
    inventory
  }
}

const mapDispatchToProps = dispatch => ({
  setInventoryButtonStatus: (status) => dispatch(setInventoryButtonStatus(status)),
  setPageStatus: (page) => dispatch(setPageStatus(page)),
  setInventory: (inventory) => dispatch(setInventory(inventory)),
  setWeapon: (weapon) => dispatch(setWeapon(weapon))
})


export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
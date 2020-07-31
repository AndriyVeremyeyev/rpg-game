import React from 'react';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {
  setBattleVisible, 
  setInventoryVisible, 
  setSword,
  setShield,
  setBow,
  setHelmet,
  setPills,
  setSwordCardVisibility,
  setShieldCardVisibility,
  setBowCardVisibility,
  setHelmetCardVisibility,
  setPillsCardVisibility
} from './actions';
import Image1 from './images/35043557-sword.jpg';
import Image2 from './images/13103920-aged-metal-shield-isolated-on-white.jpg';
import Image3 from './images/151337054-bow-and-arrows-black-silhouette-.jpg'
import Image4 from './images/36278563-medieval-knight-helmet-isolated-on-white-photo-realistic-vector-illustration.jpg'
import Image5 from './images/140266864-medical-pills-bottle-on-white.jpg'
import './Inventory.css';

const Inventory = ({
  setBattleVisible, 
  setInventoryVisible, 
  inventory, 
  setSword, 
  setShield, 
  setBow, 
  setHelmet, 
  setPills,
  setSwordCardVisibility,
  setShieldCardVisibility,
  setBowCardVisibility,
  setHelmetCardVisibility,
  setPillsCardVisibility,
  swordCardStatus,
  shieldCardStatus,
  bowCardStatus,
  helmetCardStatus,
  pillsCardStatus
}) => {

  const clickOnWeapon = (setWeapon, setCardVisibility) => {
    if (setWeapon){
      setWeapon();
      setCardVisibility();
    }
    setInventoryVisible();
    setBattleVisible();
  }

  const textWrapping = (text, fontSize) => {
    return <Typography align='center' variant={fontSize} color='inherit'>{text}</Typography>
  }

  const imageCover = (image, alt, item, action, cardVisibility) => {
    if (!cardVisibility){
      return (
        <Grid className='weapon' item onClick={action}>
          <Paper style={{height: 300}} elevation={5}>
            <div style={{height: 150}}>
              <img style={{width: 150}} src={image} alt={alt}></img>
            </div>
            {textWrapping(item.name, 'h6')}
            {[`Attack: ${item.attack}`, `Defense: ${item.defense}`, `Health: ${item.health}`, `Magic: ${item.magic}`].map((m, idx) => {
              return (<div key={idx}>{textWrapping(m, 'subtitle1')}</div>)
            })
            }          
          </Paper>
        </Grid>
      )
    }
  }
  console.log(inventory);
  return (
    <Grid container direction='column' justify="center" alignItems='center'>
      <Grid container direction="row" justify="center" spacing={2}>
        {imageCover(Image1, 'Sword', inventory[0], () => clickOnWeapon(setSword, setSwordCardVisibility), swordCardStatus)}
        {imageCover(Image2, 'Shield', inventory[1], () => clickOnWeapon(setShield, setShieldCardVisibility), shieldCardStatus)}
        {imageCover(Image3, 'Bow', inventory[2], () => clickOnWeapon(setBow, setBowCardVisibility), bowCardStatus)}
        {imageCover(Image4, 'Helmet', inventory[3], () => clickOnWeapon(setHelmet, setHelmetCardVisibility), helmetCardStatus)}
        {imageCover(Image5, 'Pills', inventory[4], () => clickOnWeapon(setPills, setPillsCardVisibility), pillsCardStatus)}
      </Grid>
      <Grid item>
        <Button
          variant='contained' 
          color='primary'
          onClick={() => clickOnWeapon(null)}
        >
          Back to Battle
        </Button>
      </Grid>

    </Grid>
  )
}

const mapStateToProps = state => {

  const {inventory, swordCardStatus, shieldCardStatus, bowCardStatus, helmetCardStatus, pillsCardStatus} = state;

  return {
    inventory,
    swordCardStatus,
    shieldCardStatus,
    bowCardStatus,
    helmetCardStatus,
    pillsCardStatus
  }
}

const mapDispatchToProps = dispatch => ({
  setBattleVisible: () => dispatch(setBattleVisible()),
  setInventoryVisible: () => dispatch(setInventoryVisible()),
  setSword: () => dispatch(setSword()),
  setShield: () => dispatch(setShield()),
  setBow: () => dispatch(setBow()),
  setHelmet: () => dispatch(setHelmet()),
  setPills: () => dispatch(setPills()),
  setSwordCardVisibility: () => dispatch(setSwordCardVisibility()),
  setShieldCardVisibility: () => dispatch(setShieldCardVisibility()),
  setBowCardVisibility: () => dispatch(setBowCardVisibility()),
  setHelmetCardVisibility: () => dispatch(setHelmetCardVisibility()),
  setPillsCardVisibility: () => dispatch(setPillsCardVisibility())
})


export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
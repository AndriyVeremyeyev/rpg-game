import React from 'react';
import {Button, Grid, Paper, Typography} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBattleVisible, setInventoryVisible} from './actions';
import Image1 from './images/35043557-sword.jpg';
import Image2 from './images/13103920-aged-metal-shield-isolated-on-white.jpg';
import Image3 from './images/151337054-bow-and-arrows-black-silhouette-.jpg'
import Image4 from './images/36278563-medieval-knight-helmet-isolated-on-white-photo-realistic-vector-illustration.jpg'
import Image5 from './images/140266864-medical-pills-bottle-on-white.jpg'
import './Inventory.css';

const Inventory = ({setBattleVisible, setInventoryVisible, inventory}) => {

  const letsSetBattleVisible = () => {
    setBattleVisible();
    setInventoryVisible();
  }

  const imageStyle = {
    width: 150
  }

  const textWrapping = (text, fontSize) => {
    return <Typography align='center' variant={fontSize} color='inherit'>{text}</Typography>
  }

  const imageCover = (image, alt, item) => {
    return (
      <Grid className='weapon' item>
        <Paper style={{height: 300}} elevation={5}>
          <img style={imageStyle} src={image} alt={alt}></img>
          {textWrapping(item.name, 'h6')}
          {[`Attack: ${item.attack}`, `Defense: ${item.defense}`, `Health: ${item.health}`, `Magic: ${item.magic}`].map((m, idx) => {
            return (<div key={idx}>{textWrapping(m, 'subtitle1')}</div>)
          })
          }          
        </Paper>
      </Grid>
    )
  }
  console.log(inventory);
  return (
    <Grid container direction='column' justify="center" alignItems='center'>
      <Grid container direction="row" justify="center" spacing={2}>
        {imageCover(Image1, 'Sword', inventory[0])}
        {imageCover(Image2, 'Shield', inventory[1])}
        {imageCover(Image3, 'Bow', inventory[2])}
        {imageCover(Image4, 'Helmet', inventory[3])}
        {imageCover(Image5, 'Pills', inventory[4])}
      </Grid>
      <Grid item>
        <Button
          variant='contained' 
          color='primary'
          onClick={letsSetBattleVisible}
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
  setBattleVisible: () => dispatch(setBattleVisible()),
  setInventoryVisible: () => dispatch(setInventoryVisible())
})


export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
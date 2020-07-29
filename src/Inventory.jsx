import React from 'react';
import {Typography, Button, Grid, Card} from '@material-ui/core';
import {connect} from 'react-redux';
import {setBattleVisible, setInventoryVisible} from './actions';
import Image1 from './images/35043557-sword.jpg';
import Image2 from './images/13103920-aged-metal-shield-isolated-on-white.jpg';
import Image3 from './images/151337054-bow-and-arrows-black-silhouette-.jpg'
import Image4 from './images/36278563-medieval-knight-helmet-isolated-on-white-photo-realistic-vector-illustration.jpg'
import Image5 from './images/151337054-bow-and-arrows-black-silhouette-.jpg'


const Inventory = ({setBattleVisible, setInventoryVisible}) => {

  const letsSetBattleVisible = () => {
    setBattleVisible();
    setInventoryVisible();
  }

  const imageStyle = {
    width: 150
  }

  const imageCover = (image, alt) => {
    return (
      <Grid item>
        <Card style={{height: 150}} elevation={5}>
          <img style={imageStyle} src={image} alt={alt}></img>
        </Card>
      </Grid>
    )
  }

  return (
    <Grid container direction='column' justify="center">
      <Typography>Inventory</Typography>
      <Grid container direction="row" justify="center" spacing={2}>
        {imageCover(Image1, 'Sword')}
        {imageCover(Image2, 'Shield')}
        {imageCover(Image3, 'Bow')}
        {imageCover(Image4, 'Helmet')}
        {imageCover(Image5, 'Pills')}
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
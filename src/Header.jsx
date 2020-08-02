import React from 'react';
import {connect} from 'react-redux';
import { Typography, Grid } from '@material-ui/core';

const Header = ({subTitle, legend, roundTitle, pageStatus}) => {

  const roundTitleView = () => {
    if (pageStatus === 'battleMode'){
      return (
        <Typography variant='h4'>{roundTitle}</Typography>
      )
    }
  }

  return (
    <Grid style={{marginTop: 50}} container direction='column' alignItems='center'>
      <Typography variant='h3'>{subTitle}</Typography>
      {roundTitleView()}
      <div style={{borderStyle: 'solid', borderWidth: 1, height: 50, width: 300, marginTop: 20, marginBottom: 20, paddingTop: 15}}>
      <Typography style={{textAlign: 'center'}} variant='subtitle1'>{legend}</Typography>
      </div>      
    </Grid>
  )
}

const mapStateToProps = state => {

  const {subTitle, legend, roundTitle, pageStatus} = state;

  return {
    subTitle,
    legend,
    roundTitle,
    pageStatus
  }
}

export default connect(mapStateToProps)(Header);
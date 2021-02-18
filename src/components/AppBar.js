import React from 'react';
import { makeStyles } from '@material-ui/core';

import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'

const useStyles = makeStyles((theme) => ({
  root:{
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function AppBarComponent(){

  const classes = useStyles();

  return (
    <AppBar className={classes.root}>
      <Toolbar>
       
      </Toolbar>
    </AppBar>
  );
}
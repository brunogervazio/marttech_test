import React from 'react';

import AppBar from '../../components/AppBar'

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
  },
}))

export default function Simple({children}){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar />
      {children}
    </div>
  );
}
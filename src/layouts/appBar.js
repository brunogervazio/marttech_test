import React from 'react';

import TopBar from '../components/topBar'
import Box from '@material-ui/core/Box'

import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 72,
    [theme.breakpoints.down('xs')]: {
      paddingTop: 64,
    },
    height: '100vh'
  },
  content: {
    maxWidth: theme.breakpoints.width('lg'),
    margin: 'auto',
    height: '100%'
  }
}))

export default function AppBar({children}){
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <TopBar />
      <Box className={classes.content}>
        {children}
      </Box>
    </div>
  );
}
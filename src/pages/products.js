import Grid from '@material-ui/core/Grid';
import React from 'react';

import CardItem from '../components/cardItem'

import {makeStyles} from '@material-ui/core/styles'
import products from '../mocks/productsMock.json'

const useStyles = makeStyles((theme) => ({
  item: {
    padding: theme.spacing(1)
  }
}))

export default function Products(){
  const classes = useStyles();

  const items = products;

  return(
    <Grid container>
      {
      items.map((item)=>
        <Grid item lg={3} md={4} sm={6} xs={12} className={classes.item} key={item.id}>
          <CardItem data={item} />
        </Grid>
      )}
    </Grid>
  );
}
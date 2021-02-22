import React, { useState } from 'react';

import { useSelector } from 'react-redux';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ItemShoppings from '../components/itemShoppings';

import { selectShoppings } from '../store/shoppings/shoppingsSelectors';
import { filterArray } from '../utils/filterArray';

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'RGB(0,0,0,0.2)',
  },
  search: {
    margin: theme.spacing(1)
  },
}))

export default function Shoppings(){
  const classes = useStyles();
  
  const shoppings = useSelector(selectShoppings);

  const [search, setSearch] = useState('')

  if(shoppings.length){
    return(
      <div>
        <TextField
          id="search"
          className={classes.search}
          label="Pesquisar Cliente"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <Grid container>
          {
            filterArray(shoppings, search, 'name').map((item) => 
              <Grid
                item
                md={4} sm={6} xs={12}>
                <ItemShoppings
                  shopping={item} />
              </Grid>
          )}
        </Grid>
      </div>
    );
  }else{
    return(
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        flexDirection="column">
        <Typography
          variant="h3"
          className={classes.title}>
          Não encontramos nehuma compra :(
        </Typography>
      </Box>
    );
  }
};
import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles'

import { selectTotalPrice } from '../store/checkout/checkoutSelectors'

const useStyles = makeStyles((themes) =>({
  totalPrice:{
    margin: `${themes.spacing(4)}px 0`
  },
  buttons:{
    width: 150,
    color: '#ffffff'
  },
}));

export default function ActionCheckout(props){
  const classes = useStyles();
  const totalPrice = useSelector(selectTotalPrice);
  const history = useHistory();

  return(
    <Grid container>
      <Grid item md={10} sm={3} xs={5}/>
      <Grid item md={2} sm={9}>
        <Typography variant="h5" color="secondary" className={classes.totalPrice}>
          {totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </Typography>
      </Grid>
      <Grid container justify="space-between">
        <Button
          onClick={() => history.push('/products')}
          className={classes.buttons}
          size="large"
          variant="contained"
          color="secondary">
            + Produtos
        </Button>
        <Button
          onClick={() => props.modalOpen()}
          className={classes.buttons}
          size="large"
          variant="contained"
          color="primary">
            Finalizar
        </Button>
      </Grid>
    </Grid>
  );
}
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

import {makeStyles} from '@material-ui/core/styles'

import { addToCheckout } from '../store/checkout/checkoutActions'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

import ShoppingCart from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  description:{
    marginTop: theme.spacing(1),
    height: 36,
    overflow: 'hidden',
  },
  price:{
    marginTop: theme.spacing(2),
    color: theme.palette.secondary.main
  }
}));

export default function CardItem(props){
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const addItemCheckout = (product) => {
    const itemCheckout = product;
    itemCheckout['quantity'] = 1;
    dispatch(addToCheckout(itemCheckout));

    history.push('/checkout');
  }

  return(
    <Card>
      <CardContent className={classes.cardContent}>
        <Grid container item justify="center">
          <img
            src={props.data.photo}
            alt={props.data.id}
            height='200px'          
            className={classes.image}/>
        </Grid>
        <Typography variant="body2" className={classes.description}>
          {props.data.description}
        </Typography>
        <Typography variant="h5" className={classes.price}>
          {props.data.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="primary"
          fullWidth
          startIcon={<ShoppingCart />}
          variant="contained"
          onClick={() => addItemCheckout(props.data)}>
          Adicionar ao Carrinho
        </Button>
      </CardActions>
    </Card>
  );
}
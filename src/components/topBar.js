import React from 'react';
import {useSelector} from 'react-redux'
import { makeStyles, withStyles  } from '@material-ui/core';
import { useHistory } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import ShoppingCart from '@material-ui/icons/ShoppingCart';

import {selectProductsCheckout} from '../store/checkout/checkoutSelectors'

const useStyles = makeStyles((theme) => ({
  root:{
    boxShadow: '0px 2px 4px -1px rgb(7 79 140 / 20%), 0px 4px 5px 0px rgb(7 79 140 / 14%), 0px 1px 10px 0px rgb(7 79 140 / 12%)',
    zIndex: theme.zIndex.drawer + 1,
    display: 'inline',
  },
  logo: {
    height: '40px'
  },
  grow: {
    flexGrow: 1
  },
  toolbar:{
    maxWidth: theme.breakpoints.width('lg'),
    margin: 'auto'
  }
}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
}))(Badge);

export default function TopBar(){

  const classes = useStyles();
  const history = useHistory();

  const checkout = useSelector(selectProductsCheckout);

  return (
    <AppBar className={classes.root} color='inherit'>
      <Toolbar className={classes.toolbar}>
        <Box marginLeft={3}>
          <Button color="primary" onClick={() => history.push("/products")}>Produtos</Button>
          <Button color="primary" onClick={() => history.push("/shoppings")}>Pedidos</Button>
        </Box>
        <div className={classes.grow} />
        <IconButton onClick={() => history.push("/checkout")}>
          <StyledBadge badgeContent={checkout.length}>
            <ShoppingCart color='secondary' />
          </StyledBadge>
        </IconButton>       
      </Toolbar>
    </AppBar>
  );
}
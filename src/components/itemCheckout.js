import React from 'react';
import {useDispatch} from 'react-redux';

import {addUnity, removeUnity, removeItem} from '../store/checkout/checkoutActions'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import {makeStyles} from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider'

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const useStyles = makeStyles((themes) =>({
  gridContainer:{
    margin: `${themes.spacing(2)}px 0px`
  }
}));

export default function ItemCheckout(props){
  const classes = useStyles();

  const dispatch = useDispatch();

  const add = (id) => dispatch(addUnity(id));
  const remove = (id) => dispatch(removeUnity(id));
  const deleteItem = (id) => dispatch(removeItem(id));

  return(
    <div key={props.data.id}>
      <Grid container alignItems="center">
        <Grid className={classes.gridContainer} container item md={2} sm={3} xs={5} justify="center">
          <img
            src={props.data.photo}
            alt={props.data.description}
            height='76px'/>
        </Grid>
        <Grid item md={4} sm={9} xs={7}>
          <Typography variant="body2">
            {props.data.description}
          </Typography>
        </Grid>
        <Grid container item md={4} sm={3} xs={5} justify="center" alignItems="center">
          <IconButton onClick={()=> props.data.quantity > 1 ? remove(props.data.id) : deleteItem(props.data.id)}>
            <RemoveIcon />
          </IconButton>
          <Typography variant="h5" color="secondary">
              {props.data.quantity}
          </Typography>
          <IconButton onClick={()=>add(props.data.id)}>
            <AddIcon />
          </IconButton>
        </Grid>
        <Grid container item md={2} sm={9} xs={7}>
          <Typography variant="h5" color="primary">
            {(props.data.quantity * props.data.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider}/>
    </div>
  );
}
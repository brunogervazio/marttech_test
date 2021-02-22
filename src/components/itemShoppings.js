import React, {useState} from 'react';

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import ModalPurchasedItems from '../components/modalPurchasedItems';

import { makeStyles } from '@material-ui/core/styles';

import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((themes) => ({
  root: {
    padding: `${themes.spacing(1)}px`
  },
  name: {
    color: themes.palette.primary.main,
    textTransform: 'uppercase'
  },
  label: {
    color: themes.palette.secondary.main
  }
}));

export default function ItemShoppings(props){
  const classes = useStyles();

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(!open)

  return(
    <div className={classes.root}>
      <Card>
        <CardContent>
          <Typography
            className={classes.name}
            variant="h6">
            {props.shopping.name}
          </Typography>
          <Typography variant="body2">
            <span className={classes.label}>CPF</span> {props.shopping.cpf}
          </Typography>
          <Typography variant="body2">
            <span className={classes.label}>VALOR TOTAL</span> {props.shopping.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <IconButton 
              onClick={() => modalOpen()}>
              <ListAltIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      
      <ModalPurchasedItems open={open} modalOpen={modalOpen} items={props.shopping.items} totalPrice={props.shopping.totalPrice}/>
    </div>
  );
};
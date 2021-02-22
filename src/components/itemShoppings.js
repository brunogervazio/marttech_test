import React from 'react';

import { cpfMask } from '../utils/cpfMask';

import Box from '@material-ui/core/Box'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

import { makeStyles } from '@material-ui/core/styles';

import ListAltIcon from '@material-ui/icons/ListAlt';

const useStyles = makeStyles((themes) => ({
  root: {
    padding: `${themes.spacing(1)}px`
  },
  name: {
    color: themes.palette.primary.main
  },
  label: {
    color: themes.palette.secondary.main
  }
}));

export default function ItemShoppings(props){
  const classes = useStyles();

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
            <span className={classes.label}>CPF</span> {cpfMask(props.shopping.cpf)}
          </Typography>
          <Typography variant="body2">
            <span className={classes.label}>VALOR TOTAL</span> {props.shopping.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <IconButton>
              <ListAltIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};
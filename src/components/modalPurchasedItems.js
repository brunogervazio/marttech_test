import React from 'react';

import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const useStyle = makeStyles((themes) => ({
  card:{
    width: '100%',
    maxWidth: 700,
    margin: 20
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridContainer:{
    margin: `${themes.spacing(2)}px 0px`
  },
  gridTotalPrice:{
    margin: `${themes.spacing(2)}px 0px`,
    textTransform: 'uppercase'
  }
}))

export default function ModalPurchasedItems(props){
  const classes = useStyle();

  return(
    <Modal
      className={classes.modal}
      open={props.open}
      onClose={() => props.modalOpen()}>
        {
          <Card className={classes.card}>
            <CardContent>
              <Box display="flex" justifyContent="flex-end">
                <IconButton
                size="small"
                  onClick={props.modalOpen}>
                  <CloseIcon />
                </IconButton>
              </Box>
              {
                props.items.map(item =>
                  <>
                    <Grid container alignItems="center">
                      <Grid
                        className={classes.gridContainer}
                        container item 
                        md={2} sm={3} xs={5} 
                        justify="center">
                        <img
                          src={item.photo}
                          alt={item.description}
                          height='76px'/>
                      </Grid>
                      <Grid item md={4} sm={9} xs={7}>
                        <Typography variant="body2">
                          {item.description}
                        </Typography>
                      </Grid>
                      <Grid container item md={3} sm={3} xs={5} justify="center">
                        <Typography variant="body2">
                          {item.quantity}un. {item.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </Typography>
                      </Grid>
                      <Grid container item md={3} sm={9} xs={7}>
                        <Typography variant="h6" color="primary">
                          {(item.quantity * item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Divider className={classes.divider} />
                  </>
                )
              }
              <Grid container className={classes.gridTotalPrice}>
                <Grid item md={9} sm={3} xs={6}>
                  <Typography variant="h6" color="primary" className={classes.totalPrice}>
                    valor total
                  </Typography>
                </Grid>
                <Grid item md={3} sm={9}>
                  <Typography variant="h6" color="secondary" className={classes.totalPrice}>
                    {props.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        }
    </Modal>
  );
}
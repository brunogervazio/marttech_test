import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ItemCheckout from '../components/itemCheckout';
import ActionCheckout from '../components/actionCheckout';

import { selectProductsCheckout } from '../store/checkout/checkoutSelectors';
import ModalCheckout from '../components/modalCheckout';


const useStyles = makeStyles((themes) => ({
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: 'RGB(0,0,0,0.2)',
  },
  button: {
    margin: `${themes.spacing(5)}px 0`,
    color: '#ffffff',
    width: 200,
  },
}))

export default function Checkout(){
  const classes = useStyles(); 
  const history = useHistory();
  const cartItems = useSelector(selectProductsCheckout);

  const [open, setOpen] = useState(false);

  const modalOpen = () => {
    setOpen(true);
  };

  const modalClose = () => {
    setOpen(false);
  };

  if(cartItems.length){
    return(
      <div>
        <Card>
          <CardContent>
            {cartItems.map((item)=>
              <ItemCheckout data={item} key={item.id}/>
            )}
            <ActionCheckout modalOpen={modalOpen}/>
          </CardContent>
        </Card>
        <ModalCheckout modalClose={modalClose} open={open}/>
      </div>
    );
  }else{
    return(
      <Box display="flex" justifyContent="center" alignItems="center" height="100%" flexDirection="column">
        <Typography variant="h3" className={classes.title}>
          Não há itens no carrinho
        </Typography>
        <Button
          onClick={()=> history.push('/products')}
          className={classes.button}
          color="secondary"
          size="large"
          variant="contained">
            Ver produtos
        </Button>
      </Box>
    );
  }
};
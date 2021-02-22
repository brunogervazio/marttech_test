import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import ItemCheckout from '../components/itemCheckout';
import ActionCheckout from '../components/actionCheckout';
import ModalCheckout from '../components/modalCheckout';

import { selectProductsCheckout } from '../store/checkout/checkoutSelectors';
import { selectTotalPrice } from '../store/checkout/checkoutSelectors';
import { addShopping } from '../store/shoppings/shoppingsActions';
import { resetCheckout } from '../store/checkout/checkoutActions';


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
  const dispatch = useDispatch();

  const cartItems = useSelector(selectProductsCheckout);
  const totalPrice = useSelector(selectTotalPrice);

  const [open, setOpen] = useState(false);

  const modalOpen = () => setOpen(!open);

  const modalConfirm = (form) => {
    const shopping = {
      name: form.name,
      cpf: form.cpf,
      totalPrice: totalPrice,
      items: cartItems
    };

    dispatch(addShopping(shopping));
    dispatch(resetCheckout());

    history.push('/shoppings');
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
        <ModalCheckout
          modalConfirm={modalConfirm}
          modalOpen={modalOpen}
          open={open}/>
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
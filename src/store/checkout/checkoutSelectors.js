export const selectProductsCheckout = state => state.checkout;

export const selectTotalPrice = state =>
    state.checkout.reduce((total, item) => 
    total + (item.quantity * item.price), 0);
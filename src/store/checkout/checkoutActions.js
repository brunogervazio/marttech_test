export function addToCheckout(product){
  return {
    type: 'ADD_TO_CHECKOUT',
    payload: product
  }
}
export function addUnity(id){
  return {
    type: 'ADD_UNITY',
    payload: id
  }
}
export function removeUnity(id){
  return {
    type: 'REMOVE_UNITY',
    payload: id
  }
}
export function removeItem(id){
  return {
    type: 'REMOVE_ITEM',
    payload: id
  }
}
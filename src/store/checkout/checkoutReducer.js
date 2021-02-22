export default function checkoutReducer(state = [], action){
  switch(action.type){
    case 'ADD_TO_CHECKOUT':
        return state.filter(item => {
          return item.id === action.payload.id
        }).length ? state : [...state, action.payload]
    case 'ADD_UNITY':
      {
        return state.filter(item => {
          if(item.id === action.payload){
            item.quantity += 1;
            return item
          }
          return item
        });
      }
    case 'REMOVE_UNITY':
      {
        return state.filter(item => {
          if(item.id === action.payload){
            item.quantity -= 1;
            return item
          }
          return item
        });
      }
    case 'REMOVE_ITEM':
      {
        return state.filter(item => {
          return item.id !== action.payload
        });
      }
    case 'RESET_CHECKOUT':
      {
        return []
      }
    default:
      return state
  }
};
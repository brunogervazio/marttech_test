
export default function shoppingsReducer(state = [], action){
    switch(action.type){
      case 'ADD_SHOPPING':
          return [...state, action.payload]
      default:
        return state
    }
  };
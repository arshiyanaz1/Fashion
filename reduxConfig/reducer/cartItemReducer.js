const initialState = {
  cartItems: [],
  totalPrice: 0,
  itemQty: 1,
  country: [],
}

const cartItems = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      /*   const item = state.cartItems.find(
            product => product.id === action.payload.id,
          );
        
          if (item) {
            return {
              ...state,
              cartItems: state.cartItems.map(item => item.id === action.payload.id
                ? {
                  ...item,
                  //qty: item.qty + 1,
                  itemQty:itemQty+1
                }
                : item
              ),
              totalPrice: 0,
            };
          } */
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        totalPrice: state.totalPrice + action.payload.dob.age,
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id),
        totalPrice: state.totalPrice - action.payload.dob.age,
      }
    case 'CLEAR_CART':
      return{
        ...state,
        cartItems:[],
        totalPrice:0,        
      }
    case 'LOAD_COUNTRIES':
      return {
        ...state, 
        country: [...state.country, action.payload[0]]
      }

  }

  return state
}

export default cartItems
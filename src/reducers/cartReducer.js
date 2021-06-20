import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants'

// when cartItems available in local storage, use it. else cart is empty
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []

const initialState = {
  cartItems: cartItemsFromStorage,
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload
      const existItem = state.cartItems.find((x) => x.id === item.id)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.id === existItem.id ? item : x
          ),
        }
      } else {
        return { ...state, cartItems: [...state.cartItems, item] }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.id !== action.payload.id
        ),
      }
    default:
      return state
  }
}

export default cartReducer

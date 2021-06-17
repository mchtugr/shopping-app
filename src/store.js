import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import productReducer from './reducers/productReducer'
import cartReducer from './reducers/cartReducer'

const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
})

const initialState = {}

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store

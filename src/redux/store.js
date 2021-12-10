import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import cartReducer from './Cart/CartReducer'

 const store = createStore(cartReducer, applyMiddleware(logger))

export default store
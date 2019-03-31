import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { IS_PRODUCTION } from '../utils/constants'
import { beersReducer } from './beers/reducers'
import { cartReducer } from './cart/reducers'
import { purchaseReducer } from './purchase/reducers'
import { tagsReducer } from './tags/reducers'
import { UIReducer } from './ui/reducers'

const rootReducer = combineReducers({
  beersReducer,
  tagsReducer,
  cartReducer,
  purchaseReducer,
  UIReducer
});

export type AppState = ReturnType<typeof rootReducer>;

const middleware = [
  thunkMiddleware,
  !IS_PRODUCTION && require("redux-logger").createLogger({ collapsed: true })
].filter(Boolean);
const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;

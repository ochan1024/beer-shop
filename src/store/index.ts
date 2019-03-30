import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

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

const loggerMiddleware = createLogger({ collapsed: true });
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

export default store;

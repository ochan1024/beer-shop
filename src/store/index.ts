import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import { beersReducer } from './beers/reducers'
import { tagsReducer } from './tags/reducers'

const rootReducer = combineReducers({
  beers: beersReducer,
  tags: tagsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
  return store;
}

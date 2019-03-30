import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import { beersReducer } from './beers/reducers'
import { tagsReducer } from './tags/reducers'

const rootReducer = combineReducers({
  beersReducer,
  tagsReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const loggerMiddleware = createLogger({ collapsed: true });
  const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
  return store;
}

import { HIDE_LOADER, SHOW_LOADER, UIActionTypes, UIState } from './types'

const initialState: UIState = {
  isLoaderVisible: false
};

export function UIReducer(
  state = initialState,
  action: UIActionTypes
): UIState {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoaderVisible: true
      };
    case HIDE_LOADER:
      return {
        ...state,
        isLoaderVisible: false
      };
    default:
      return state;
  }
}

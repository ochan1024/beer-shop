export interface UIState {
  isLoaderVisible: boolean;
}

export const SHOW_LOADER = "SHOW_LOADER";
export const HIDE_LOADER = "HIDE_LOADER";

interface ShowLoader {
  type: typeof SHOW_LOADER;
}

interface HideLoader {
  type: typeof HIDE_LOADER;
}

export type UIActionTypes = ShowLoader | HideLoader;

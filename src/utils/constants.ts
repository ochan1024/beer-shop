import * as Icon from '../components/Icon'

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
export const USE_PROD =
  process.env.NODE_ENV === "production" ||
  process.env.REACT_APP_DEV_ENV === "production";

export const API_URL = USE_PROD
  ? "http://beer.youngchanje.com/api"
  : "http://localhost:3001/api";

export const Colors = {
  white: "#ffffff",
  grey100: "#f2f3f7",
  grey200: "#ebebed",
  grey300: "#dcdce0",
  grey500: "#95959e",
  grey600: "#768399",
  grey700: "#6e6e78",
  grey800: "#3c3c42",
  greyOpacity10: "rgba(0, 0, 0, 0.1)",
  blue100: "#c9d5f3",
  blue400: "#4e7bfa",
  blue500: "#3369e8",
  red400: "#ef5350"
};

export { Icon };

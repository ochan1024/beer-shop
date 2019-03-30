import { css } from 'styled-components'

import * as Icon from '../components/Icon'

export const API_URL = "http://localhost:3001/api";
export const Colors = {
  white: "#ffffff",
  grey100: "#f2f3f7",
  grey200: "#ebebed",
  grey500: "#95959e",
  grey600: "#768399",
  grey700: "#6e6e78",
  grey800: "#3c3c42",
  greyOpacity10: "rgba(0, 0, 0, 0.1)",
  blue500: "#3369e8"
};

export const TextStyles = {
  title: css`
    font-size: 20px;
  `,
  buttonText: css`
    font-size: 12px;
    color: ${Colors.white};
  `
};

export { Icon };

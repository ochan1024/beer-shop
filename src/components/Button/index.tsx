import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Colors } from '../../utils/constants'

const secondaryStyle = css`
  background-color: ${Colors.grey200};
  color: ${Colors.grey800};
`;

const toggledStyle = css`
  background-color: transparent;
  color: ${Colors.blue400};
  border: solid 1px ${Colors.blue100};
`;

type ButtonType = "primary" | "secondary";

interface OwnProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  toggled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
  children?: ReactElement | string | number;
  to?: string;
  buttonType?: ButtonType;
}

export default class Button extends React.PureComponent<OwnProps> {
  public render() {
    const { to } = this.props;

    return to ? (
      <Link to={to} style={{ textDecoration: "none" }}>
        {this.renderContainer()}
      </Link>
    ) : (
      this.renderContainer()
    );
  }
  private renderContainer = () => {
    const {
      onClick,
      style,
      disabled,
      children,
      isLoading,
      toggled,
      buttonType
    } = this.props;
    return (
      <Container
        onClick={onClick}
        style={style}
        disabled={disabled || isLoading}
        toggled={toggled}
        buttonType={buttonType}
      >
        {children}
      </Container>
    );
  };
}

interface ButtonContainerProps {
  toggled?: boolean;
  isLoading?: boolean;
  buttonType?: ButtonType;
}

const Container = styled.button<ButtonContainerProps>`
  border-radius: 4px;
  min-width: 44px;
  min-height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: 12px;
  background-color: ${Colors.blue500};
  color: ${Colors.white};

  ${props =>
    props.toggled
      ? toggledStyle
      : props.buttonType === "secondary"
      ? secondaryStyle
      : ""}

  ${css`
    &:hover {
      opacity: 0.9;
      text-decoration: none;
    }

    &:disabled {
      cursor: not-allowed;
      background-color: ${Colors.grey300};
      color: ${Colors.grey600};
    }
  `};
`;

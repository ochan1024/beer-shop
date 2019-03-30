import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { Colors } from '../../utils/constants'

interface OwnProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: React.CSSProperties;
  children?: ReactElement | string | number;
  to?: string;
}

export default class Button extends React.PureComponent<OwnProps> {
  public render() {
    const { onClick, style, disabled, children, isLoading, to } = this.props;

    return to ? (
      <Link to={to} style={{ textDecoration: "none" }}>
        <Container
          onClick={onClick}
          style={style}
          disabled={disabled || isLoading}
        >
          {children}
        </Container>
      </Link>
    ) : (
      <Container
        onClick={onClick}
        style={style}
        disabled={disabled || isLoading}
      >
        {children}
      </Container>
    );
  }
}

const Container = styled.button`
  ${css`
    border-radius: 4px;
    min-width: 44px;
    min-height: 28px;
    background-color: ${Colors.blue500};
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 12px;
    color: ${Colors.white};

    &:hover {
      opacity: 0.9;
      text-decoration: none;
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.8;
    }
  `};
`;

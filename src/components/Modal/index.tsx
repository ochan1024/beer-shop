import React, { ReactElement } from 'react'
import styled, { css } from 'styled-components'

interface OwnProps {
  children?: ReactElement | string | number;
  isVisible?: boolean;
}
export default class Modal extends React.PureComponent<OwnProps> {
  public render() {
    const { children, isVisible } = this.props;

    return <Container isVisible={isVisible}>{children}</Container>;
  }
}

const Container = styled.div<{ isVisible?: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  ${props =>
    props.isVisible
      ? css`
          visibility: visible;
          opacity: 1;
          transition: visibility 0s linear 0s, opacity 300ms;
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transition: visibility 0s linear 300ms, opacity 300ms;
        `}
`;

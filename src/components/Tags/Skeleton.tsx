import React from 'react'
import styled from 'styled-components'

import Button from '../Button'

export default class TagsSkeleton extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Button isLoading />
        <EmptyMargin />
        <Button isLoading />
        <EmptyMargin />
        <Button isLoading />
        <EmptyMargin />
        <Button isLoading />
        <EmptyMargin />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-bottom: 12px;
`;

const EmptyMargin = styled.div`
  width: 8px;
`;

import React from 'react'
import styled from 'styled-components'

import { Beer } from '../../store/beers/types'
import { Colors } from '../../utils/constants'
import Button from '../Button'

interface OwnProps {
  beer: Beer;
}

export default class BeerCard extends React.PureComponent<OwnProps> {
  public render() {
    const {
      beer: { name }
    } = this.props;

    return (
      <Container>
        <TopCotainer>{name}</TopCotainer>
        <BottomContainer>
          <Button>담기</Button>
        </BottomContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: ${Colors.white};
  border-radius: 4px;
  box-shadow: 0 1px 3px 0 ${Colors.greyOpacity10};
`;

const TopCotainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

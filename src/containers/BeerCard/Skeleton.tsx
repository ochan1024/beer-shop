import React from 'react'
import Skeleton from 'react-loading-skeleton'
import styled from 'styled-components'

import Button from '../../components/Button'
import { Colors } from '../../utils/constants'

export default class BeerCardSkeleton extends React.PureComponent {
  public render() {
    return (
      <Container>
        <TopCotainer>
          <Skeleton width={"56px"} height={"80px"} />
          <InfoContainer>
            <Title>
              <Skeleton />
            </Title>
            <TagsText>
              <Skeleton />
            </TagsText>
            <PriceContainer>
              <Skeleton />
            </PriceContainer>
            <StockContainer>
              <Skeleton />
            </StockContainer>
          </InfoContainer>
        </TopCotainer>
        <BottomContainer>
          <Button isLoading />
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
  margin-bottom: 12px;
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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const Title = styled.div`
  width: 34px;
  height: 20px;
`;

const TagsText = styled.div`
  width: 112px;
  height: 15px;
  margin-top: 2px;
`;

const PriceContainer = styled.div`
  width: 60px;
  height: 19px;
  margin-top: 6px;
`;

const StockContainer = styled.div`
  width: 40px;
  height: 17px;
  margin-top: 6px;
`;

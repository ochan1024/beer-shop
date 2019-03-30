import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '../../store'
import { Beer } from '../../store/beers/types'
import { addCartItem, removeCartItem } from '../../store/cart/actions'
import commaNumber from '../../utils/commaNumber'
import { Colors } from '../../utils/constants'
import Button from '../Button'
import BeerImage from './Image'

interface OwnProps {
  beer: Beer;
}

type Props = Readonly<ReturnType<typeof mergeProps>>;

class BeerCard extends React.PureComponent<Props> {
  get tagNames() {
    return this.props.beer.tags.map(({ name }) => name).join(", ");
  }
  get stockLeft() {
    const {
      beer: { stock },
      cartItemCount
    } = this.props;
    return stock - cartItemCount;
  }

  public render() {
    const {
      beer: { name, image, price }
    } = this.props;

    return (
      <Container>
        <TopCotainer>
          <BeerImage src={image} />
          <InfoContainer>
            <Title>{name}</Title>
            <TagsText>{this.tagNames}</TagsText>
            <PriceContainer>
              <PriceNumber>{commaNumber(price)}</PriceNumber>
              <PriceUnitText>원</PriceUnitText>
            </PriceContainer>
            <StockContainer>
              <StockText>재고</StockText>
              <StockNumber>{this.stockLeft}</StockNumber>
            </StockContainer>
          </InfoContainer>
        </TopCotainer>
        <BottomContainer>
          <Button onClick={this.handleAddItem}>담기</Button>
        </BottomContainer>
      </Container>
    );
  }

  private handleAddItem = () => {
    const { addCartItem, beer, cartItemCount } = this.props;
    const addCount = 1;

    if (cartItemCount + addCount > beer.stock) {
      return;
    }

    addCartItem(beer.id, addCount);
  };
}

const mapStateToProps = (state: AppState, props: OwnProps) => {
  const cartItem = state.cartReducer.cartItems.find(
    ({ id }) => id === props.beer.id
  );
  return {
    cartItemCount: cartItem ? cartItem.count : 0
  };
};

const mapDispatchToProps = {
  addCartItem,
  removeCartItem
};

const mergeProps = (
  stateProps: ReturnType<typeof mapStateToProps>,
  dispatchProps: typeof mapDispatchToProps,
  ownProps: OwnProps
) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(BeerCard);

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

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

const Title = styled.div`
  font-size: 18px;
  color: ${Colors.grey800};
`;

const TagsText = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: ${Colors.grey500};
  margin-top: 2px;
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 6px;
`;

const PriceNumber = styled.span`
  font-size: 16px;
  color: ${Colors.grey600};
  margin-right: 1px;
`;

const PriceUnitText = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: ${Colors.grey800};
`;

const StockContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin-top: 6px;
`;

const StockText = styled.span`
  font-size: 14px;
  color: ${Colors.grey700};
  margin-right: 4px;
`;

const StockNumber = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${Colors.grey800};
`;

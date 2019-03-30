import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import Button from '../../components/Button'
import { AppState } from '../../store'
import { fetchPurchase } from '../../store/purchase/actions'
import commaNumber from '../../utils/commaNumber'
import { Colors } from '../../utils/constants'

const buttonStyle: React.CSSProperties = {
  width: "100%",
  height: "50px",
  fontSize: "20px",
  marginTop: "16px"
};

type Props = Readonly<ReturnType<typeof mergeProps>>;

class CartFooter extends React.PureComponent<Props> {
  get totalCount() {
    const { cartItems } = this.props;
    return cartItems.reduce((acc, cur) => acc + cur.count, 0);
  }
  get totalPrice() {
    const { cartItems, beerMap } = this.props;
    return cartItems.reduce(
      (acc, cur) => acc + beerMap[cur.id].price * cur.count,
      0
    );
  }

  public render() {
    const { cartItems, isLoadingPurchase } = this.props;

    if (cartItems.length === 0) {
      return null;
    }

    return (
      <Container>
        <PurchaseText>
          총 구매수량 <PurchaseNumber>{this.totalCount}</PurchaseNumber> 개
        </PurchaseText>
        <PurchaseText>
          총 결제금액{" "}
          <PurchaseNumber>{commaNumber(this.totalPrice)}</PurchaseNumber> 원
        </PurchaseText>
        <Button
          style={buttonStyle}
          onClick={this.handlePurchase}
          isLoading={isLoadingPurchase}
        >
          구매하기
        </Button>
      </Container>
    );
  }

  private handlePurchase = async () => {
    const { fetchPurchase, cartItems } = this.props;
    const result = await fetchPurchase(cartItems);
    console.log("구매 결과", result);
  };
}

const mapStateToProps = (state: AppState) => ({
  cartItems: state.cartReducer.cartItems,
  beerMap: state.beersReducer.beerMap,
  isLoadingPurchase: state.purchaseReducer.isLoadingPurchase
});

const mapDispatchToProps = {
  fetchPurchase
};

const mergeProps = (
  stateProps: ReturnType<typeof mapStateToProps>,
  dispatchProps: typeof mapDispatchToProps
) => ({
  ...stateProps,
  ...dispatchProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CartFooter);

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 32px 12px;
  background: linear-gradient(
    rgba(242, 243, 247, 0.1),
    rgba(242, 243, 247, 0.9),
    rgba(242, 243, 247, 1)
  );
`;

const PurchaseText = styled.span`
  font-size: 20px;
  font-weight: 400;
  color: ${Colors.grey600};
  margin-top: 4px;
`;

const PurchaseNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.grey600};
`;

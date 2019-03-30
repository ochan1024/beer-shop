import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '../../store'
import { fetchBeers } from '../../store/beers/actions'
import { addCartItem, removeCartItem } from '../../store/cart/actions'

type Props = Readonly<ReturnType<typeof mergeProps>>;

class CartPage extends React.PureComponent<Props> {
  public componentDidMount() {
    const { beers, fetchBeers, isLoadingBeers } = this.props;
    if (beers.length === 0 && !isLoadingBeers) {
      fetchBeers();
    }
  }

  public render() {
    const { cartItems } = this.props;

    return <Container>{cartItems.length === 0 ? <></> : <></>}</Container>;
  }
}

const mapStateToProps = (state: AppState) => ({
  cartItems: state.cartReducer.cartItems,
  beers: state.beersReducer.beers,
  isLoadingBeers: state.beersReducer.isLoadingBeers
});

const mapDispatchToProps = {
  addCartItem,
  removeCartItem,
  fetchBeers
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
)(CartPage);

const Container = styled.div`
  padding: 0 12px;
`;

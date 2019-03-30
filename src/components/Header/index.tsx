import React from 'react'
import { connect } from 'react-redux'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { AppState } from '../../store'
import { Colors, Icon } from '../../utils/constants'

type Props = Readonly<RouteComponentProps & ReturnType<typeof mapStateToProps>>;

class Header extends React.PureComponent<Props> {
  public render() {
    const {
      location: { pathname },
      cartItemLength
    } = this.props;

    return (
      <Container>
        <Title>맥주담기</Title>
        <ButttonsContainer>
          <Link to={"/beers"}>
            <Icon.List
              style={{ marginRight: "14px" }}
              fillColor={
                pathname === "/beers" ? Colors.blue500 : Colors.grey700
              }
            />
          </Link>
          <Link to={"/cart"}>
            <Icon.Cart
              fillColor={pathname === "/cart" ? Colors.blue500 : Colors.grey700}
            />
          </Link>
          {cartItemLength > 0 && (
            <Badge>
              <BadgeText>{cartItemLength}</BadgeText>
            </Badge>
          )}
        </ButttonsContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  cartItemLength: state.cartReducer.cartItems.length
});

export default withRouter(connect(mapStateToProps)(Header));

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.white};
  box-shadow: 0 1px 2px 0 ${Colors.greyOpacity10};
  padding: 0 16px;
`;

const ButttonsContainer = styled.div`
  position: relative;
  padding-top: 4px;
`;

const Title = styled.span`
  font-size: 20px;
  color: ${Colors.grey800};
`;

const Badge = styled.div`
  position: absolute;
  top: -3px;
  right: -9px;
  height: 18px;
  background-color: ${Colors.red400};
  border-radius: 100%;
  padding: 0 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BadgeText = styled.span`
  font-size: 10px;
  color: ${Colors.white};
`;

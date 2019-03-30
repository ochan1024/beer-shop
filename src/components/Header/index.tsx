import React from 'react'
import { Link, RouteComponentProps, withRouter } from 'react-router-dom'
import styled from 'styled-components'

import { Colors, Icon } from '../../utils/constants'

class Header extends React.PureComponent<RouteComponentProps> {
  public render() {
    const {
      location: { pathname }
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
        </ButttonsContainer>
      </Container>
    );
  }
}

export default withRouter((props: RouteComponentProps) => (
  <Header {...props} />
));

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
  padding-top: 4px;
`;

const Title = styled.span`
  font-size: 20px;
  color: ${Colors.grey800};
`;

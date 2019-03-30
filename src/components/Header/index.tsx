import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Colors, Icon } from '../../utils/constants'

export default class Header extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Title>맥주담기</Title>
        <ButttonsContainer>
          <Link to={"/beers"}>
            <Icon.List style={{ marginRight: "14px" }} />
          </Link>
          <Link to={"/cart"}>
            <Icon.Cart />
          </Link>
        </ButttonsContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.white};
  box-shadow: 0 1px 2px 0 ${Colors.greyOpacity10};
  padding: 0 16px;
  margin-bottom: 12px;
`;

const ButttonsContainer = styled.div`
  padding-top: 4px;
`;

const Title = styled.span`
  font-size: 20px;
  color: ${Colors.grey800};
`;

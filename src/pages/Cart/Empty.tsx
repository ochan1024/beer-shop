import React from 'react'
import styled from 'styled-components'

import Button from '../../components/Button'
import { Colors, Icon } from '../../utils/constants'

const ButtonStyle = { width: "164px", height: "30px", marginTop: "16px" };

export default class EmptyCart extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Icon.Bag size={60} />
        <Title>카트가 비었습니다</Title>
        <SubTitle>
          목록에서 원하는 맥주를 <br /> 카트에 담아보세요.
        </SubTitle>

        <Button to="/beers" style={ButtonStyle}>
          목록으로 가기
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 58px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.grey700};
  margin-top: 20px;
`;

const SubTitle = styled.span`
  font-size: 14px;
  color: ${Colors.grey500};
  margin-top: 12px;
  text-align: center;
`;

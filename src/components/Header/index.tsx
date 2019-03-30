import React from 'react'
import styled from 'styled-components'

import { Colors, Icon, TextStyles } from '../../utils/constants'

export default class Header extends React.PureComponent {
  public render() {
    return (
      <Container>
        <Title>맥주담기</Title>
        <ButttonsContainer>
          <Icon.List style={{ marginRight: "14px" }} />
          <Icon.Cart />
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
  ${TextStyles.title};
  color: ${Colors.grey800};
`;

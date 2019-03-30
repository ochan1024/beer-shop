import React from 'react'
import styled from 'styled-components'

import { Colors } from '../../utils/constants'

interface State {
  isImageLoaded: boolean;
}
type Props = React.ImgHTMLAttributes<any>;

export default class BeerImage extends React.PureComponent<Props> {
  public readonly state = {
    isImageLoaded: false
  };

  public render() {
    const { src, alt } = this.props;
    const { isImageLoaded } = this.state;

    return (
      <Container>
        {!isImageLoaded || !src ? <PreviewImage /> : null}
        <Image alt={alt} src={src} onLoad={this.handleLoadImage} />
      </Container>
    );
  }

  private handleLoadImage = () => {
    this.setState({
      isImageLoaded: true
    });
  };
}

const Container = styled.div`
  width: 56px;
  height: 80px;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.1s linear;
  border: solid 1px ${Colors.grey200};
`;

const PreviewImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.1s linear;
  background-color: ${Colors.grey200};
`;

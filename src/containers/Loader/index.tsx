import React from 'react'
import Lottie, { Options as LottieOptions } from 'react-lottie'
import { connect } from 'react-redux'

import Modal from '../../components/Modal'
import { AppState } from '../../store'
import { hideLoader } from '../../store/ui/actions'
import * as animationData from './loader.json'

const lottieOptions: LottieOptions = {
  loop: true,
  autoplay: true,
  animationData: (animationData as any).default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

type Props = Readonly<ReturnType<typeof mergeProps>>;

class Loader extends React.PureComponent<Props> {
  public render() {
    const { isLoaderVisible } = this.props;

    return (
      <Modal isVisible={isLoaderVisible}>
        <Lottie options={lottieOptions} width={400} height={400} />
      </Modal>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoaderVisible: state.UIReducer.isLoaderVisible
});

const mapDispatchToProps = {
  hideLoader
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
)(Loader);

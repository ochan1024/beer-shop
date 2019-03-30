import React from 'react'
import { connect } from 'react-redux'

import { AppState } from '../../store'
import { fetchBeers } from '../../store/beers/actions'

type Props = Readonly<ReturnType<typeof mergeProps>>;

class BeersPage extends React.PureComponent<Props> {
  public componentDidMount() {
    const { fetchBeers, beers } = this.props;
    if (beers.length === 0) {
      fetchBeers();
    }
  }
  public render() {
    const { beers } = this.props;

    return (
      <>
        beer list
        {beers.map(({ name }) => (
          <>{name}</>
        ))}
      </>
    );
  }
}
const mapStateToProps = (state: AppState) => ({
  beers: state.beersReducer.beers
});

const mapDispatchToProps = {
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
)(BeersPage);

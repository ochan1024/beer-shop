import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import BeerCard from '../../components/BeerCard'
import BeerCardSkeleton from '../../components/BeerCard/Skeleton'
import { AppState } from '../../store'
import { fetchBeers } from '../../store/beers/actions'

type Props = Readonly<ReturnType<typeof mergeProps>>;

class BeersPage extends React.PureComponent<Props> {
  public componentDidMount() {
    const { fetchBeers, beers, isLoadingBeers } = this.props;
    if (beers.length === 0 && !isLoadingBeers) {
      fetchBeers();
    }
  }
  public render() {
    const { beers, isLoadingBeers } = this.props;

    if (isLoadingBeers) {
      return (
        <Container>
          <BeerCardSkeleton />
          <BeerCardSkeleton />
          <BeerCardSkeleton />
        </Container>
      );
    }

    return (
      <Container>
        {beers.map(beer => (
          <BeerCard key={beer.id} beer={beer} />
        ))}
      </Container>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  beers: state.beersReducer.beers,
  isLoadingBeers: state.beersReducer.isLoadingBeers
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

const Container = styled.div`
  padding: 0 12px;
`;

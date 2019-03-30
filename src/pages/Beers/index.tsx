import React from 'react'
import { connect } from 'react-redux'
import styled, { css } from 'styled-components'

import BeerCard from '../../containers/BeerCard'
import BeerCardSkeleton from '../../containers/BeerCard/Skeleton'
import Tags from '../../containers/Tags'
import { AppState } from '../../store'
import { fetchBeers, increaseLimit } from '../../store/beers/actions'
import { Colors } from '../../utils/constants'

type Props = Readonly<ReturnType<typeof mergeProps>>;

class BeersPage extends React.PureComponent<Props> {
  get paginatedAndFilteredBeers() {
    const { userSelectedTags, limit, beers } = this.props;

    if (Object.keys(userSelectedTags).length === 0) {
      // no tags selected
      return beers.slice(0, limit);
    }

    return beers
      .map(beer => {
        const tagCount = beer.tags.reduce(
          (acc, cur) => (userSelectedTags[cur.key] ? acc + 1 : acc),
          0
        );
        return {
          ...beer,
          tagCount
        };
      })
      .sort((a, b) => b.tagCount - a.tagCount)
      .slice(0, limit);
  }

  get shouldShowLoadMore() {
    const { beers, limit } = this.props;
    return beers.length > limit;
  }

  public componentDidMount() {
    const { fetchBeers, beers, isLoadingBeers } = this.props;

    if (beers.length === 0 && !isLoadingBeers) {
      fetchBeers();
    }
  }

  public render() {
    const { isLoadingBeers } = this.props;

    return (
      <Container>
        <Tags />
        {isLoadingBeers ? (
          <>
            <BeerCardSkeleton />
            <BeerCardSkeleton />
            <BeerCardSkeleton />
          </>
        ) : (
          this.paginatedAndFilteredBeers.map(({ id }) => (
            <BeerCard key={id} id={id} />
          ))
        )}

        {this.shouldShowLoadMore && (
          <BottomContainer>
            <LoadMoreButton onClick={this.handleLoadMore}>
              <LoadMoreText>더보기 +</LoadMoreText>
            </LoadMoreButton>
          </BottomContainer>
        )}
      </Container>
    );
  }

  private handleLoadMore = () => {
    this.props.increaseLimit();
  };
}

const mapStateToProps = (state: AppState) => ({
  beers: state.beersReducer.beers,
  isLoadingBeers: state.beersReducer.isLoadingBeers,
  limit: state.beersReducer.limit,
  userSelectedTags: state.tagsReducer.userSelectedTags
});

const mapDispatchToProps = {
  fetchBeers,
  increaseLimit
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

const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const LoadMoreButton = styled.button`
  width: 82px;
  height: 40px;
  background-color: ${Colors.white};
  border: none;
  outline: none;
  box-shadow: 0 1px 3px 0 ${Colors.greyOpacity10};
  border-radius: 18px;

  ${css`
    &:hover {
      opacity: 0.9;
      text-decoration: none;
    }
  `}
`;

const LoadMoreText = styled.span`
  font-size: 15px;
  font-weight: bold;
  color: ${Colors.grey500};
`;

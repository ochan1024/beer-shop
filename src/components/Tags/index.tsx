import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { AppState } from '../../store'
import { fetchTags, toggleUserSelectedTag } from '../../store/tags/actions'
import Button from '../Button'
import TagsSkeleton from './Skeleton'

type Props = Readonly<ReturnType<typeof mergeProps>>;

class Tags extends React.PureComponent<Props> {
  public componentDidMount() {
    const { tags, isLoadingTags, fetchTags } = this.props;

    if (tags.length === 0 && !isLoadingTags) {
      fetchTags();
    }
  }

  public render() {
    const { tags, isLoadingTags, userSelectedTags } = this.props;

    return (
      <Container>
        {isLoadingTags ? (
          <TagsSkeleton />
        ) : (
          tags.map(({ name, key }) => (
            <ButtonContainer key={key}>
              <Button
                toggled={userSelectedTags[key]}
                onClick={this.handleClickTag(key)}
              >
                {name}
              </Button>
            </ButtonContainer>
          ))
        )}
      </Container>
    );
  }

  private handleClickTag = (tagKey: string) => () => {
    this.props.toggleUserSelectedTag(tagKey);
  };
}

const mapStateToProps = (state: AppState) => ({
  tags: state.tagsReducer.tags,
  userSelectedTags: state.tagsReducer.userSelectedTags,
  isLoadingTags: state.tagsReducer.isLoadingTags
});

const mapDispatchToProps = {
  fetchTags,
  toggleUserSelectedTag
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
)(Tags);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-bottom: 12px;
`;

const ButtonContainer = styled.div`
  margin-right: 8px;
`;

import React from 'react';
import { CreatePost } from './CreatePost';
import { connect } from 'react-redux';
import { ThreadRouteProps } from '../types/board-types';
import { RootState } from '../reducers/rootReducer';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { getThreadAndReplies } from '../actions/getDataActions';

const mapStateToProps = (store: RootState) => {
  return {
    boardThread: store.threadReducer.thread
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getThreadAndRepliesAction: getThreadAndReplies
    },
    dispatch
  );
};

type ThreadType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ThreadRouteProps;

class ThreadComponent extends React.Component<ThreadType> {
  boardSlug: string;
  threadId: string;

  componentDidMount() {
    this.boardSlug = this.props.match.params.boardSlug;
    this.threadId = this.props.match.params.threadId;

    getThreadAndReplies(this.threadId);
  }

  render() {
    return (
      <div>
        <CreatePost threadId={this.threadId} />
      </div>
    );
  }
}

export const Thread = connect(null, null)(ThreadComponent);

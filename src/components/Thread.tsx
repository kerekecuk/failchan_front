import React from 'react';
import { CreatePost } from './CreatePost';
import { connect } from 'react-redux';
import { ThreadRouteProps } from '../types/board-types';
import { RootState } from '../reducers/rootReducer';
import { Dispatch, AnyAction, bindActionCreators } from 'redux';
import { getThreadAndReplies } from '../actions/getDataActions';
import { Post } from '../containers/PostView';

const mapStateToProps = (store: RootState) => {
  return {
    boardThread: store.threadReducer
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

    this.props.getThreadAndRepliesAction(this.threadId);
  }

  render() {
    const thread = this.props.boardThread;
    console.log('thread: ', thread);

    const posts = thread.thread?.posts?.map(post => {
      return <Post key={post.id} post={post}></Post>;
    });

    return (
      <div>
        <CreatePost threadId={this.threadId} />
        {thread != null && <div> thread id: {thread.thread?.id}</div> && posts}
      </div>
    );
  }
}

export const Thread = connect(mapStateToProps, mapDispatchToProps)(ThreadComponent);

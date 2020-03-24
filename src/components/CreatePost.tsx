import * as React from 'react';
import { createPost } from '../actions/createDataActions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      createPostAction: createPost
    },
    dispatch
  );
};

interface ICreatePost {
  threadId: string;
}

type TCreatePostProps = ReturnType<typeof mapDispatchToProps> & ICreatePost;

class CreatePostComponent extends React.Component<TCreatePostProps> {
  threadText: string;

  handlePostText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.threadText = e.target.value;
  };

  onClickBtn = () => {
    let { threadId } = this.props;
    this.props.createPostAction(threadId, this.threadText);
  };

  render() {
    return (
      <div>
        <textarea id="createpost" name="postText" rows={10} onChange={this.handlePostText}></textarea>
        <button id="createpostbutton" onClick={this.onClickBtn}>
          add post
        </button>
      </div>
    );
  }
}

export const CreatePost = connect(null, mapDispatchToProps)(CreatePostComponent);

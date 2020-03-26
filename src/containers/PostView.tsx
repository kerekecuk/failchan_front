import * as React from 'react';
import { TPost } from '../types/board-types';
import { Link } from 'react-router-dom';

type PostPros = {
  post: TPost;
};

export class Post extends React.Component<PostPros, {}> {
  render() {
    const post = this.props.post;

    return (
      <div className="postView">
        <hr />
        <div>
          id: {post.id}, created at: {post.createdAt}, updated at: {post.updatedAt}
        </div>
        <hr />
        <div>{post.body}</div>
        <hr />
        <hr />
        <hr />
      </div>
    );
  }
}

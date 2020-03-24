import * as React from 'react';
import { TThread } from '../types/board-types';
import { Link } from 'react-router-dom';

type BoardsProps = {
  item: TThread;
  boardSlug: string;
};

export class ThreadPreview extends React.Component<BoardsProps, {}> {
  render() {
    const thread = this.props.item;

    /* failchan.ru/threads/1 */

    const postsComponent = thread.posts.map(post => {
      return <div key={post.id}>Post!!!</div>;
    });

    return (
      <div className="threadHeader">
        <hr />
        <Link to={this.props.boardSlug + '/threads/' + String(thread.id)}>{thread.id}</Link>
        <div>
          created at: {thread.createdAt}, updated at: {thread.updatedAt}
        </div>
        <hr />
        {postsComponent}
        <hr />
        <hr />
        <hr />
      </div>
    );
  }
}

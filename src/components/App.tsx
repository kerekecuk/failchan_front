import * as React from 'react';
import { BoardHeader } from './BoardHeader';
import { PostThread } from './PostThread';
import { Threads } from './Threads';
import { BoardBottom } from './BoardBottom';

export class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="main">
        <BoardHeader />
        <PostThread />
        <Threads />
        <BoardBottom />
      </div>
    );
  }
}

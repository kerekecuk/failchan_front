import * as React from 'react';
import { BoardHeader } from './components/BoardHeader';
import { PostThread } from './components/PostThread';
import { Threads } from './containers/Threads';
import { BoardBottom } from './components/BoardBottom';

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

import React from 'react';
import { BoardHeader } from './components/BoardHeader';
import { PostThread } from './components/PostThread';
import { Threads } from './components/Threads';
import { BoardBottom } from './components/BoardBottom';
import { BoardsStateType } from './reducers/boardsReducer';

export class App extends React.Component<{}, BoardsStateType> {
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

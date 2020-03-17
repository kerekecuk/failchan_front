import React from 'react';
import { BoardHeader } from './components/BoardHeader';
import { PostThread } from './components/PostThread';
import { Threads } from './components/Threads';
import { BoardBottom } from './components/BoardBottom';
import { BoardsStateType } from './reducers/boardsReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export class App extends React.Component<{}, BoardsStateType> {
  render() {
    return (
      <div className="main">
        <Router>
          <BoardHeader />
          <Route exact={true} path="/:boardSlug" component={PostThread} />
          <Route exact={true} path="/:boardSlug" component={Threads} />
          <BoardBottom />
        </Router>
      </div>
    );
  }
}

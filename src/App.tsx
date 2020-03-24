import React from 'react';
import { BoardHeader } from './components/BoardHeader';
import { CreateThread } from './components/CreateThread';
import { Threads } from './components/Threads';
import { BoardBottom } from './containers/BoardBottom';
import { BoardsStateType } from './reducers/boardsReducer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Thread } from './components/Thread';

export class App extends React.Component<{}, BoardsStateType> {
  render() {
    return (
      <div className="main">
        <Router>
          <BoardHeader />
          <Route exact={true} path="/:boardSlug" component={CreateThread} />
          <Route exact={true} path="/:boardSlug" component={Threads} />
          <Route exact={true} path="/:boardSlug/threads/:threadId" component={Thread} />
          <BoardBottom />
        </Router>
      </div>
    );
  }
}

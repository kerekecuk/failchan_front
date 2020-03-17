import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { Route } from 'react-router-dom';

const mapStateToProps = (store: RootState) => {
  return {
    boardThreads: store.boardReducer.threads
  };
};

class ThreadsComponent extends React.Component<{}, {}> {
  render() {
    //let jjj =

    return <div>Threads </div>;
  }
}

export const Threads = connect(mapStateToProps)(ThreadsComponent);

import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/rootReducer';

const mapStateToProps = (store: RootState) => {
  return {
    boardThreads: store.boardReducer.threads
  };
};

class ThreadsComponent extends React.Component<{}, {}> {
  render() {
    return <div className="style2">Threads </div>;
  }
}

export const Threads = connect(mapStateToProps)(ThreadsComponent);

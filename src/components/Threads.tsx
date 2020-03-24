import * as React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../reducers/rootReducer';
import { Dispatch, bindActionCreators } from 'redux';
import { getThreads } from '../actions/getDataActions';
import { CreateThreadProps } from '../types/board-types';
import { ThreadPreview } from '../containers/ThreadPreview';

const mapStateToProps = (store: RootState) => {
  return {
    boardThreads: store.boardReducer.threads
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getThreadsAction: getThreads
    },
    dispatch
  );
};

type BoardsProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & CreateThreadProps;

class ThreadsComponent extends React.Component<BoardsProps> {
  _boardSlug: string;

  componentDidMount() {
    const { boardSlug } = this.props.match.params;
    this.props.getThreadsAction(boardSlug);
    this._boardSlug = boardSlug;
  }

  render() {
    const { boardThreads } = this.props;
    const threads = boardThreads.map(boardThread => {
      // делаем массив компонентов превью тредов
      return <ThreadPreview key={boardThread.id} item={boardThread} boardSlug={this._boardSlug} />;
    });

    // выводим их
    return <div>{threads}</div>;
  }
}

export const Threads = connect(mapStateToProps, mapDispatchToProps)(ThreadsComponent);

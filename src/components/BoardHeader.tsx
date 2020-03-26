import * as React from 'react';
import { BoardsStateType } from '../reducers/boardsReducer';
import { getBoards } from '../actions/getDataActions';
import { createBoard } from '../actions/createDataActions';
import { RootState } from '../reducers/rootReducer';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { CreateBoard } from './CreateBoard';
import { Link, Route } from 'react-router-dom';

const mapStateToProps = (store: RootState) => {
  return {
    boards: store.getBoardsReducer
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getBoardsAction: getBoards
    },
    dispatch
  );
};

type BoardsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    // label: string;
  };

class BoardHeaderComponent extends React.Component<BoardsProps> {
  componentDidMount() {
    this.props.getBoardsAction();
  }

  render() {
    let { boards } = this.props.boards;
    let routes;

    console.log('boards: ', boards);

    /* TODO падает на любой чих */
    try {
      routes = boards?.map(board => {
        return (
          <div key={board.slug}>
            <Link to={board.slug}>
              {board.slug} - {board.name}
            </Link>
          </div>
        );
      });
    } catch (error) {
      routes = <p>{boards?.toString()}</p>;
    }

    return (
      <div>
        {routes}
        <Route exact={true} path="/" component={CreateBoard} />
      </div>
    );
  }
}

export const BoardHeader = connect(mapStateToProps, mapDispatchToProps)(BoardHeaderComponent);

import * as React from 'react';
import { BoardsStateType } from '../reducers/boardsReducer';
import { getBoards, createBoard } from '../actions/getDataActions';
import { RootState } from '../reducers/rootReducer';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { Board } from '../types/board-types';
import { CreateBoard } from './CreateBoardElement';

const mapStateToProps = (store: RootState) => {
  return {
    boards: store.getBoardsReducer
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      getBoardsAction: getBoards,
      createBoardAction: createBoard
    },
    dispatch
  );
};

type BoardsProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps> & {
    // label: string;
  };

class BoardHeaderComponent extends React.Component<BoardsProps, BoardsStateType> {
  componentDidMount() {
    this.props.getBoardsAction();
  }

  render() {
    let boards = this.props.boards.boards;
    let routes;

    /* TODO говно лютое, падает на любой чих */
    try {
      routes = boards?.map(board => {
        return (
          <div>
            <a>
              {board.slug} - {board.name}
            </a>
          </div>
        );
      });
    } catch (error) {
      routes = <p>{boards?.toString()}</p>;
    }

    return (
      <div>
        {routes}
        <CreateBoard />
      </div>
    );
  }
}

export const BoardHeader = connect(mapStateToProps, mapDispatchToProps)(BoardHeaderComponent);

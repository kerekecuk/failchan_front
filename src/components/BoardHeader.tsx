import * as React from 'react';
import { BoardsStateType } from '../reducers/boardsReducer';
import { getBoards } from '../actions/getDataActions';
import { RootState } from '../reducers/rootReducer';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const mapStateToProps = (store: RootState) => {
  return {
    boards: store.boardReducer
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
    //label: string;
  };

class BoardHeaderComponent extends React.Component<
  BoardsProps,
  BoardsStateType
> {
  componentDidMount() {
    this.props.getBoardsAction();
  }

  render() {
    return <div className="style2">Board header!</div>;
  }
}

export const BoardHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardHeaderComponent);

import * as React from 'react';
import { createBoard } from '../actions/createDataActions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      createBoardAction: createBoard
    },
    dispatch
  );
};

type PostTreadProps = ReturnType<typeof mapDispatchToProps>;

class PostThreadComponent extends React.Component<PostTreadProps> {
  boardName: string;
  boardSlug: string;

  handleChangeName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.boardName = e.target.value;
  };
  handleChangeSlug = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.boardSlug = e.target.value;
  };

  onClickBtn = () => {
    this.props.createBoardAction(this.boardName, this.boardSlug);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          id="createboardname"
          name="boardName"
          placeholder="input board name"
          onChange={this.handleChangeName}
        ></input>
        <input
          type="text"
          id="createboardslug"
          name="boardSlug"
          placeholder="input board slug"
          onChange={this.handleChangeSlug}
        ></input>
        <button id="createboardbutton" onClick={this.onClickBtn}>
          >Create board!
        </button>
      </div>
    );
  }
}

export const PostThread = connect(null, mapDispatchToProps)(PostThreadComponent);

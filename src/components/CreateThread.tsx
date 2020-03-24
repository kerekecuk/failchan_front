import * as React from 'react';
import { createThread } from '../actions/createDataActions';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { CreateThreadProps } from '../types/board-types';

const mapDispatchToProps = (dispatch: Dispatch) => {
  return bindActionCreators(
    {
      createThreadAction: createThread
    },
    dispatch
  );
};

type CreateTreadProps = ReturnType<typeof mapDispatchToProps> & CreateThreadProps;

class CreateThreadComponent extends React.Component<CreateTreadProps> {
  threadText: string;

  handleThreadText = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.threadText = e.target.value;
  };

  onClickBtn = () => {
    let { boardSlug } = this.props.match.params;
    this.props.createThreadAction(boardSlug, this.threadText);
  };

  render() {
    return (
      <div>
        <textarea id="createthread" name="threadText" rows={10} onChange={this.handleThreadText}></textarea>
        <button id="createthreadbutton" onClick={this.onClickBtn}>
          Create thread!
        </button>
      </div>
    );
  }
}

export const CreateThread = connect(null, mapDispatchToProps)(CreateThreadComponent);

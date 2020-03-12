import {
  GET_BOARDS_REQUEST,
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAIL
} from '../actions/getDataActions';
import { Thread, Board } from '../types/board-types';

export type BoardsStateType = {
  boards: Array<Board> | undefined;
  isFetching: boolean;
  error: string | undefined;
};

const initialState = {
  boards: [] as Array<Board> | undefined,
  isFetching: true,
  error: ''
};

export type getBoardsActionType = {
  type:
    | typeof GET_BOARDS_REQUEST
    | typeof GET_BOARDS_SUCCESS
    | typeof GET_BOARDS_FAIL;
  payload?: Array<Board>;
  errorMessage?: string;
};

export function boardsReducer(
  state: BoardsStateType = initialState,
  action: getBoardsActionType
): BoardsStateType {
  switch (action.type) {
    case GET_BOARDS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case GET_BOARDS_SUCCESS:
      return {
        ...state,
        boards: action.payload,
        isFetching: false,
        error: ''
      };

    case GET_BOARDS_FAIL:
      return { ...state, error: action.errorMessage, isFetching: false };

    default:
      return state;
  }
}
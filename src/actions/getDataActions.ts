import { Dispatch, AnyAction } from 'redux';
import { getBoardsActionType } from '../reducers/boardsReducer';
import { ThunkAction } from 'redux-thunk';
import { getBoardsDataFromApi, createBoardByApi } from '../types/api';

export const GET_THREADS_REQUEST: String = 'GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS: String = 'GET_THREADS_SUCCESS';
export const GET_THREADS_FAIL: String = 'GET_THREADS_FAIL';
export const GET_BOARDS_REQUEST: String = 'GET_BOARDS_REQUEST';
export const GET_BOARDS_SUCCESS: String = 'GET_BOARDS_SUCCESS';
export const GET_BOARDS_FAIL: String = 'GET_BOARDS_FAIL';
export const CREATE_BOARD_REQUEST: String = 'GET_BOARDS_REQUEST';
export const CREATE_BOARD_SUCCESS: String = 'GET_BOARDS_SUCCESS';
export const CREATE_BOARD_FAIL: String = 'GET_BOARDS_FAIL';

/*
export type getBoardsActionType = {
  type:
    | typeof GET_BOARDS_REQUEST
    | typeof GET_BOARDS_SUCCESS
    | typeof GET_BOARDS_FAIL;
  payload: Array<Board>;
  errorMessage: string;
};
 */
export function getBoards() {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: GET_BOARDS_REQUEST
    });

    getBoardsDataFromApi().then(result => {
      return dispatch({
        type: GET_BOARDS_SUCCESS,
        payload: result
      });
    });
  };
}

export function createBoard(name: String, slug: String) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: CREATE_BOARD_REQUEST
    });

    createBoardByApi(name, slug).then(result => {
      return dispatch({
        type: CREATE_BOARD_SUCCESS,
        payload: result
      });
    });
  };
}

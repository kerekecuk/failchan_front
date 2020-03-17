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

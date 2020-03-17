import { Dispatch, AnyAction } from 'redux';
import { createBoardByApi, createThreadByApi } from '../types/api';

export const CREATE_BOARD_REQUEST: String = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS: String = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAIL: String = 'CREATE_BOARD_FAIL';

export const CREATE_THREAD_REQUEST: String = 'CREATE_THREAD_REQUEST';
export const CREATE_THREAD_SUCCESS: String = 'CREATE_THREAD_SUCCESS';
export const CREATE_THREAD_FAIL: String = 'CREATE_THREAD_FAIL';

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

export function createThread(slug: String, post: String) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: CREATE_THREAD_REQUEST
    });

    createThreadByApi(slug, post).then(result => {
      return dispatch({
        type: CREATE_THREAD_SUCCESS,
        payload: result
      });
    });
  };
}

import { Dispatch, AnyAction } from 'redux';
import { getBoardsActionType } from '../reducers/boardsReducer';
import { ThunkAction } from 'redux-thunk';
import { getBoardsDataFromApi, createBoardByApi, getThreadsByApi, getThreadAndRepliesByApi } from '../types/api';

export const GET_THREADS_REQUEST: string = 'GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS: string = 'GET_THREADS_SUCCESS';
export const GET_THREADS_FAIL: string = 'GET_THREADS_FAIL';
export const GET_BOARDS_REQUEST: string = 'GET_BOARDS_REQUEST';
export const GET_BOARDS_SUCCESS: string = 'GET_BOARDS_SUCCESS';
export const GET_BOARDS_FAIL: string = 'GET_BOARDS_FAIL';
export const GET_THREAD_REQUEST: string = 'GET_THREAD_REQUEST';
export const GET_THREAD_SUCCESS: string = 'GET_THREAD_SUCCESS';
export const GET_THREAD_FAIL: string = 'GET_THREAD_FAIL';

export function getBoards() {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: GET_BOARDS_REQUEST
    });

    getBoardsDataFromApi().then(result => {
      return dispatch({
        type: GET_BOARDS_SUCCESS,
        payload: result.boards
      });
    });
  };
}

export function getThreads(slug: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: GET_THREADS_REQUEST
    });

    getThreadsByApi(slug).then(result => {
      return dispatch({
        type: GET_THREADS_SUCCESS,
        payload: result.threads
      });
    });
  };
}

export function getThreadAndReplies(threadId: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: GET_THREAD_REQUEST
    });

    getThreadAndRepliesByApi(threadId).then(result => {
      return dispatch({
        type: GET_THREAD_SUCCESS,
        payload: result
      });
    });
  };
}

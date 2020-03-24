import { Dispatch, AnyAction } from 'redux';
import { createBoardByApi, createThreadByApi, createPostByApi } from '../types/api';

export const CREATE_BOARD_REQUEST: string = 'CREATE_BOARD_REQUEST';
export const CREATE_BOARD_SUCCESS: string = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAIL: string = 'CREATE_BOARD_FAIL';

export const CREATE_THREAD_REQUEST: string = 'CREATE_THREAD_REQUEST';
export const CREATE_THREAD_SUCCESS: string = 'CREATE_THREAD_SUCCESS';
export const CREATE_THREAD_FAIL: string = 'CREATE_THREAD_FAIL';

export const CREATE_POST_REQUEST: string = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS: string = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAIL: string = 'CREATE_POST_FAIL';

export function createBoard(name: string, slug: string) {
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

export function createThread(slug: string, post: string) {
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

export function createPost(threadId: string, post: string) {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: CREATE_POST_REQUEST
    });

    createPostByApi(threadId, post).then(result => {
      return dispatch({
        type: CREATE_POST_REQUEST,
        payload: result
      });
    });
  };
}

import { Dispatch, AnyAction } from 'redux';
import { getBoardsActionType } from '../reducers/boardsReducer';
import { ThunkAction } from 'redux-thunk';

export const GET_THREADS_REQUEST: String = 'GET_THREADS_REQUEST';
export const GET_THREADS_SUCCESS: String = 'GET_THREADS_SUCCESS';
export const GET_THREADS_FAIL: String = 'GET_THREADS_FAIL';
export const GET_BOARDS_REQUEST: String = 'GET_BOARDS_REQUEST';
export const GET_BOARDS_SUCCESS: String = 'GET_BOARDS_SUCCESS';
export const GET_BOARDS_FAIL: String = 'GET_BOARDS_FAIL';

function getBoardsDataFromApi() {
  const requestStr: string = 'http://91.121.65.105:3000/boards';

  return fetch(requestStr)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    });
}

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
      console.log(result);

      return dispatch({
        type: GET_BOARDS_SUCCESS,
        payload: result
      });
    });
  };
}

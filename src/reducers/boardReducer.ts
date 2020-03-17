import { GET_THREADS_REQUEST, GET_THREADS_SUCCESS, GET_THREADS_FAIL } from '../actions/getDataActions';
import { CREATE_THREAD_REQUEST, CREATE_THREAD_SUCCESS, CREATE_THREAD_FAIL } from '../actions/createDataActions';
import { Thread } from '../types/board-types';

type BoardStateType = {
  threads: Array<Thread>;
  isFetching: boolean;
  error: string;
};

const initialState = {
  threads: [],
  isFetching: true,
  error: ''
};

type getThreadsActionType = {
  type: typeof GET_THREADS_SUCCESS | typeof GET_THREADS_REQUEST | typeof GET_THREADS_FAIL;
  payload: Array<Thread>;
  errorMessage: string;
};

type createThreadActionType = {
  type: typeof CREATE_THREAD_REQUEST | typeof CREATE_THREAD_SUCCESS | typeof CREATE_THREAD_FAIL;
  payload: Array<Thread>;
  errorMessage: string;
};

export function createThreadReducer(
  state: BoardStateType = initialState,
  action: createThreadActionType
): BoardStateType {
  switch (action.type) {
    case CREATE_THREAD_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case CREATE_THREAD_SUCCESS:
      return {
        ...state,
        threads: action.payload,
        isFetching: false,
        error: ''
      };

    case CREATE_THREAD_FAIL:
      return { ...state, error: action.errorMessage, isFetching: false };

    default:
      return state;
  }
}

export function boardReducer(state: BoardStateType = initialState, action: getThreadsActionType): BoardStateType {
  switch (action.type) {
    case GET_THREADS_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case GET_THREADS_SUCCESS:
      return {
        ...state,
        threads: action.payload,
        isFetching: false,
        error: ''
      };

    case GET_THREADS_FAIL:
      return { ...state, error: action.errorMessage, isFetching: false };

    default:
      return state;
  }
}

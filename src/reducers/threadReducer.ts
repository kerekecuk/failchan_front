import { GET_THREAD_REQUEST, GET_THREAD_SUCCESS, GET_THREAD_FAIL } from '../actions/getDataActions';
import { TThread } from '../types/board-types';

type TThreadAndProps = {
  isFetching: boolean;
  error: string;
  thread: TThread | null;
};

const initialState: TThreadAndProps = {
  isFetching: false,
  error: '',
  thread: null
};

type getThreadActionType = {
  type: typeof GET_THREAD_SUCCESS | typeof GET_THREAD_REQUEST | typeof GET_THREAD_FAIL;
  payload: TThread;
  errorMessage: string;
};

export function threadReducer(state: TThreadAndProps = initialState, action: getThreadActionType): TThreadAndProps {
  switch (action.type) {
    case GET_THREAD_REQUEST:
      return {
        ...state,
        isFetching: true,
        error: ''
      };

    case GET_THREAD_SUCCESS:
      return {
        ...state,
        thread: action.payload,
        isFetching: false,
        error: ''
      };

    case GET_THREAD_FAIL:
      return { ...state, error: action.errorMessage, isFetching: false };

    default:
      return state;
  }
}

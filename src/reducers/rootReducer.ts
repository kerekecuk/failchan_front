import { combineReducers } from 'redux';
import { boardReducer, createThreadReducer } from './boardReducer';
import { getBoardsReducer, createBoardReducer } from './boardsReducer';
import { threadReducer } from './threadReducer';

const combineObj = { boardReducer, getBoardsReducer, createBoardReducer, createThreadReducer, threadReducer };

export const rootReducer = combineReducers(combineObj);

export type RootState = ReturnType<typeof rootReducer>;

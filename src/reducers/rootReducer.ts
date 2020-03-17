import { combineReducers } from 'redux';
import { boardReducer, createThreadReducer } from './boardReducer';
import { getBoardsReducer, createBoardReducer } from './boardsReducer';

const combineObj = { boardReducer, getBoardsReducer, createBoardReducer, createThreadReducer };

export const rootReducer = combineReducers(combineObj);

export type RootState = ReturnType<typeof rootReducer>;

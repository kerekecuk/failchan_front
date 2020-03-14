import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';
import { getBoardsReducer, createBoardReducer } from './boardsReducer';

const combineObj = { boardReducer, getBoardsReducer, createBoardReducer };

export const rootReducer = combineReducers(combineObj);

export type RootState = ReturnType<typeof rootReducer>;

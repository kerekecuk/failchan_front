import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';
import { boardsReducer } from './boardsReducer';

const combineObj = { boardReducer, boardsReducer };

export const rootReducer = combineReducers(combineObj);

export type RootState = ReturnType<typeof rootReducer>;

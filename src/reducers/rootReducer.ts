import { combineReducers } from 'redux';
import { boardReducer } from './boardReducer';

const combineObj = { boardReducer };

export const rootReducer = combineReducers(combineObj);

export type RootState = ReturnType<typeof rootReducer>;

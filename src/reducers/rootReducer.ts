import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer
});

export type RootState = ReturnType<typeof rootReducer>;

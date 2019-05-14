import { combineReducers } from 'redux';

import charactersListReducer from "./reducers/characters-list.reducer";

export const Reducers = combineReducers({
  charactersFetch: charactersListReducer
});
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from './storage';
import thunk from 'redux-thunk';
import jobReducer from './reducers/job.slice';
import authReducer from './reducers/auth.slice';
import candidateReducer from './reducers/candidate.slice';

const reducers = combineReducers({
  jobs: jobReducer,
  auth: authReducer,
  candidate: candidateReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['auth']
};

const persistedReducer = persistReducer(persistConfig, reducers);


const rootReducer = (state, action) => {
  if (action.type === 'loggedInData/logout') {
    state = undefined;
  }
  return persistedReducer(state, action);
};

const store = configureStore({
  // reducer: persistedReducer,
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});

export default store;

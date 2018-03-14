import { createStore, combineReducers } from 'redux';
import visuals from '../reducers/visuals/visuals';

const configureStore = () => {
  const store = createStore(
    combineReducers({
      visuals
    })
  );

  return store;
};

export default configureStore;

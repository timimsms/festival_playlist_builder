import { createStore } from 'redux';
import playlistBuilderReducer from '../reducers/playlistBuilderReducer';

const configureStore = (railsProps) => (
  createStore(playlistBuilderReducer, railsProps)
);

export default configureStore;

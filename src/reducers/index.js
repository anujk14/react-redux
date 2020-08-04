import { combineReducers } from 'redux';
import storyReducer from './story';
import archiveReducer from './archive';

// Combines reducers, slicing up the state into sub-states
const rootReducer = combineReducers({
  storyState: storyReducer,
  archiveState: archiveReducer,
});

export default rootReducer;
import { STORIES_ADD } from '../constants/actionTypes';

const INITIAL_STATE = []

const applyAddStories = (state, action) =>
  action.stories;

function storyReducer(state=INITIAL_STATE, action) {
  switch (action.type) {
    case STORIES_ADD: {
      // The following line could have been used, but the author refcommended making a method (applyAddStories)
      // return action.stories;

      return applyAddStories(state, action);
    }

    default: return state;
  }
}

export default storyReducer;
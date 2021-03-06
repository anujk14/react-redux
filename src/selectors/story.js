function isNotArchived(archivedIds) {
  return function (story) {
    return archivedIds.indexOf(story.objectID) === -1;
  };
}

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.stories.filter(isNotArchived(archiveState));
  /*
The above method can also be written as follows in old JS syntax:
function getReadableStories(state) {
  return state.storyState.filter(isNotArchived(state.archiveState));
}
*/

const getFetchError = ({ storyState }) =>
  storyState.error;

export {
  getReadableStories,
  getFetchError,
};  
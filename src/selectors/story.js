function isNotArchived(archivedIds) {
  return function (story) {
    return archivedIds.indexOf(story.objectID) === -1;
  };
}

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.filter(isNotArchived(archiveState));

  /*
The above method can also be written as follows in old JS syntax:
function getReadableStories(state) {
  return state.storyState.filter(isNotArchived(state.archiveState));
}
*/

export {
  getReadableStories,
};  
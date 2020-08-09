import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
  const { query } = action;
  // Fetching of data using 'call' effect of redux-saga
  const result = yield call(fetchStories, query);

  // Using 'put' effect of redux-saga to dispatch action
  yield put(doAddStories(result.hits));
}

export {
  handleFetchStories,
};
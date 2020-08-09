import { call, put } from 'redux-saga/effects';
import { doAddStories, doFetchErrorStories } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
  const { query } = action;

  try{
    // Fetching of data using 'call' effect of redux-saga
    const result = yield call(fetchStories, query);

    // Using 'put' effect of redux-saga to dispatch action
    yield put(doAddStories(result.hits));
  } catch(error) {
    yield put(doFetchErrorStories(error));
  }
}

export {
  handleFetchStories,
};
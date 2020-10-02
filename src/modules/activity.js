import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as activityAPI from '../lib/api/activity';
import { takeLatest } from 'redux-saga/effects';

const [
  READ_ACTIVITY,
  READ_ACTIVITY_SUCCESS,
  READ_ACTIVITY_FAILURE,
] = createRequestActionTypes('activity/READ_ACTIVITY');
const UNLOAD_ACTIVITY = 'activity/UNLOAD_ACTIVITY';

export const readActivity = createAction(READ_ACTIVITY, (id) => id);
export const unloadActivity = createAction(UNLOAD_ACTIVITY);

const readActivitySaga = createRequestSaga(READ_ACTIVITY, activityAPI.readActivity);
export function* activitySaga() {
  yield takeLatest(READ_ACTIVITY, readActivitySaga);
}

const initialState = {
  activity: null,
  error: null,
};

const activity = handleActions(
  {
    [READ_ACTIVITY_SUCCESS]: (state, { payload: activity }) => ({
      ...state,
      activity,
    }),
    [READ_ACTIVITY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_ACTIVITY]: () => initialState,
  },
  initialState
);

export default activity;

import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as activityAPI from '../lib/api/activity';
import { takeLatest } from 'redux-saga/effects';

const [
  LIST_ACTIVITY,
  LIST_ACTIVITY_SUCCESS,
  LIST_ACTIVITY_FAILURE,
] = createRequestActionTypes('activities/LIST_ACTIVITY');

export const listActivity = createAction(LIST_ACTIVITY);

const listActivitySaga = createRequestSaga(LIST_ACTIVITY, activityAPI.listActivity);
export function* activitiesSaga() {
  yield takeLatest(LIST_ACTIVITY, listActivitySaga);
}

const initialState = {
  activities: null,
  error: null,
};

const activities = handleActions(
  {
    [LIST_ACTIVITY_SUCCESS]: (state, { payload: activities }) => ({
      ...state,
      activities,
    }),
    [LIST_ACTIVITY_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default activities;

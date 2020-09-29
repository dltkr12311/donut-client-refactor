import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as activityAPI from '../lib/api/activity';
import { takeLatest } from 'redux-saga/effects';

const CHANGE_FIELD = 'write/CHANGE_FIELD';
const INITIALIZE_FORM = 'write/INITIALIZE_FORM';

const [
  WRITE_ACTIVITY,
  WRITE_ACTIVITY_SUCCESS,
  WRITE_ACTIVITY_FAILURE,
] = createRequestActionTypes('write/WRITE_ACTIVITY');

export const initializeForm = createAction(INITIALIZE_FORM);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));

export const writeActivity = createAction(
  WRITE_ACTIVITY,
  ({ name, intro, participation_cretira, rule }) => ({
    name,
    intro,
    participation_cretira,
    rule,
  })
);

const writeActivitySaga = createRequestSaga(WRITE_ACTIVITY, activityAPI.writeActivity);
export function* writeSaga() {
  yield takeLatest(WRITE_ACTIVITY, writeActivitySaga);
}

const initialState = {
  name: '',
  intro: '',
  participation_cretira: '',
  rule: '',
  activity: null,
  activityError: null,
};

const write = handleActions(
  {
    [INITIALIZE_FORM]: (state) => initialState,
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
    [WRITE_ACTIVITY]: (state) => ({
      ...state,
      activity: null,
      activityError: null,
    }),
    [WRITE_ACTIVITY_SUCCESS]: (state, { payload: activity }) => ({
      ...state,
      activity,
    }),
    [WRITE_ACTIVITY_FAILURE]: (state, { payload: activityError }) => ({
      ...state,
      activityError,
    }),
  },
  initialState
);

export default write;

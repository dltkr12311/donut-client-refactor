import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import activity, { activitySaga } from './activity';
import activities, { activitiesSaga } from './activities';

const rootReducer = combineReducers({
  auth,
  loading,
  user,
  write,
  activity,
  activities,
});

export function* rootSaga() {
  yield all([authSaga(), userSaga(), writeSaga(), activitySaga(), activitiesSaga()]);
}

export default rootReducer;

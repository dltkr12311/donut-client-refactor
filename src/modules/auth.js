import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITALIZE_FORM';

const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
  'auth/REGISTER'
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

export const changeField = createAction(CHANGE_FIELD, ({ form, key, value }) => ({
  form, // register, login
  key, // username, paassword, passwordConfirm
  value, // 실제 바꾸려는 값
}));

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
export const register = createAction(
  REGISTER,
  ({ email, password, username, latlon }) => ({
    email,
    password,
    username,
    latlon,
  })
);
export const login = createAction(LOGIN, ({ email, password }) => ({
  email,
  password,
}));

//사가생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN, loginSaga); //takeLatest 가장 마지막(최근)에 실행된 액션만 핸들링한다. 같이 살행되는 액션은 무시된다.
}

const initialState = {
  register: {
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    latlon: '',
  },
  login: {
    email: '',
    passowrd: '',
  },
  signin: null,
  signinError: null,
  signup: null,
  signupError: null,
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      produce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      signupError: null, // 폼 전환 시 회원 인증 에러 초기화,
      signinError: null,
    }),
    //회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: signup }) => ({
      ...state,
      signupError: null,
      signup,
    }),
    //회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      signupError: error,
    }),
    //로그인 성공
    [LOGIN_SUCCESS]: (state, { payload: signin }) => ({
      ...state,
      signinError: null,
      signin,
    }),
    //로그인 실패
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      signinError: error,
    }),
  },
  initialState
);

export default auth;

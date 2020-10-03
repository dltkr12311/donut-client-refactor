import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../Components/Auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, signin, signinError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    signin: auth.signin,
    signinError: auth.signinError,
    user: user.user,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = form;
    if ([email, password].includes('')) {
      setError('로그인 정보가 올바르지 않습니다');
      return;
    }
    if (password === undefined) {
      setError('비밀번호 정보가 올바르지 않습니다');
      return;
    }
    dispatch(login({ email, password }));
  };

  // 맨 처음 렌더링 후 initalizeForm 액션 생성 함수를 호출함
  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (signinError) {
      console.log('로그인 실패:', signinError);
      setError('로그인 실패');
      return;
    }
    if (signin) {
      console.log('로그인 성공', signin);
      localStorage.setItem('accessToken', signin.accessToken);
      dispatch(check());
    }
  }, [signin, signinError, dispatch]);

  useEffect(() => {
    if (user) {
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);

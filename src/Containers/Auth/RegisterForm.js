import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, register } from '../../modules/auth';
import AuthForm from '../../Components/Auth/AuthForm';
import { withRouter } from 'react-router-dom';

const RegisterForm = ({ history }) => {
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { form, signup, signupError } = useSelector(({ auth }) => ({
    form: auth.register,
    signup: auth.signup,
    signupError: auth.signupError,
  }));

  //클릭시 현재위치 받아오기
  const onClick = (e) => {
    e.preventDefault();
    if (!navigator.geolocation) {
      console.log('위치에러');
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const result = `${latitude},${longitude}`;
        document.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        dispatch(changeField({ form: 'register', key: 'latlon', value: result }));
        console.log(` 경도: ${latitude} 위도: ${longitude}`);
      });
    }
  };

  //인풋 변경 이벤트 핸들러
  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'register',
        key: name,
        value,
      })
    );
  };

  //폼 등록 이벤트 핸들러
  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirm, username, latlon } = form;
    //하나라도 비어 있다면
    if ([email, password, passwordConfirm, username].includes('')) {
      setError('빈 칸을 모두 입력하세요');
      return;
    }
    if (latlon.length <= 0) {
      setError('위치가 설정되지 않았습니다');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다');
      changeField({ form: 'register', key: 'password', value: '' });
      changeField({ form: 'register', key: 'passwordConfirm', value: '' });
      return;
    }

    dispatch(register({ email, password, username, latlon }));
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  //회원가입 성공/실패
  useEffect(() => {
    if (signupError) {
      if (signupError.response.status === 409) {
        setError('이미 존재하는 계정입니다');
        return;
      }
    }
    if (signup) {
      console.log('회원가입 완료:', signup);
      history.push('/signin');
    }
  }, [signup, signupError, dispatch, history]);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      history.push('/');
    }
  }, [history]);
  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onClick={onClick}
      onSubmit={onSubmit}
      error={error}
    />
  );
};
export default withRouter(RegisterForm);

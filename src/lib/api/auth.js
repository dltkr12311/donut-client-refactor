import client from './client';

//로그인
export const login = ({ email, password }) =>
  client.post('/user/signin', { email, password });

//회원가입
export const register = ({ email, password, latlon, username }) =>
  client.post('/user/signup', { email, password, latlon, username });

//로그인 상태 확인
export const check = () => client.get('/');

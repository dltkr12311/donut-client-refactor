import client from './client';

//로그인
export const login = ({ email, password }) => {
  const config = {
    withCredentials: true,
  };
  return client.post('/user/signin', { email, password }, config);
};

//회원가입
export const register = ({ email, password, latlon, username }) =>
  client.post('/user/signup', { email, password, latlon, username });

//로그인 상태 확인
export const check = () => {
  const config = {
    withCredentials: true,
  };
  return client.get('/user/check', config);
};

export const logout = () => client.get('/user/signout');

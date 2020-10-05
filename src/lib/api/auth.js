import client from './client';

const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
};

//로그인
export const login = ({ email, password }) => {
  return client.post('/user/signin', { email, password }, { withCredentials: true });
};

//회원가입
export const register = ({ email, password, latlon, username }) =>
  client.post('/user/signup', { email, password, latlon, username });

//로그인 상태 확인
export const check = () => {
  return client.get('/user/check', config);
};

export const logout = () => {
  return client.post('/user/signout', config);
};

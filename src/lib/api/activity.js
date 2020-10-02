import client from './client';

//로그인
export const writeActivity = ({ name, intro, skills, participation_cretira, rule }) => {
  console.log(name, intro, skills, participation_cretira, rule);
  return name;
  // client.post('/api/activity/write', { name, intro, participation_cretira, rule });
};

export const readActivity = ({ id }) => {
  return client.get(`/api/activity/${id}`);
};

export const listActivity = () => {
  return client.get(`/api/activity`);
};

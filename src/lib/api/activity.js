import client from './client';
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
};

export const writeActivity = ({
  name,
  intro,
  skills,
  participation_cretira,
  rule,
  location = '123,123',
}) => {
  return client.post(
    '/activity',
    { name, intro, participation_cretira, rule, location },
    config
  );
};

export const readActivity = (id) => {
  return client.get(`/activity/${id}`, config);
};

export const listActivity = () => {
  return client.get(`/activity`, config);
};

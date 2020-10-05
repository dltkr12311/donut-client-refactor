import client from './client';
const config = {
  headers: {
    authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  },
  withCredentials: true,
};

export const writeActivity = ({ name, intro, skills, participation_cretira, rule }) => {
  return client.post(
    '/activity/createActivity',
    { name, intro, skills, participation_cretira, rule },
    config
  );
};

export const readActivity = ({ id }) => {
  return client.get(`/activity/getActivityList/${id}`);
};

export const listActivity = () => {
  return client.get(`/activity/getActivity`);
};

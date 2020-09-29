import client from './client';

//로그인
export const writeActivity = ({ name, intro, participation_cretira, rule }) =>
  client.post('/api/activity/write', { name, intro, participation_cretira, rule });

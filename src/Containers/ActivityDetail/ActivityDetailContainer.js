import React from 'react';
import ActivityActionButton from '../../Components/ActivityDetail/ActivityActionButton';
import ActivityDetail from '../../Components/ActivityDetail/ActivityDetail';

const ActivityDetailContainer = () => {
  return <ActivityDetail actionButtons={<ActivityActionButton />} />;
};

export default ActivityDetailContainer;

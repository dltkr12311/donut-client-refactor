import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Activity from '../../Components/Activity/Activity';
import { listActivity } from '../../modules/activities';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const { activities, error, loading, user } = useSelector(
    ({ activities, loading, user }) => ({
      activities: activities.activities,
      error: activities.error,
      loading: activities['activities/LIST_ACTIVITY'],
      user: user.user,
    })
  );
  useEffect(() => {
    dispatch(listActivity());
  }, [dispatch]);

  return (
    <Activity
      loading={loading}
      error={error}
      activities={activities}
      showWriteBtn={user}
    />
  );
};

export default ActivityContainer;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ActivityActionButton from '../../Components/ActivityDetail/ActivityActionButton';
import ActivityDetail from '../../Components/ActivityDetail/ActivityDetail';
import { readActivity, unloadActivity } from '../../modules/activity';

const ActivityDetailContainer = ({ match }) => {
  const { activityId } = match.params;
  const dispatch = useDispatch();
  const { activity, error, loading } = useSelector(({ activity, loading }) => ({
    activity: activity.activity,
    error: activity.error,
    loading: loading['activity/READ_ACTIVITY'],
  }));

  useEffect(() => {
    dispatch(readActivity(activityId));
    return () => {
      dispatch(unloadActivity());
    };
  }, [dispatch, activityId]);

  return (
    <ActivityDetail
      activity={activity}
      loading={loading}
      error={error}
      actionButtons={<ActivityActionButton />}
    />
  );
};

export default withRouter(ActivityDetailContainer);

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import WriteActionButton from '../../Components/Write/WriteActionButton';
import { writeActivity } from '../../modules/write';

const WriteActionButtonContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
    name,
    intro,
    skills,
    participation_cretira,
    rule,
    activity,
    activityError,
  } = useSelector(({ write }) => ({
    name: write.name,
    intro: write.intro,
    skills: write.skills,
    participation_cretira: write.participation_cretira,
    rule: write.rule,
    activity: write.activity,
    activityError: write.activityError,
  }));
  const onPublish = (e) => {
    e.preventDefault();
    dispatch(writeActivity({ name, intro, skills, participation_cretira, rule }));
    history.push('/');
  };

  const onCancel = (e) => {
    e.preventDefault();
    history.goBack();
  };

  useEffect(() => {
    if (activity) {
      console.log(activity, '작성완료');
    }
    if (activityError) {
      console.log(activityError);
    }
  }, [history, activity, activityError]);
  return <WriteActionButton onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(WriteActionButtonContainer);

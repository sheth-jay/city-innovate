import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import * as actions from '../../appRedux/actions';
import RequestStates from '../../utils/request-states';
import Taskmanagementtable from './Taskmanagementtable';

const Taskmanagementtablecontainer = () => {
  const dispatch = useDispatch();
  const [getNextPageData, setGetNextPageData] = useState(false);
  const taskList = useSelector(state => state.app.taskList && state.app.taskList);
  const taskListMetadata = useSelector(state => state.app.taskList && state.app.taskListMetadata);
  const currentTaskDetails = useSelector(state => state.app.currentTaskDetails);
  const loading = useSelector(state => state.app.getCurrentTaskDetailsRequestState === RequestStates.loading
    || state.app.getTaskListRequestState === RequestStates.loading);

  useEffect(() => {
    if (taskListMetadata.total_pages > taskListMetadata.current_page) {
      setGetNextPageData(true);
    };
  }, [taskListMetadata]);

  useEffect(() => {
    dispatch(actions.getTaskList(taskListMetadata.next_page || 1));
  }, [getNextPageData]);

  const getCurrentTaskDetails = (taskId) => {
    dispatch(actions.getCurrentTaskDetails(taskId))
      .then(() => {})
      .catch((err) => message.error(err.response.data.errors))
  };

  return (
    <Taskmanagementtable
      taskList={taskList}
      getCurrentTaskDetails={getCurrentTaskDetails}
      currentTaskDetails={currentTaskDetails}
      loading={loading}
    />
  )
};

export default Taskmanagementtablecontainer;
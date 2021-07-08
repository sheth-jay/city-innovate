import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../appRedux/actions';
import Taskmanagementtable from './Taskmanagementtable';

const Taskmanagementtablecontainer = () => {
  const [getNextPageData, setGetNextPageData] = useState(false);
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.app.taskList && state.app.taskList);
  const taskListMetadata = useSelector(state => state.app.taskList && state.app.taskListMetadata);
  
  useEffect(() => {
    if (taskListMetadata.total_pages > taskListMetadata.current_page) {
      setGetNextPageData(true);
    };
  }, [taskListMetadata]);

  useEffect(() => {
    dispatch(actions.getTaskList(taskListMetadata.next_page || 1));
  }, [getNextPageData]);

  return (
    <Taskmanagementtable taskList={taskList} />
  )
};

export default Taskmanagementtablecontainer;
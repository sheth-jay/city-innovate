import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as actions from '../../appRedux/actions';
import Taskmanagementtable from './Taskmanagementtable';

const Taskmanagementtablecontainer = () => {
  const dispatch = useDispatch();
  const taskList = useSelector(state => state.app.taskList);
  
  useEffect(() => {
    dispatch(actions.getTaskList());
  }, []);

  return (
    <Taskmanagementtable taskList={taskList} />
  )
};

export default Taskmanagementtablecontainer;
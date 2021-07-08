import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Taskmanagement.scss';
import Header from '../../components/Header/Header';
import Taskmanagementtable from '../../components/Taskmanagementtable/Taskmanagementtablecontainer';

function Taskmanagement() {
  const isUserLoggedIn = localStorage.getItem('token');
  const history = useHistory();

  if(!isUserLoggedIn) {
    history.push('/login');
  }

  return (
    <div className="TaskmanagementStyles">
      <Header />
      <div className="ContentArea">
        <div className="wrapper">
          <Taskmanagementtable />
        </div>
      </div>
    </div>
  )
}

export default Taskmanagement;

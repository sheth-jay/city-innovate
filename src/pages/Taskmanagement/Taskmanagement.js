import React from 'react';

import './Taskmanagement.scss';
import Header from '../../components/Header/Header';
import Taskmanagementtable from '../../components/Taskmanagementtable/Taskmanagementtablecontainer';

function Taskmanagement() {
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

import React from 'react';
import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Checkbox, Menu, Input, Dropdown } from 'antd';

import './OverviewTab.scss';
import AddIcon from '../icons/AddIcon';
import { images } from '../../config/images';
import CalenderIcon from '../icons/CalenderIcon';
import { getFormattedDateAndClass } from '../../utils';

const addMember = (
	<Menu className="DropCategory">
    <div className="DropDownBx">
      <Input placeholder="Search" />
      <Checkbox.Group style={{ width: '100%' }}>
        <Checkbox value="A">
          <div className="Assigned-group">
            <div className="Assigned-group-img">
              <img src={images.user1} alt=""/>
            </div>
            <div className="Assigned-group-detail">
              <h4>Jessica Lopez</h4>
              <p>jess@gmail.com</p>
            </div>
          </div>
          <span>16</span>
        </Checkbox>
        <Checkbox value="B">
          <div className="Assigned-group">
            <div className="Assigned-group-img">
              <img src={images.user1} alt=""/>
            </div>
            <div className="Assigned-group-detail">
              <h4>James Twain</h4>
              <p>camila@cityinnovat...</p>
            </div>
          </div>
          <span>29</span>
        </Checkbox>
        <Checkbox value="C">
          <div className="Assigned-group">
            <div className="Assigned-group-img">
              <img src={images.user1} alt=""/>
            </div>
            <div className="Assigned-group-detail">
              <h4>Camila Gómez</h4>
              <p>camila@cityinnovat...</p>
            </div>
          </div>
          <span>1</span>
        </Checkbox>
        <Checkbox value="D">
          <div className="Assigned-group">
            <div className="Assigned-group-img">
              <img src={images.user1} alt=""/>
            </div>
            <div className="Assigned-group-detail">
              <h4>Britney Spurs</h4>
              <p>britneyspurs@gmai.com</p>
            </div>
          </div>
          <span>14</span>
        </Checkbox>
        <Checkbox value="E">
          <div className="Assigned-group">
            <div className="Assigned-group-img">
              <img src={images.user1} alt=""/>
            </div>
            <div className="Assigned-group-detail">
              <h4>Mark Ford</h4>
              <p>mark@gmail.com</p>
            </div>
          </div>
          <span>18</span>
        </Checkbox>
      </Checkbox.Group>            
    </div>
    <div className="DropDownBx-footer">
      <Button type="primary">See Results</Button>
      <Button type="default">Clear All</Button>
    </div>
  </Menu>
);

const OverviewTab = ({ currentTaskDetails }) => {
  const { dueDate, dueDateClass } = getFormattedDateAndClass(currentTaskDetails.due_date)
  return (
    <div className="overview-info-wrap">
      <div className="info">
        <span>Assignee</span>
        <div className="info-data">
          <div className="assignee-info">
            {currentTaskDetails?.assignees?.map((assignee) => {
              return (
                <div className="delete-opt">
                  <img src={assignee.avatar} alt={assignee.avatar}/>
                  <span>{assignee.full_name}</span>
                  <a href=""><CloseCircleFilled /></a>
                </div>
              )
            })}
            <Dropdown overlay={addMember} trigger={['click']}>
              <a href="" className="addicon" onClick={e => e.preventDefault()}><AddIcon /></a>
            </Dropdown>
          </div>
          <div className="assignee-info">
            <div className="delete-opt">
              <img src={images.assignee1}/>
              <span>Mark Ford</span>
              
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <span>Due date</span>
        <div className={`info-data ${dueDateClass}`}>
          <CalenderIcon fill={dueDateClass}/> {dueDate}
        </div>
      </div>
      <div className="info">
        <span>Labels</span>
        <div className="info-data">
          <span className="tags">Legal</span>
          <span className="tags">ADA</span>
        </div>
      </div>
      <div className="info">
        <span>Section</span>
        <div className="info-data">
          <span className="section-tags">2.0 Legal Assesment</span>
        </div>
      </div>
      <div className="info">
        <span>Document</span>
        <div className="info-data">
          <span className="doc-text">CDT STP FO</span>
        </div>
      </div>
      <div className="info">
        <span>Status</span>
        <div className="info-data">
          <span className="status">{currentTaskDetails.status}</span>
        </div>
      </div>
      <div className="info">
        <span>Description</span>
        <div className="info-desc">
          <p dangerouslySetInnerHTML={{__html: currentTaskDetails.description}}></p>
        </div>
      </div>
    </div>
  );
}

export default OverviewTab;

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, message, Col, Dropdown, Input, Menu, Row } from 'antd';

import './Header.scss';
import PlusIcon from '../icons/PlusIcon';
import DownIcon from '../icons/DownIcon';
import SearchIcon from '../icons/SearchIcon';
import { images } from '../../config/images';
import * as actions from '../../appRedux/actions';
import DropdownFilter from '../DropdownFilter/DropdownFilter';
import CreateTask from '../CreatTask/CreateTask';

const solicitation = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
          <Checkbox value="A">Checklist <span>12</span></Checkbox>
          <Checkbox value="B">Comment <span>32</span></Checkbox>
          <Checkbox value="C">Decision Log <span>24</span></Checkbox>
          <Checkbox value="D">Smart Text <span>8</span></Checkbox>
          <Checkbox value="E">Task <span>4</span></Checkbox>
          <Checkbox value="F">Variation <span>48</span></Checkbox>
        </Checkbox.Group>
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary">See Results</Button>
        <Button type="default">Clear All</Button>
      </div>
    </Menu>
  );
};

const category = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
          <Checkbox value="A">CDT STP RFO <span>2</span></Checkbox>
          <Checkbox value="B">Attachment 1: Scope of  1: Scope of <span>5</span></Checkbox>
        </Checkbox.Group>            
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary">See Results</Button>
        <Button type="default">Clear All</Button>
      </div>
    </Menu>
  );
};

const status = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
          <Checkbox value="incomplete">Incomplete</Checkbox>
          <Checkbox value="complete">Complete</Checkbox>
          <Checkbox value="thisweek">This Week</Checkbox>
          <Checkbox value="lastweek">Last Week</Checkbox>
        </Checkbox.Group>            
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary">See Results</Button>
        <Button type="default">Clear All</Button>
      </div>
    </Menu>
  );
};

const thisweek = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Input placeholder="Search" />
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
        <Checkbox value="incomplete">Incomplete</Checkbox>
          <Checkbox value="today">today</Checkbox>
          <Checkbox value="inprogress">In Progress</Checkbox>
          <Checkbox value="archive">Archive</Checkbox>
        </Checkbox.Group>            
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary">See Results</Button>
        <Button type="default">Clear All</Button>
      </div>
    </Menu>
  );
};

const dropdownFilter = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
          {props.filterList?.map(filter => {
            if (props.name === 'assignedto') {
              return (
                <Checkbox value={filter.id}>
                  <div className="Assigned-group">
                    <div className="Assigned-group-img">
                      <img src={filter.avatar || images.user1} alt=""/>
                    </div>
                    <div className="Assigned-group-detail">
                      <h4>{filter.full_name}</h4>
                      <p>{filter.email}</p>
                    </div>
                  </div>
                  <span>18</span>
                </Checkbox>
              )
            } else {
              return (
                <Checkbox value={filter.id}>{props.name === 'documents' ? filter.title.split('.')[0] : filter.name}</Checkbox>
              )
            }
          })}
        </Checkbox.Group>
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary" onClick={() => props.handleSeeResult}>See Results</Button>
        <Button type="default">Clear All</Button>
      </div>
    </Menu>
  );
};

const getValues = (value, name) => {
  console.log(value, name);
}
const handleSolicitationChange = checkedValues => {
  console.log(checkedValues);
};

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const usersFilterList = useSelector(state => state.app.usersFilterList);
  const labelsFilterList = useSelector(state => state.app.labelsFilterList);
  const documentsFilterList = useSelector(state => state.app.documentsFilterList);
  const solicitationsFilterList = useSelector(state => state.app.solicitationsFilterList);

  useEffect(() => {
    dispatch(actions.getUsersDropdownFilterList('users'));
    dispatch(actions.getLabelsDropdownFilterList('labels'));
    dispatch(actions.getSolicitationsDropdownFilterList('solicitations'));
    dispatch(actions.getDocumentsDropdownFilterList('documents'));
  }, []);

  const getValues = (value, name,) => {
    console.log('>>>', { [name]: value });
    setFilterItems([{[name]: value}]);
  }

  const handleLogout = () => {
    dispatch(actions.logout())
      .then(() => {
        message.success('You have been logged out');
        history.push('/login');
      })
      .catch((err) => {
        message.error(err.response.data.errors);
      });
  };

  const showDrawer = () => {
    setVisible(true);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const handleSeeResult = () => {
    
  }

  const handleClearAllFilters = () => {};

  const userDropdown = (
    <Menu className="userProfile-dropdown">
      <Menu.Item key="0">
        <Button type="link" onClick={handleLogout}>Logout</Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="HeaderStyles">
      <div className="wrapper">
        <div className="TopHeader">
          <Row gutter={30} align="middle">
            <Col xs={5} md={8}>
              <div className="Logoimage">
                <Button type="link"><img src={images.logo} alt=""/></Button>
              </div>
            </Col>
            <Col xs={13} md={8}>
              <div className="HeaderTitle">
                <h3>Task Management</h3>
              </div>
            </Col>
            <Col xs={6} md={8}>
              <div className="HeaderRight">
                <Dropdown overlay={userDropdown} trigger={['click']} placement="bottomRight">
                  <Button type="link" onClick={e => e.preventDefault()} className="UserBorder"><img src={images.user1} alt=""/></Button>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
        <div className="BottomHeader">
          <Row gutter={30} align="middle">
            <Col xs={24} md={24} lg={20}>
              <Row gutter={16} align="middle" className="Search-drop-row">
                <Col>
                  <div className="SearchBx">
                    <Input placeholder="Search tasks..." prefix={<SearchIcon />} />
                  </div>
                </Col>
                <Col>
                  <div className="DropDownMenu">
                    <Dropdown
                      overlay={() => dropdownFilter({
                        getValues: getValues,
                        name: 'Solicitation',
                        filterList: solicitationsFilterList,
                        handleSeeResult: handleSeeResult,
                      })}
                      trigger={['click']}
                    >
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Solicitation <DownIcon /> 
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'labels', filterList: labelsFilterList })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Category <DownIcon />
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'documents', filterList: documentsFilterList })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Document <DownIcon /><span className="count">2</span>
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'assignedto', filterList: usersFilterList })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Assigned To <DownIcon />
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => thisweek({ getValues: getValues, name: 'thisweek' })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      This Week <DownIcon />
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => status({ getValues: getValues, name: 'thisweek' })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Status <DownIcon />
                      </Button>
                    </Dropdown>
                    <Button type="link" className="ClearAll">Clear all</Button>
                  </div>
                </Col>
              </Row>                        
            </Col>                    
            <Col xs={24} md={24} lg={4}>
              <div className="ButtonRight">
                <Button type="primary" onClick={showDrawer}><PlusIcon />Create Task</Button>
              </div>
            </Col>
          </Row>
        </div>
        <CreateTask visible={visible} onClose={hideDrawer} />
      </div>
    </div>   
  )
}

export default Header;

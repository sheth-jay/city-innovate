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
import CreateTask from '../CreatTask/CreateTask';

const status = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
          <Checkbox value="incomplete">Incomplete</Checkbox>
          <Checkbox value="complete">Complete</Checkbox>
          <Checkbox value="inprogress">In Progress</Checkbox>
          <Checkbox value="archive">Archive</Checkbox>
        </Checkbox.Group>            
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary" onClick={props.handleSeeResult}>See Results</Button>
      </div>
    </Menu>
  );
};

const thisweek = (props) => {
  return (
    <Menu className="DropCategory">
      <div className="DropDownBx">
        <Checkbox.Group style={{ width: '100%' }} onChange={(value) => props.getValues(value, props.name)}>
        <Checkbox value="incomplete">Incomplete</Checkbox>
          <Checkbox value="today">today</Checkbox>
          <Checkbox value="thisweek">This Week</Checkbox>
          <Checkbox value="lastweek">Last Week</Checkbox>
          <Checkbox value="nextweek">Next Week</Checkbox>
          <Checkbox value="upcoming">Upcoming Week</Checkbox>
          <Checkbox value="overdue">Over Due</Checkbox>
          <Checkbox value="nooverdue">No Over Due</Checkbox>
        </Checkbox.Group>            
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary" onClick={props.handleSeeResult}>See Results</Button>
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
                <Checkbox value={filter.full_name}>
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
                <Checkbox value={props.name === 'documents' ? filter.name.split('.')[0] : filter.name}>
                  {props.name === 'documents' ? filter.name.split('.')[0] : filter.name}
                </Checkbox>
              )
            }
          })}
        </Checkbox.Group>
      </div>
      <div className="DropDownBx-footer">
        <Button type="primary" onClick={props.handleSeeResult}>See Results</Button>
      </div>
    </Menu>
  );
};

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [filterItems, setFilterItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const usersFilterList = useSelector(state => state.app.usersFilterList);
  const labelsFilterList = useSelector(state => state.app.labelsFilterList);
  const documentsFilterList = useSelector(state => state.app.documentsFilterList);
  const solicitationsFilterList = useSelector(state => state.app.solicitationsFilterList);
  const currentUserDetails = useSelector(state => state.app.userDetails);

  useEffect(() => {
    dispatch(actions.getUsersDropdownFilterList('users'));
    dispatch(actions.getLabelsDropdownFilterList('labels'));
    dispatch(actions.getSolicitationsDropdownFilterList('solicitations'));
    dispatch(actions.getDocumentsDropdownFilterList('documents'));
  }, []);

  const getValues = (value, name,) => {
    setFilterItems({[name]: value, filterName: name });
  };

  const handleSeeResult = () => {
    console.log('>>>filterItems', filterItems);
    dispatch(actions.filterTaskList(filterItems[filterItems.filterName], filterItems.filterName));
  };


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

  const handleClearAllFilters = () => {};

  const handleSearch = (e) => {
   setSearchQuery(e.target.value)
  };

  useEffect(() => {
    dispatch(actions.filterTaskByQuery(searchQuery, 'query'));
  }, [searchQuery]);

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
                {/* <Button type="link"><img src={images.logo} alt=""/></Button> */}
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
                  <Button type="link" onClick={e => e.preventDefault()} className="UserBorder"><img src={currentUserDetails.avatar || images.user1} alt="" width='50'/></Button>
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
                    <Input placeholder="Search tasks..." prefix={<SearchIcon />} onChange={handleSearch} />
                  </div>
                </Col>
                <Col>
                  <div className="DropDownMenu">
                    <Dropdown
                      overlay={() => dropdownFilter({
                        getValues: getValues,
                        name: 'solicitation',
                        filterList: solicitationsFilterList,
                        handleSeeResult: handleSeeResult,
                      })}
                      trigger={['click']}
                    >
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Solicitation <DownIcon />{filterItems['solicitation']?.length > 0 &&(<span className="count">{filterItems['solicitation'].length}</span>)}
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'label', filterList: labelsFilterList, handleSeeResult: handleSeeResult })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Category <DownIcon />{filterItems['label']?.length > 0 &&(<span className="count">{filterItems['label'].length}</span>)}
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'documents', filterList: documentsFilterList, handleSeeResult: handleSeeResult })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Document <DownIcon />{filterItems['document']?.length > 0 &&(<span className="count">{filterItems['document'].length}</span>)}
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => dropdownFilter({ getValues: getValues, name: 'assignedto', filterList: usersFilterList, handleSeeResult: handleSeeResult })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Assigned To <DownIcon />{filterItems['assignedto']?.length > 0 &&(<span className="count">{filterItems['assignedto'].length}</span>)}
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => thisweek({ getValues: getValues, name: 'thisweek',  handleSeeResult: handleSeeResult })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      This Week <DownIcon />{filterItems['thisweek']?.length > 0 &&(<span className="count">{filterItems['thisweek'].length}</span>)}
                      </Button>
                    </Dropdown>
                    <Dropdown overlay={() => status({ getValues: getValues, name: 'status',  handleSeeResult: handleSeeResult })} trigger={['click']}>
                      <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                      Status <DownIcon />{filterItems['status']?.length > 0 &&(<span className="count">{filterItems['status'].length}</span>)}
                      </Button>
                    </Dropdown>
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

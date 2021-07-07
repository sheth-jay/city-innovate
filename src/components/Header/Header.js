import React from 'react'
import { Button, Checkbox, Col, Dropdown, Input, Menu, Row } from 'antd'

import './Header.scss'
import { images } from '../../config/images'
import DownIcon from '../icons/DownIcon'
import SearchIcon from '../icons/SearchIcon'
import PlusIcon from '../icons/PlusIcon'

const solicitation = (
  <Menu className="DropCategory">
    <div className="DropDownBx">
      <Input placeholder="Search" />
      <Checkbox.Group style={{ width: '100%' }}>
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
const category = (
  <Menu className="DropCategory">
    <div className="DropDownBx">
      <Input placeholder="Search" />
      <Checkbox.Group style={{ width: '100%' }}>
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
const document = (
  <Menu className="DropCategory">
    <div className="DropDownBx">
      <Input placeholder="Search" />
      <Checkbox.Group style={{ width: '100%' }}>
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
const assignedto = (
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
const thisweek = (
  <Menu className="DropCategory">
    <div className="DropDownBx">
      <Checkbox.Group style={{ width: '100%' }}>
        <Checkbox value="A">Over due <span>12</span></Checkbox>
        <Checkbox value="B">Today <span>3</span></Checkbox>
        <Checkbox value="C">This Week <span>5</span></Checkbox>
        <Checkbox value="D">Next Week <span>14</span></Checkbox>
        <Checkbox value="E">Later <span>9</span></Checkbox>
        <Checkbox value="F">No due date <span>1</span></Checkbox>
      </Checkbox.Group>
    </div>
    <div className="DropDownBx-footer">
      <Button type="primary">See Results</Button>
      <Button type="default">Clear All</Button>
    </div>
  </Menu>
);

function Header() {
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
                <Button type="link" className="UserBorder"><img src={images.user1} alt=""/></Button>
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
                  <Dropdown overlay={solicitation} trigger={['click']}>
                    <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Solicitation <DownIcon />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={category} trigger={['click']}>
                    <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Category <DownIcon />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={document} trigger={['click']}>
                    <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Document <DownIcon />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={assignedto} trigger={['click']}>
                    <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Assigned to <DownIcon />
                    </Button>
                  </Dropdown>
                  <Dropdown overlay={thisweek} trigger={['click']}>
                    <Button type="link" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    This Week <DownIcon />
                    </Button>
                  </Dropdown>
                  <Button type="link" className="ClearAll">Clear all</Button>
                </div>
              </Col>
            </Row>                        
          </Col>                    
          <Col xs={24} md={24} lg={4}>
            <div className="ButtonRight">
              <Button type="primary"><PlusIcon />Create Task</Button>
            </div>
          </Col>
        </Row>
        </div>
      </div>
    </div>
  )
}

export default Header

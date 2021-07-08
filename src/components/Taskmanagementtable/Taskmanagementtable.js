import React from 'react';
import { Button, Drawer, Table, Tag, Checkbox, Breadcrumb, Tabs, Menu, Dropdown } from 'antd'
import Avatar from 'antd/lib/avatar/avatar';
import {CloseCircleFilled} from '@ant-design/icons';
import './Taskmanagementtable.scss';
import { images } from '../../config/images';
import RightIcon from '../icons/RightIcon';
import OverviewIcon from '../icons/OverviewIcon';
import ActivityIcon from '../icons/ActivityIcon';
import CalenderIcon from '../icons/CalenderIcon';
import AddIcon from '../icons/AddIcon';
import { getFormattedDateAndClass } from '../../utils';

import OverviewTab from './../OverviewTab/OverviewTab';
import ActivityTab from './../ActivityTab/ActivityTab';

const columns = [
	{
		title: 'Task name',
		dataIndex: 'taskname',    
		sorter: (a, b) => a.taskname - b.taskname,
	},
	{
		title: 'Document',
		dataIndex: 'document',
		sorter: (a, b) => a.document - b.document,
	},
	{
		title: 'Section',
		dataIndex: 'section',
		sorter: (a, b) => a.section - b.section,
	},
{
		title: 'Labels',
		dataIndex: 'labels',
		sorter: (a, b) => a.labels - b.labels,
	},
	{
		title: 'Assigned to',
		dataIndex: 'assigned',
		sorter: (a, b) => a.assigned - b.assigned,
	},
	{
		title: 'Due Date',
		dataIndex: 'duedate',
		sorter: (a, b) => a.duedate - b.duedate,
	},
];

const data = (taskList, showDrawer) => {
	return taskList && taskList.map(task => {
		const { dueDateClass, dueDate } = getFormattedDateAndClass(task.due_date);
		return ({
			key: task.id,
			taskname: (
				<div className="TaskName">
					<p>{task.title} <span className="tag">NEW</span></p>
					<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
				</div>
			),
			document: task.document,
			section: (
				<Tag>task.section</Tag>
			),
			labels: (
				<div className="TagLabels">
					{
						task.labels && task.labels.map(label => {
							return (<Tag key={label}>{label}</Tag>)
						})
					}
				</div>
			),
			assigned: (
				<div className="Assigned">
					{
						task.assignedTo && task.assignedTo.map((item, index) => {
							return (<Avatar key={index} size={25} icon={<img src={images[item.user.imageUrl]} alt=""/>} />)
						})
					}
				</div>
			),
			duedate: (
				<span className={`date ${dueDateClass}`}>{dueDate}</span>
			),
		});
	})
};

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const menu = (
	<Menu className="drawer-menu">
	  <Menu.Item key="0"><a href="">Archive</a></Menu.Item>
	  <Menu.Item key="1">
		<a href="">Allow Guest Contributors to edit</a>
	  </Menu.Item>
	</Menu>
);
class Taskmanagementtable extends React.Component {
	constructor(props) {
		super(props);
	}
	state = {
		selectedRowKeys: [],
		visible: false,
	};

	start = () => {
		setTimeout(() => {
			this.setState({
			selectedRowKeys: [],
			});
		}, 1000);
	};

	onSelectChange = selectedRowKeys => {
		this.setState({ selectedRowKeys });
	};

	showDrawer = () => {
		this.setState({visible: true});
	};
	onClose = () => {
		this.setState({visible: false});
	};

	

	render() {
		const { selectedRowKeys, visible } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		
		return (
			<div className="TaskmanagementtableStyles">
				<Table rowSelection={rowSelection} columns={columns} dataSource={data(this.props.taskList, this.showDrawer)} />
				<Drawer
					placement="right"
					closable={false}
					onClose={this.onClose}
					visible={visible}
					width={450}
				>
					<div className="drawer_header">
						<Checkbox onChange={onChange}>Mark as Complete</Checkbox>
						<div className="right_header_wrap">
							<a href=""><img src={images.Attachment} /></a>
							<Dropdown overlay={menu} trigger={['click']}>
								<a href="" onClick={e => e.preventDefault()}><img src={images.unionLink} /></a>
							</Dropdown>
							<Button className="close-drawer" onClick={this.onClose}><img src={images.drawerClose} /></Button>
						</div>
					</div>
					<Breadcrumb>
						<Breadcrumb.Item>
							<a href="">Solicitation</a>
						</Breadcrumb.Item>
						<Breadcrumb.Item>CDT STP FO</Breadcrumb.Item>
					</Breadcrumb>
					<h2>There are several issues with the naming of sections</h2>
					<div className="">
						<Tabs defaultActiveKey="1" onChange={callback}>
							<TabPane tab={<span>Overview <OverviewIcon /></span>} key="1">
								<OverviewTab />
							</TabPane>
							<TabPane tab={<span>Activity <ActivityIcon /></span>} key="2">
								<ActivityTab />
							</TabPane>
						</Tabs>
					</div>
					<div className="drawer-footer">
						<div className="profile-info">
							<img src={images.avtarFooter} />
							<h2>Jordy Alba created this task</h2>
							<span>9:45 AM Today</span>
						</div>
						<div className="task-update-info">
							<p>Mark Ford updated this task, 10:22 AM Tue, 22</p>
							<p>Mark Ford commented, 9:45 AM Today</p>
							<p>Task Assinged, 9:45 AM Today</p>
						</div>
					</div>
				</Drawer>
			</div>
		);
	}
}

export default Taskmanagementtable

import React from 'react';
import Avatar from 'antd/lib/avatar/avatar';
import { CloseCircleFilled } from '@ant-design/icons';
import { Button, Drawer, Table, Tag, Checkbox, Breadcrumb, Tabs, Menu, Dropdown, Spin } from 'antd';

import './Taskmanagementtable.scss';
import AddIcon from '../icons/AddIcon';
import RightIcon from '../icons/RightIcon';
import { images } from '../../config/images';
import OverviewIcon from '../icons/OverviewIcon';
import ActivityIcon from '../icons/ActivityIcon';
import CalenderIcon from '../icons/CalenderIcon';
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
					<Button type="link" onClick={() => showDrawer(task)}>See Details <RightIcon /></Button>
				</div>
			),
			document: task.document,
			labels: (
				<div className="TagLabels">
					{
						task.labels && task.labels.map(label => {
							return (<Tag key={label.id}>{label.name}</Tag>)
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
const menu = (props) => {
	return (
		<Menu className="drawer-menu">
			<Menu.Item key="0"><Button type="link">Archive</Button></Menu.Item>
			<Menu.Item key="1">
				<Button type="link">Allow Guest Contributors to edit</Button>
			</Menu.Item>
		</Menu>
	);
}
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

	showDrawer = (task) => {
		this.setState({visible: true});
		this.props.getCurrentTaskDetails(task.id);
	};
	onClose = () => {
		this.setState({visible: false});
	};

	render() {
		const { selectedRowKeys, visible } = this.state;
		const { currentTaskDetails } = this.props;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
		};
		
		return (
			<div className="TaskmanagementtableStyles">
				<Spin spinning={this.props.loading}>
					<Table rowSelection={rowSelection} columns={columns} dataSource={data(this.props.taskList, this.showDrawer)} />
				</Spin>
				<Drawer
					placement="right"
					closable={false}
					onClose={this.onClose}
					visible={visible}
					width={450}
				>
					<Spin spinning={this.props.loading}>
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
						<h2>{currentTaskDetails.title}</h2>
						<div className="">
							<Tabs defaultActiveKey="1" onChange={callback}>
								<TabPane tab={<span>Overview <OverviewIcon /></span>} key="1">
									<OverviewTab currentTaskDetails={currentTaskDetails} />
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
								<p>Task Assigned, 9:45 AM Today</p>
							</div>
						</div>
					</Spin>
				</Drawer>
			</div>
		);
	}
}

export default Taskmanagementtable;

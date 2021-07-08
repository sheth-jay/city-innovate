import React from 'react';
import { Button, Drawer, Table, Tag } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

import './Taskmanagementtable.scss';
import { images } from '../../config/images';
import RightIcon from '../icons/RightIcon';

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
		return ({
			key: task.id,
			taskname: (
				<div className="TaskName">
					<p>{task.name} <span className="tag">NEW</span></p>
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
				<span className="date green">{task.dueDate}</span>
			),
		});
	})
};

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
					title="Basic Drawer"
					placement="right"
					closable={false}
					onClose={this.onClose}
					visible={visible}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Drawer>
			</div>
		);
	}
}

export default Taskmanagementtable

import React from 'react'
import { Button, Drawer, Table, Tag } from 'antd'
import Avatar from 'antd/lib/avatar/avatar';

import './Taskmanagementtable.scss'
import { images } from '../../config/images'
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

const data = (showDrawer) => {
	return (
		[
			{
				key: '1',
				taskname: (
					<div className="TaskName">
						<p>Complete this section <span className="tag">NEW</span></p>
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date green">Today</span>
				),
			},
			{
				key: '2',
				taskname: (
					<div className="TaskName">
						<p>There are several issues with the naming There are several issues with the naming</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'SF Solicitation',
				section: (
					<Tag>2.0 Legal Assesment</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date green">Today</span>
				),
			},
			{
				key: '3',
				taskname: (
					<div className="TaskName">
						<p>Ensure the documents are in the right format</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '4',
				taskname: (
					<div className="TaskName">
						<p>Complete this section</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>7.2 Technical Information</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '5',
				taskname: (
					<div className="TaskName">
						<p>Liquidated damages will be removed</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>2.0 Legal Assesment</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '6',
				taskname: (
					<div className="TaskName">
						<p>Several issues with the specifications from</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'Discovery Solici',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date red">Oct 12</span>
				),
			},
			{
				key: '7',
				taskname: (
					<div className="TaskName">
						<p>Complete this section <span className="tag">NEW</span></p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
						<span className="date green">Today</span>
				),
			},
			{
				key: '8',
				taskname: (
					<div className="TaskName">
						<p>There are several issues with the naming</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'SF Solicitation',
				section: (
					<Tag>2.0 Legal Assesment</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date green">Today</span>
				),
			},
			{
				key: '9',
				taskname: (
					<div className="TaskName">
						<p>Ensure the documents are in the right format</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '10',
				taskname: (
					<div className="TaskName">
						<p>Complete this section</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>7.2 Technical Information</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '11',
				taskname: (
					<div className="TaskName">
							<p>Liquidated damages will be removed</p>
							<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'CDT STP FO',
				section: (
					<Tag>2.0 Legal Assesment</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date grey">Dec 22</span>
				),
			},
			{
				key: '12',
				taskname: (
					<div className="TaskName">
						<p>Several issues with the specifications from</p>
						<Button type="link">See Details <RightIcon /></Button>
					</div>
				),
				document: 'Discovery Solici',
				section: (
					<Tag>4.1 Informational Attatchments</Tag>
				),
				labels: (
					<div className="TagLabels">
						<Tag>ADA</Tag>
						<Tag>Legal</Tag>
					</div>
				),
				assigned: (
					<div className="Assigned">
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
						<Avatar size={25} icon={<img src={images.user1} alt=""/>} />
					</div>
				),
				duedate: (
					<span className="date red">Oct 12</span>
				),
			},
		]
	)
};

class Taskmanagementtable extends React.Component {

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
				<Table rowSelection={rowSelection} columns={columns} dataSource={data(this.showDrawer)} />
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

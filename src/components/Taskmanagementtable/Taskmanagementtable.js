import React from 'react'
import { Button, Drawer, Table, Tag, Checkbox, Breadcrumb, Tabs } from 'antd'
import Avatar from 'antd/lib/avatar/avatar';
import {CloseCircleFilled} from '@ant-design/icons';
import './Taskmanagementtable.scss'
import { images } from '../../config/images'
import RightIcon from '../icons/RightIcon';
import OverviewIcon from '../icons/OverviewIcon';
import ActivityIcon from '../icons/ActivityIcon';
import CalenderIcon from '../icons/CalenderIcon';
import AddIcon from '../icons/AddIcon';

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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
				key: '8',
				taskname: (
					<div className="TaskName">
						<p>There are several issues with the naming</p>
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
							<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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
						<Button type="link" onClick={showDrawer}>See Details <RightIcon /></Button>
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

function onChange(e) {
	console.log(`checked = ${e.target.checked}`);
}
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
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
							<a href=""><img src={images.unionLink} /></a>
							<a href=""><img src={images.drawerClose} /></a>
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
								<div className="overview-info-wrap">
									<div className="info">
										<span>Assignee</span>
										<div className="info-data">
											<div className="assignee-info">
												<img src={images.assignee1}/>
												<span>Jessica Lopez</span>
											</div>
											<div className="assignee-info">
												<div className="delete-opt">
													<img src={images.assignee1}/>
													<span>Mark Ford</span>
													<a href=""><CloseCircleFilled /></a>
												</div>
												<a href="" className="addicon"><AddIcon /></a>
											</div>
											<div className="assignee-info">
												<img src={images.assignee1}/>
												<span>James Twain</span>
											</div>
										</div>
									</div>
									<div className="info">
										<span>Due date</span>
										<div className="info-data">
											<CalenderIcon /> Today
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
											<span className="status">In Progress</span>
										</div>
									</div>
									<div className="info">
										<span>Description</span>
										<div className="info-desc">
											<p>Below are the details we have for EDR2 Independent Verification & Validation (IV&V) and Quality Assurance (QA). You'll also find options for updating these details or removing EDR2 Independent Verification & Validation (IV&V) and Quality Assurance (QA) from California Department of State Hospitals - CDT (IT) Templates entirely.</p>
										</div>
									</div>
								</div>
							</TabPane>
							<TabPane tab={<span>Activity <ActivityIcon /></span>} key="2">
							Content of Tab Pane 2
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

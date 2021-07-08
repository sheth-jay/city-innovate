import React from 'react'
import './ActivityTab.scss'
import { images } from '../../config/images'
import { Menu, Dropdown, List, Avatar } from 'antd';
import DownArrowIcon from './../icons/DownArrowIcon'


const menu = (
	<Menu>
	  <Menu.Item key="0">
		<a href="">Last Week</a>
	  </Menu.Item>
	  <Menu.Item key="1">
		<a href="">Last Month</a>
	  </Menu.Item>
	</Menu>
);
const data = [
	{
		title: 'Ant Design Title 1',
	},
	{
		title: 'Ant Design Title 2',
	},
	{
		title: 'Ant Design Title 3',
	},
	{
		title: 'Ant Design Title 4',
	},
];

class ActivityTab extends React.Component {
	render() {
		return (
			<div className="activity-wrap">
				<Dropdown overlay={menu} trigger={['click']}>
					<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					Most Recent <DownArrowIcon />
					</a>
				</Dropdown>
				<ul className="list-wrap">
					<li className="list">
						<div className="avtar-list">
							<img src={images.Listavtar} />
						</div>
						<div className="list-content">
							<h3>Jessica Lopez</h3>
							<div className="description">
								<p>This makes sense for me. What do you think? <a href="">@jordyalba</a></p>
								<span className="date">9:45 AM Today</span>
							</div>
						</div>
					</li>
					<li className="list">
						<div className="avtar-list">
							<img src={images.Listavtar} />
						</div>
						<div className="list-content">
							<h3>Jessica Lopez</h3>
							<div className="description highlitedText">
								<span className="highlight">Highlighted text:</span>
								<div className="desc-text">under the policies and procedures devel...</div>
								<span className="date">9:45 AM Today</span>
							</div>
						</div>
					</li>
					<li className="list">
						<div className="avtar-list">
							<img src={images.Listavtar} />
						</div>
						<div className="list-content">
							<h3>Jessica Lopez</h3>
							<div className="description">
								<p>Quite a discussion 😆. Glad it help figuring this stuff out.</p>
								<span className="date">9:45 AM Today</span>
							</div>
						</div>
					</li>
					<li className="list">
						<div className="avtar-list">
							<img src={images.Listavtar} />
						</div>
						<div className="list-content">
							<h3>James King</h3>
							<div className="description">
								<p>This is a little out of scope</p>
								<span className="date">9:45 AM Today</span>
							</div>
						</div>
					</li>
				</ul>
				<span className="conv-text">Start of conversations</span>
			</div>
			
		);
	}
}

export default ActivityTab

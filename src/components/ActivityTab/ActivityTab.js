import React, { useState } from 'react'
import './ActivityTab.scss'
import ReactQuill from 'react-quill';
import { images } from '../../config/images'
import * as actions from '../../appRedux/actions';
import DownArrowIcon from './../icons/DownArrowIcon'
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Dropdown, Form,Button,message } from 'antd';

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

const ActivityTab =(props)=> {
	const dispatch = useDispatch();
	const users = useSelector(state => state.app.users || []);
	const [comment, setComment] = useState('');
	const [userDetails, setUserDetails] = useState('');
	const onFinish = (values) => {
		dispatch(actions.createComment(comment,props?.taskDetails?.id))
		.then(() => {
		  message.success('Comment added successfully');
		  props.updateTask()
		  setComment('')
		//   onClose();
		})
		.catch((err) => {
		  message.error(err.response.data.errors);
		});
	};
	// render() {
		return (
			<div className="activity-wrap">
				<Dropdown overlay={menu} trigger={['click']}>
					<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
					Most Recent <DownArrowIcon />
					</a>
				</Dropdown>
				<ul className="list-wrap">
					{props?.taskDetails?.comments?.map((cmnt)=>{
						return <li className="list">
						<div className="avtar-list">
							<img src={images.Listavtar} />
						</div>
						<div className="list-content">
							<h3>{cmnt.user_name}</h3>
							<div className="description" dangerouslySetInnerHTML={{__html: cmnt.comment}}>
							</div>
						</div>
					</li>
					})}
					{(!props?.taskDetails?.comments||props?.taskDetails?.comments.length===0)&&<li className="list" style={{justifyContent:'center'}}>
						No Chat initiated
					</li>}
				</ul>
				<div className="task-form-wrap">
					<Form
					name="basic"
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					onFinish={onFinish}
					>
					<ReactQuill theme="snow" value={comment} onChange={setComment} />
					<div className="ButtonRight" style={{float:'right',marginTop:'10px'}}>
						<Button type="primary" htmlType="submit">Comment</Button>
					</div>
					</Form>
				</div>
			</div>
			
		);
	// }
}

export default ActivityTab

import React, { useState, useEffect } from 'react'
import moment from 'moment';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Drawer, Form, Upload, Select, DatePicker, Space, message } from 'antd';

import * as actions from '../../appRedux/actions';
import RequestState from '../../utils/request-states';

const CreateTask = ({ visible, onClose }) => {
  const [descriptionValue, setDescriptionValue] = useState('');
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();
  const users = useSelector(state => state.app.users || []);
  const currentUserDetails = useSelector(state => state.app.userDetails);
  const taskLabels = useSelector(state => state.app.taskLabels || []);
  const { Option } = Select;
  const today = moment();
  const dateFormat = "YYYY-MM-DD";
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch(actions.getTaskLabels());
    dispatch(actions.getUsers());
  }, []);

  const handleChange = (value) => {
    console.log(value);
  };

  const uploadDocuments = (event) => {
    event.preventDefault();
    const files = event.target.files;
    setFileList({ files: files });
  }

  const handleDueDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = (values) => {
    dispatch(actions.createTask({ ...values, DueDate: moment(values.DueDate).format(dateFormat), fileList }))
    .then(() => {
      message.success('you have successfully created a new task');
      form.resetFields();
      onClose();
    })
    .catch((err) => {
      message.error(err.response.data.errors);
    });
  };

  return (
    <Drawer
      title="Create New Task"
      placement="right"
      closable={true}
      onClose={onClose}
      width= {450}
      className="task-form-drawer"
      visible={visible}
    >
      <div className="task-form-wrap">
        <Form
          name="basic"
          layout="vertical"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          onFinish={onFinish}
          form={form}
        >
          <Form.Item
            label="Name"
            name="title"
            rules={[{ required: true, message: 'Please Enter Name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Please Enter Description!' }]}
            initialValue= ''
          >
            <ReactQuill theme="snow" value={descriptionValue} onChange={setDescriptionValue} />
          </Form.Item>
          <Form.Item
            label="Document"
            name="document"
            rules={[{ required: true, message: 'Please upload Document!' }]}
          >
            <Input id="photo-upload" type="file" onChange={uploadDocuments} accept=".docx"/>
          </Form.Item>
          <Form.Item
            label="Labels"
            name="labels"
            rules={[{ required: true, message: 'Please select Labels!' }]}
          >
            <Select onChange={handleChange} mode="multiple">
              {taskLabels.map(label => {
                return (<Option value={label.id} key={label.id}>{label.name}</Option>)
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="AssignedTo"
            name="assigned_to"
            rules={[{ required: true, message: 'Please select Assignee!' }]}
          >
            <Select onChange={handleChange} mode="multiple">
              {users.filter(user => user.id !== currentUserDetails.id).map(user => {
                return (<Option value={user.id} key={user.id}>{user.full_name}</Option>)
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label="DueDate"
            name="due_date"
            rules={[{ required: true, message: 'Please select DueDate!' }]}
          >
            <DatePicker
              onChange={handleDueDateChange}
              disabledDate={(current => current < moment().subtract(1, 'days'))}
            />
          </Form.Item>
          <div className="ButtonRight">
            <Button type="primary" htmlType="submit">Create Task</Button>
            <Button onClick={() => form.resetFields()}>Clear</Button>
          </div>
        </Form>
      </div>
    </Drawer>
  )
}

export default CreateTask;

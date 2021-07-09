import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useHistory } from 'react-router-dom';
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, Drawer, Form, Upload, Select, DatePicker, Space, message } from 'antd';

import * as actions from '../../appRedux/actions';
import RequestState from '../../utils/request-states';

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const CreateTask = ({ visible, onClose }) => {
  const [descriptionValue, setDescriptionValue] = useState('');
  const dispatch = useDispatch();
  const users = useSelector(state => state.app.users || []);
  const currentUserDetails = useSelector(state => state.app.userDetails);
  const taskLabels = useSelector(state => state.app.taskLabels || []);
  const { Option } = Select;
  const dateFormat = "YYYY-MM-DD";

  useEffect(() => {
    dispatch(actions.getTaskLabels());
    dispatch(actions.getUsers());
  }, []);

  const handleChange = (value) => {
    console.log(value);
  };

  const handleDueDateChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const onFinish = (values) => {
    dispatch(actions.createTask({ ...values, DueDate: moment(values.DueDate).format(dateFormat) }))
    .then(() => {
      message.success('you have successfully created a new task');
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
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
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
            <Upload {...props} accept=".doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document">
              <Button icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload>
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
              defaultValue={moment("2015-01-01", dateFormat)}
              format={dateFormat}
            />
          </Form.Item>
          <div className="ButtonRight">
            <Button type="primary" htmlType="submit">Create Task</Button>
            <Button>Clear</Button>
          </div>
        </Form>
      </div>
    </Drawer>
  )
}

export default CreateTask;

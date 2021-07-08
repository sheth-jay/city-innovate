import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './Signup.scss';
import * as actions from '../../appRedux/actions';

const Signup = () => {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(actions.signup(values.firstName, values.lastName, values.emailAddress, values.password, values.confirmPassword))
      .then(() => console.log('you have signed up successfully, please check your email to complete this process'))
      .catch((err) => console.log(err));
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <h1>Signup</h1>
      <Form.Item
        name="firstName"
        rules={[
          {
            required: true,
            message: 'Please enter First Name',
          },
        ]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[
          {
            required: true,
            message: 'Please enter Last Name',
          },
        ]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="emailAddress"
        rules={[
          {
            required: true,
            message: 'Please enter Email Address',
          },
        ]}
      >
        <Input placeholder="Email address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter Password',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: 'Please enter Confirm Password',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register Now
        </Button>
        <span className="center-text or-text">Or</span> 
        <p className="center-text">Already have account? <Link to="/">Login</Link></p>
      </Form.Item>
    </Form>
  )
}

export default Signup

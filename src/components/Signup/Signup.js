import React from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Input, Button, message } from 'antd';

import './Signup.scss';
import * as actions from '../../appRedux/actions';

const Signup = () => {
  const dispatch = useDispatch();

  const onFinish = values => {
    dispatch(actions.signup(values.firstName, values.lastName, values.emailAddress, values.password, values.confirmPassword))
      .then(() => message.success('you have signed up successfully, please login to continue'))
      .catch((err) => message.error('Something went wrong, please try again'));
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
            type: 'email',
            message: 'Please enter a valid E-mail Address!',
          },
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
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
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

export default Signup;

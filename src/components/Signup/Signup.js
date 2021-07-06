import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import 'antd/dist/antd.css';
import './Signup.scss'


const Signup = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
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
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Please input your First Name',
          },
        ]}
      >
        <Input placeholder="First Name" />
      </Form.Item>
      <Form.Item
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Please input your Last Name',
          },
        ]}
      >
        <Input placeholder="Last Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your Email',
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
            message: 'Please input your Password',
          },
        ]}
      >
        <Input
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password',
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
        <p className="center-text">Already have account? <a href="/login">Login</a></p>
      </Form.Item>
    </Form>
  )
}

export default Signup

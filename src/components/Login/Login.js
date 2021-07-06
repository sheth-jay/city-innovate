import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';

import './Login.scss'


const Login = () => {
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
      <h1>Login</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username',
          },
        ]}
      >
        <Input placeholder="Username" />
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot-password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        <span className="center-text or-text">Or</span> 
        <p className="center-text">Don't have account? <a href="/signup">Signup</a></p>
      </Form.Item>
    </Form>
  )
}

export default Login

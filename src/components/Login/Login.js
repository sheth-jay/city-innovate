import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

import './Login.scss'
import * as actions from './redux/actions';

const Login = ({ login }) => {
  const onFinish = values => {
    login(values.emailAddress, values.password)
      .then(() => console.log('you have logged in successfully'))
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
      <h1>Login</h1>
      <Form.Item
        name="emailAddress"
        rules={[
          {
            required: true,
            message: 'Please enter your Email Address',
          },
        ]}
      >
        <Input placeholder="Email Address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please enter your Password',
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

        <Link className="login-form-forgot" to="/forgot-password">
          Forgot password
        </Link>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Login
        </Button>
        <span className="center-text or-text">Or</span> 
        <p className="center-text">Don't have account? <Link to="/signup">Signup</Link></p>
      </Form.Item>
    </Form>
  )
}

const mapDispatchToProps = dispatch => ({
  login: (emailAddress, password) => dispatch(actions.login(emailAddress, password))
});

export default connect(null, mapDispatchToProps)(Login)

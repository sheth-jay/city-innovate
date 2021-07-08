import React from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './Login.scss';
import * as actions from '../../appRedux/actions';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onFinish = values => {
    dispatch(actions.login(values.emailAddress, values.password))
      .then(() => {
        message.success('You have logged in successfully');
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
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

export default Login

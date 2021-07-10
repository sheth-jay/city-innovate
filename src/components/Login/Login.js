import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Checkbox, message, Spin } from 'antd';

import './Login.scss';
import RequestState from '../../utils/request-states';
import * as actions from '../../appRedux/actions';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.app.loginRequestState === RequestState.loading);

  const onFinish = values => {
    dispatch(actions.login(values.emailAddress, values.password))
      .then(() => {
        message.success('You have logged in successfully');
        history.push('/');
      })
      .catch((err) => {
        message.error(err.response.data.errors);
      });
  };
  
  return (
    <Spin spinning={loading}>
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
              type: 'email',
              message: 'Please enter a valid E-mail Address!',
            },
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
          <Button type="primary" htmlType="submit" className="login-form-button">
            Login
          </Button>
          <span className="center-text or-text">Or</span> 
          <p className="center-text">Don't have account? <Link to="/signup">Signup</Link></p>
        </Form.Item>
      </Form>
    </Spin>
  )
}

export default Login;

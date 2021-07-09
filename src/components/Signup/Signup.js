import React from 'react';
import 'antd/dist/antd.css';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input, Button, message, Spin } from 'antd';

import './Signup.scss';
import * as actions from '../../appRedux/actions';
import RequestState from '../../utils/request-states';

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.app.signupRequestState === RequestState.loading);

  const onFinish = values => {
    dispatch(actions.signup(values.firstName, values.lastName, values.emailAddress, values.password, values.confirmPassword))
      .then(() => {
        history.push('/login');
        message.success('you have signed up successfully, please login to continue');
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
    </Spin>
  );
};

export default Signup;

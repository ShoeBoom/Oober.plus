// typed by Adrian Wu

import { Form, Input, Button, Checkbox, Space } from "antd";
import Link from "next/link";
import React from "react";

interface Props {

  onComplete?(v): void;
}

export function SignInForm({ onComplete }: Props) {

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 13 },
  };
  const tailLayout = {
    wrapperCol: { offset: 5, span: 13 },
  };

  const onFinish = values => {
    console.log('Success:', values);
    onComplete(values)
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  return (

    <Form {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{
          type: 'email',
          message: 'The input is not valid E-mail!',
          },
          {
          required: true,
          message: 'Please input your E-mail!',
        }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            Sign In
        </Button>
         <span> Or <Link href="/register">register now!</Link> </span>
        </Space>
      </Form.Item>
    </Form>

  )
}

// typed by Adrian Wu

import { Form, Input, Button, Checkbox } from "antd";
import Link from "next/link";
import React from "react";

interface Props {

  onComplete?(v): void;
}

export function SignInForm({ onComplete } : Props) {

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
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}>
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
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
         Or <Link href="/register">register now!</Link>
      </Form.Item>
    </Form>

  )
}

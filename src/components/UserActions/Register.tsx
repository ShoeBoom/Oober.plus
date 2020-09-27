//adrian
import { Form, Input, Button, Checkbox, AutoComplete } from "antd";
import { QuestionCircleOutlined } from '@ant-design/icons';
import React, { useState } from "react";
  
export function RegisterForm({onFinish: onCompleteParent}) {
    
    const AutoCompleteOption = AutoComplete.Option;

    const layout = {
        labelCol: { span: 5 },
        wrapperCol: { span: 13 },
    };

    const Layout2 = {
        wrapperCol: { offset: 5, span: 13 },
    };

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        onCompleteParent(values)
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

    const [autoCompleteResult, setAutoCompleteResult] = useState([]);

    return (
        <Form {...layout}
            name="register"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
        <Form.Item
            name="name"
            label="First Name"
            rules={[{ 
                required: true, 
                message: 'First name is required!'}]}>
            <Input/>
        </Form.Item>
        <Form.Item
            name="last-name"
            label="Last Name"
            rules={[{ 
                required: true, 
                message: 'Last name is required!'}]}>
            <Input/>
        </Form.Item>
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
            {
                type: 'email',
                message: 'The input is not valid E-mail!'
            },
            {
                required: true,
                message: 'Please input your E-mail!'}]}
                hasFeedback>
            <Input />
        </Form.Item>
        <Form.Item
            name="password"
            label="Password"
            rules={[
            {
                required: true,
                message: 'Please input your password!'}]}
            hasFeedback>
            <Input.Password />
        </Form.Item>
        <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={['password']}
            hasFeedback
            rules={[
            {
                required: true,
                message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
                validator(rule, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }

                return Promise.reject('The two passwords that you entered do not match!');
                },
            })]}>
            <Input.Password />
        </Form.Item>
        <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
            {
                required: true,
                pattern: new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"),
                message: 'Please input your phone number!'}]}>
            <Input/>
        </Form.Item>
        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
            {
                validator: (_, value) =>
                value ? Promise.resolve() : Promise.reject('Should accept agreement')}]}
            {...Layout2}>
            <Checkbox>
                I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>
        <Form.Item {...Layout2}>
            <Button type="primary" htmlType="submit">
                Register
            </Button>
        </Form.Item>
    </Form>
    )
};
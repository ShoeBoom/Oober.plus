// typed by Adrian Wu

import { Form, Input, InputNumber, Button, Select, Upload, DatePicker, TimePicker, Divider } from "antd";
import React from "react";

export function SubmitForm() {
  // code
  const layout = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 13,
    },
  };

  const layout2 = {
    labelCol: {
      span: 5,
    },
    wrapperCol: {
      span: 8,
      offset: 5,
    },
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const Option = Select;

  const { RangePicker } = DatePicker;

  return (
    <Form {...layout} onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      labelAlign="right">
      <Divider orientation="left">Seller Details</Divider>
      <Form.Item
        name="title"
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="description"
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="addressA"
        label="Address Point A"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="addressB"
        label="Address Point B"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="passengers"
        label="Passengers"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <InputNumber min={1} max={8} />
      </Form.Item>
      <Form.Item
        name="Capacity"
        label="Capacity"
        rules={[
          {
            required: true, 
            message:"Invalid capacity!"
          },
        ]}
      >
        <InputNumber min={1} max={8} />
      </Form.Item>
      <Form.Item
        name="vehicleType"
        label="Vehicle Type"
        hasFeedback={true}
        rules={[
          {
            required: true,
            message: "Please select your vehicle type!",
          },
        ]}
      >
        <Select placeholder="Please select a type">
          <Option value="small">Small (S)</Option>
          <Option value="large">Large (L)</Option>
          <Option value="extra-Large">Extra Large (XL)</Option>
        </Select>
      </Form.Item>
      <Form.Item
        name="select-date"
        label="Select Date"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        name="select-time"
        label="Select Time"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <TimePicker />
      </Form.Item>
      <Divider orientation="left">Contact Information</Divider>
      <Form.Item
        name="phone"
        label="Phone"
        rules={[{
          required: true,
          pattern: new RegExp("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"),
          message: "Invalid phone number!",}]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="Email"
        label="Email"
        rules={[{ type: "email", 
          required: true, 
          message:"The input is not a valid E-mail!"}]}>
        <Input />
      </Form.Item>
      <Form.Item {...layout2}>
        <Button type="primary" htmlType="submit">
          Post Ad
        </Button>
      </Form.Item>
    </Form>
  );
}
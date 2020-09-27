// typed by Adrian Wu

import { Form, Input, InputNumber, Button, Select, Upload, DatePicker, TimePicker, Divider } from "antd";
import React from "react";

export function SubmitForm({onFinish: onFinishParent}) {
  
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
    onFinishParent(values)
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
            message: "Please input a title!"
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
            message: "Please input a description!"
          }
        ]}
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="addressA"
        label="Address Point A"
        rules={[
          { required: true,
          message: "Please input an address point A!" 
        }
      ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="addressB"
        label="Address Point B"
        rules={[
          {
            required: true,
            message: "Please input an address point B!"
          }
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
            message:"Invalid number of passengers!"
          },
        ]}
      >
        <InputNumber min={0} max={8} />
      </Form.Item>
      <Form.Item
        name="capacity"
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
            message: "Please select your vehicle type!"
          },
        ]}
      >
        <Select placeholder="Please select a type">
          <Option value="car">Car</Option>
          <Option value="train">Train</Option>
          <Option value="bus">Bus</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="time"
        label="Select Date and Time"
        rules={[
          {
            required: true,
            message: "Please select a date and time!"
          },
        ]}
      >
        <DatePicker showTime showSecond={false}/>
      </Form.Item>
      <Form.Item
        name="price"
        label="Price"
        rules={[
          {
            required: true, 
            message:"Please enter a price!"
          } ]}>
        <InputNumber min={0} formatter={value => `$ ${value}`}  />
      </Form.Item>
      <Form.Item {...layout2}>
        <Button type="primary" htmlType="submit">
          Post Ad
        </Button>
      </Form.Item>
    </Form>
  );
}
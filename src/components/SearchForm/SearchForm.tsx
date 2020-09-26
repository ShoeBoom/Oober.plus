// shubham
import { Form, Input, Button, AutoComplete, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import cities from "./canadacities.json"

const getVals = (str: string) => {
  let values = []

  cities.forEach((v, i) => {
    if (v.toLowerCase().startsWith(str.toLowerCase())){
      values.push({
        value: v,
      })
    }
  })

  return values;
};

export function SearchForm() {
  const onFinish = (values) => {
    console.log(`Received values of form:, `, values);
  };
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText ? [] : getVals(searchText)
    );
  };
  return (
    <Form name="search" onFinish={onFinish} requiredMark="optional">
      <div className="flex flex-row justify-between items-center" >
        <Form.Item
          className="flex-grow"
          name="location1"
          rules={[{ required: true, message: ' ' }]}
        >
          <AutoComplete
            options={options}
            className="w-full"
            onSearch={onSearch}
            placeholder="From"
          />
        </Form.Item>
        
        <ArrowRightOutlined className="h-full mx-4 mb-6 " />

        <Form.Item
          className="flex-grow"
          name="location2"
          rules={[{ required: true, message: ' ' }]}
        >
          <AutoComplete
            options={options}
            className="w-full"
            onSearch={onSearch}
            placeholder="To"
          />
        </Form.Item>
      </div>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

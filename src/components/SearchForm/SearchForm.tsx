// shubham
import { Form, Input, Button, AutoComplete, DatePicker, Space } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useState } from "react";
import cities from "./canadacities.json"
import moment from "moment";
import { truncate } from "fs/promises";
import {useRouter} from "next/router"

const getVals = (str: string) => {
  let values = []

  cities.forEach((v, i) => {
    if (v.toLowerCase().startsWith(str.toLowerCase())) {
      values.push({
        value: v,
      })
    }
  })

  return values;
};

interface Props {
  onSubmit?(v): void,
  initOrigin?: string,
  initDest?: string,
  initFrom?: number,
  initTo?: number,

}

export function SearchForm({ onSubmit, initOrigin = "", initDest = "", initFrom, initTo }: Props) {
  const router = useRouter()
  const onFinish = (values) => {
    console.log(`Received values of form:, `, values);
    router.push(`/search?origin=${values.location1}&dest=${values.location2}&from=${values.minTime.unix()}&to=${values.maxTime.unix()}`)
    router.reload()
    onSubmit(values);
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
          initialValue={initOrigin}
          rules={[{ required: true, message: ' ' }]}
        >
          <AutoComplete
            options={options}
            className="w-full"
            onSearch={onSearch}
            placeholder="Origin"
          />
        </Form.Item>

        <ArrowRightOutlined className="h-full mx-4 mb-6 " />

        <Form.Item
          className="flex-grow"
          name="location2"
          initialValue={initDest}
          rules={[{ required: true, message: ' ' }]}
        >
          <AutoComplete
            options={options}
            className="w-full"
            onSearch={onSearch}
            placeholder="Destination"
          />
        </Form.Item>
      </div>

      <Space className="flex flex-row">
        <Form.Item
          className=""
          label="Departs From"
          name="minTime"
          rules={[{ required: true, message: ' ' }]}
        >
          <DatePicker showTime showSecond={false}/>
        </Form.Item>
        <Form.Item
          className=""
          label="To"
          name="maxTime"
          rules={[{ required: true, message: ' ' }]}
        >
          <DatePicker showTime showSecond={false} />
        </Form.Item>
      </Space>


      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

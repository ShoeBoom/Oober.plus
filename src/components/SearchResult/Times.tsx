//edited by Vimal
import { Button, Space } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export function Times({datePosted, departureTime}) {
  return (
    <div className="flex flex-row justify-between">
              <p>Date Posted: {datePosted}</p>
              <p className="text-lg ">Time: {departureTime}</p>
            </div>
  );
}

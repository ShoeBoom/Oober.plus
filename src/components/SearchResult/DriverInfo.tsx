//edited by Vimal
import { Button, Space } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export function DriverInfo({ vehicleName, driverName, rating, telNumber, openMessages }) {
  return (
    <div className="w-full h-full">
      <div className="p-2" >{vehicleName}</div>
      <div className="flex flex-row justify-between">

        <Space className="flex flex-row flex-grow p-2">
          <div className="flex flex-col text-base">
            <div> Driver: {driverName}</div>
            <div> rating: {rating}</div>
          </div>
        </Space>

        <Space className="flex flex-row flex-grow  p-2">
          <div onClick={openMessages}>
            <MessageOutlined className="text-5xl" />
          </div>

          <div className="flex flex-col text-base">
            <div className="bg-gray-400" > Contact</div>
            <div> Tel #: {telNumber}</div>
          </div>
        </Space>

      </div>
    </div>
  );
}

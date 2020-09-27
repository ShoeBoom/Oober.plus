//edited by Vimal
import { Button, Space, Rate } from "antd";
import { MessageOutlined } from "@ant-design/icons";

export function DriverInfo({vehicleName, driverName, rating, openMessages, telNumber}) {
  return (
    <div className="w-full h-full" >
      <div className="p-2" >{vehicleName}</div>
      <div className="flex flex-row justify-between">

        <Space className="flex flex-row flex-grow p-2">
          <div className="flex flex-col text-base" style={{ whiteSpace:'nowrap'}}>
            <div> Driver: {driverName}</div>
            <Rate disabled defaultValue={rating} value={rating} />
          </div>
        </Space>

        <Space className="flex flex-row flex-grow  p-2">
          <div onClick={openMessages}>
            <MessageOutlined className="text-5xl" />
          </div>

          <div className="flex flex-col text-base" style={{overflow:'auto', whiteSpace:'nowrap'}}>
            <div className="bg-gray-400" > Contact</div>
            <div> Tel #: {telNumber}</div>
          </div>
        </Space>

      </div>
    </div>
  );
}

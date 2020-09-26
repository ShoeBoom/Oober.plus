//edited by Vimal
import { Button, Space } from "antd";

export function RideInfo({ vehicleType, passengerNum, price}) {
  return (
    <div className="w-full h-full">
      <div className="p-2" > Type: {vehicleType}</div>
      <div className="flex flex-row justify-between">

        <Space className="flex flex-row flex-grow p-2">
          <div className="flex flex-col text-base">
            <div className="text-3xl"> Passengers: {passengerNum}</div>
          </div>
        </Space>

        <Space className="flex flex-row flex-grow  p-2">
          <div className="flex flex-col text-base">
            <div className="text-4xl text-green-600 font-semibold"> ${price}</div>
          </div>
        </Space>

      </div>
    </div>
  );
}

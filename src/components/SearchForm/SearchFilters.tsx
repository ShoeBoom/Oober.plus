import { Input, Rate, InputNumber, Checkbox, Space } from "antd";
import { useState, useEffect } from "react";

const CheckboxGroup = Checkbox.Group;

const options = ["car", "bus", "train"];

interface SearchFiltersProps {
  onChange?(v: { seats: number, price: { min: number, max: number }, vehicleType: string[] }): void;
}

export function SearchFilters({ onChange: onChangeParent }: SearchFiltersProps) {
  const [seats, setSeats] = useState(1)
  const [price, setPrice] = useState({ min: 0, max: 10 })
  const [vehicleType, setVehicleType] = useState(["car", "bus", "train"])

  useEffect(() => {
    onChangeParent({ seats,  price, vehicleType })
  }, [seats, price, vehicleType])


  function onChangeSeats(value) {
    setSeats(value)
  }

  function onChangeMinDollar(value) {
    setPrice({
      ...price,
      min: value
    })
  }

  function onChangeMaxDollar(value) {
    setPrice({
      ...price,
      max: value
    })
  }

  function onChangeVehicleType(checkedValues) {
    setVehicleType(checkedValues)
  }


  return (
    <Space direction="vertical" size="middle">

      <div>
        Min # Available Seats:
        <br />
        <InputNumber min={1} defaultValue={1} onChange={onChangeSeats} />
      </div>
      <div>
        Price Range:
        <br />
        <InputNumber
          style={{
            width: 100,
            textAlign: 'center'
          }}
          placeholder="Minimum"
          min={0}
          defaultValue={0}
          formatter={value => `$ ${value}`}
          onChange={onChangeMinDollar} />
        <Input
          className="site-input-split"
          style={{
            width: 35,
            borderLeft: 0,
            borderRight: 0,
            pointerEvents: 'none',
          }}
          placeholder="to"
          disabled />
        <InputNumber
          className="site-input-right"
          style={{
            width: 100,
            textAlign: 'center',
          }}
          placeholder="Maximum"
          defaultValue={10}
          formatter={value => `$ ${value}`}
          onChange={onChangeMaxDollar} />
      </div>

      <div className="flex flex-col">
      Vehicle Type:
        <Checkbox.Group options={options} defaultValue={options} onChange={onChangeVehicleType} />
      </div>


    </Space>
  );
}

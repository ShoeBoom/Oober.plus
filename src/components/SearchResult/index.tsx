//edited by Vimal
import { Button, Image } from "antd";
import { DriverInfo } from "./DriverInfo";
import { RideInfo } from "./RideInfo";
import { Times } from "./Times"
import { MessageOutlined } from "@ant-design/icons";
import firebase from "@utils/client/client";
import "firebase/auth";

export function SearchResult({ telNumber = "123-123-1234", vehicleName = "Toyota JUMBO TRUCK", driverName = "Mohammed", rating = "3", openMessages = "", vehicleType = "XL", passengerNum = "4/5", price = "50", datePosted = 1600937473000, departureTime = 1601182229381 }) {

	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	const firstDate = new Date(datePosted)
	const secondDate = new Date();

	//TODO: fix days ago when less than 0
	const daysAgoString = `${Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay))} days ago`;
	const departureTimeString = new Date(departureTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });




	// const uid = firebase.auth().currentUser.uid;

	return (
		<div className="flex flex-row border-solid border-gray-500 border-opacity-50 border-2">
			<Image className="border-solid border-gray-500 border-opacity-25 border-2 m-2" width={160} src="https://i.redd.it/cndqmggyr0p51.png" />

			{/**border-radius:1px border-color:#000 width:250px height 250px */}
			<div>
				<div className="flex flex-row flex-grow  p-2"> {/* */}
              <DriverInfo
						telNumber={telNumber}
						vehicleName={vehicleName}
						driverName={driverName}
						rating={rating}
						openMessages={openMessages} />

					<RideInfo
						vehicleType={vehicleType}
						passengerNum={passengerNum}
						price={price} />

				</div>


				<hr />
				<div className="divide-y-2 divide-grey-500 divide-dashed">
				</div>


				<Times
					datePosted={daysAgoString}
					departureTime={departureTimeString} />
			</div>

		</div>
	);
}

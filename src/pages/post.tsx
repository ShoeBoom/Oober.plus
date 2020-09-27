import Head from "next/head";
import { SubmitForm } from "@components/SubmitForm";
import moment from "moment";
import firebase from "@utils/client/client";
import "firebase/firestore"
import "firebase/auth"

export default function Home() {
	async function post(values: {
		title: string,
		description: string,
		price: number,
		addressA: string,
		addressB: string,
		passengers: number,
		capacity: number,
		vehicleType: string,
		time: moment.Moment
	}) {
		// add data to firestore
		const db = firebase.firestore();

		const depTime = values.time.unix();

		const uid = firebase.auth().currentUser.uid;

		await db.collection("listing").add({
			title: values.title,
			description: values.description,
			capacity: values.capacity,
			dest: values.addressB,
			depTime: depTime,
			origin: values.addressA,
			price: values.price,
			seatsRemaining: values.passengers,
			type: values.vehicleType,
			uid: uid
		})
	}

	return (
		<div>
			<Head>
				<title>SellerForm</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="text-2xl p-8 font-semibold">
				Post an Advertisement
      		</div>
			<SubmitForm onFinish={post} />
		</div>
	);
}

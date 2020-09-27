import client from "firebase/app";

if (client.apps.length === 0) {
	const config = require("./firebaseApp.json");
	client.initializeApp(config);
}
export default client;
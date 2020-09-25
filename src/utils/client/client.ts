import client from "firebase/app";

if (!client.apps.length && typeof window !== "undefined") {
	const config = require("./firebaseApp.json");
	client.initializeApp(config);
}
export default client;
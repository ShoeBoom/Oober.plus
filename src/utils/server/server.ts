import * as admin from "firebase-admin";

let server: admin.app.App;

if (typeof window === "undefined") {
	if (admin.apps.length == 0) {
		const data = JSON.parse(
			Buffer.from(process.env.GCLOUD_CREDENTIALS, "base64").toString()
		);
		admin.initializeApp({
			credential: admin.credential.cert(data),
			projectId: process.env.PROJECT_ID,
		});
	}

	server = admin.apps[0];
}
export default server;
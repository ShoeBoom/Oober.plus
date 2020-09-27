import Head from 'next/head'
import { message } from "antd"
import { RegisterForm } from "@components/UserActions/Register";
import firebase from '@utils/client/client'
import '@firebase/auth'
import "@firebase/firestore"
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()
    async function onRegister(values) {
        console.log(values)
        try {
            await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
            const uid = firebase.auth().currentUser.uid;
            await firebase.firestore().collection("user").doc(uid).set({
                phone: values.phone,
                name: values.name,
                uid: uid,
            });
            message.success("Registered")
            let unsub;
            unsub = firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    router.push("/");
                    unsub()
                }
            })
        } catch (error) {
            message.error("Error");
        }
    }

    return (
        <div>
            <Head>
                <title>Register</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="text-2xl p-8 font-semibold">
                Register
        </div>
            <RegisterForm onFinish={onRegister} />
        </div>
    )
}
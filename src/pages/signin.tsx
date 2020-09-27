import Head from 'next/head'
import firebase from '@utils/client/client'
import '@firebase/auth'
import { useRouter } from 'next/router'
import { SignInForm } from "@components/UserActions/SignInForm";

export default function SignIn() {
  const router = useRouter()
  async function login(values) {
    console.log(values)
    await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
    let x;
    x = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        router.back();
        x()
      }
    })

    //promise.catch(e => console.log(e.message));
  }

  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl p-8 font-semibold">
        Sign In
        </div>
      <SignInForm onComplete={login} />
    </div>
  )
}

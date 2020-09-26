import Head from 'next/head'

import {SignInForm} from "@components/UserActions/SignInForm";

export default function SignIn() {
  return (
    <div>
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className="text-2xl p-8 font-semibold">
          Sign In
        </div>
      <SignInForm/>
    </div>
  )
}

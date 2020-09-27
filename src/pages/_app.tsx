import '@styles/globals.css'
import 'antd/dist/antd.css'
import { Navbar } from "@components/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

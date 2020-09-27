import Head from "next/head";
import { SearchForm } from "@components/SearchForm/SearchForm";
import styles from "@styles/index.module.css";

export default function SearchPage() {
  return (
    <div className={styles.test} >
      <Head>
        <title>Oober</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center justify-center">
        <div className="flex flex-col items-center m-10 mb-4 bg-white p-6 rounded-lg" >
          <div className="text-3xl pb-5" >
            Together We Travel
      </div>
          <SearchForm />
        </div>
      </div>

    </div>

  );
}
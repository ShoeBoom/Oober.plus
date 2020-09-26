import Head from "next/head";
import { SearchResult } from "@components/SearchResult";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchResult />
    </div>
  );
}

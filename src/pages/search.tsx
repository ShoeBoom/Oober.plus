import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from "react";
import { Divider, Layout } from "antd";
import { SearchForm } from "@components/SearchForm/SearchForm";
import { SearchFilters } from "@components/SearchForm/SearchFilters";

const { Header, Content, Footer } = Layout;

export const getServerSideProps: GetServerSideProps = async (context) => {
    // console.log(context.query)
    const origin = context.query.origin;
    const dest = context.query.dest;

    return {
        props: {
            data: {
                origin: origin,
                dest: dest,
                // from: context.query.from,
                // to: context.query.to
            }
        }
    }
}

export default function SearchPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [origin, setOrigin] = useState(data.origin)
    const [dest, setDest] = useState(data.dest)
    // const [from, setFrom] = useState(data.from)
    // const [to, setTo] = useState(data.to)
    return (
        <div>
            <Head>
                <title>{`From ${origin} to ${dest}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider type="vertical" className="m-10" />
            <div className="flex items-center justify-center">
                <div className="m-10 mb-4 w-2/4" >
                    <SearchForm initDest={dest} initOrigin={origin}/>
                </div>
            </div>
            <Divider />
            <div className="flex m-5 ml-10 h-full">
                <SearchFilters onChange={() => {}}/>
                
            </div>


        </div>
    );
}

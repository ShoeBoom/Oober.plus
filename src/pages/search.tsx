import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useState } from "react";
import { Divider, Layout } from "antd";
import { SearchForm } from "@components/SearchForm/SearchForm";
import { SearchFilters } from "@components/SearchForm/SearchFilters";
import { Query } from "@utils/client/firestoreQueryBuilder";

import firebase from "@utils/client/client";
import "@firebase/firestore"
import { SearchResult } from "@components/SearchResult";

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
                from: context.query.from,
                to: context.query.to
            }
        }
    }
}

export default function SearchPage({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    const [origin, setOrigin] = useState(data.origin)
    const [dest, setDest] = useState(data.dest)
    // const [from, setFrom] = useState(data.from)
    // const [to, setTo] = useState(data.to)
    const [list, setlist] = useState([<div />])


    async function onChangeFilters({ seats, price, vehicleType }) {
        console.log(seats)
        const db = firebase.firestore();
        let doc = await db.collection("listing")
            .where("origin", "==", origin)
            .where("dest", "==", dest)
            // .where("seatsRemaining", ">=", seats)
            // .where("depTime", ">=", data.from)
            // .where("depTime", "<=", data.to)
            .where("price", ">=", price.min)
            .where("price", "<=", price.max)
            .where("type", "in", vehicleType).limit(10).get()

        const docs = doc.docs;
        const alist = docs.map(doc =>

            (<SearchResult datePosted={doc.data().datePosted}
                departureTime={Math.random()}
                driverName={doc.data.name}
                passengerNum={`${Math.abs(doc.data().capacity - doc.data().seatsRemaining)}/${doc.data().capacity}`}
                price={doc.data().price}
                rating={doc.data().rating}
                telNumber={doc.data().tel}
                vehicleName={doc.data().title}
                vehicleType={doc.data().type} />
            ))
        /* tslint:disable-next-line */
        setlist(alist);


    }
    return (
        <div>
            <Head>
                <title>{`From ${origin} to ${dest}`}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Divider type="vertical" className="m-10" />
            <div className="flex items-center justify-center">
                <div className="m-10 mb-4 w-2/4" >
                    <SearchForm initDest={dest} initOrigin={origin} />
                </div>
            </div>
            <Divider />
            <div className="flex m-5 ml-10 h-full">
                <SearchFilters onChange={onChangeFilters} />
                <div className="flex-grow">
                    {list}

                </div>
            </div>



        </div>
    );
}

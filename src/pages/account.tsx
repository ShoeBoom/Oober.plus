import Head from "next/head";
import React, { useEffect, useState } from 'react';
import firebase from "@utils/client/client";
import "@firebase/firestore"
import '@firebase/auth'
import styles from "@styles/index.module.css";

export default function Account() {
    const [name, setName] = useState('hello');
    const [email, setEmail] = useState('hello');
    const [phone, setPhone] = useState('hello');
useEffect(() => {
    
    const db = firebase.firestore();
    
    let email = firebase.auth().currentUser.email;
    setEmail(email);
    
    let name, phone;
    
    const database =  db.collection('user');
    let info = database.doc(firebase.auth().currentUser.uid).get()
    .then(function(doc){
        name = doc.data().name;
        phone = doc.data().phone;
        setName(name);
        setPhone(phone);
    });

    
});

  return (
    <div className="hello">
        <Head>
            <title> Account </title>
        </Head>
        {/**Get  Email from firebasee auth, name, and phone from firestore*/}
        <div className = {styles.absolutelyCentered}>
            <img className="border-solid border-gray-500 border-opacity-25 border-2 m-2" width={160} src="https://i.redd.it/cndqmggyr0p51.png" />
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    </div>

  );
}
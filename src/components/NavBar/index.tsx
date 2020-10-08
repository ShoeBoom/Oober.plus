import React, { useState } from "react";
import { Button } from "antd";
import { FormOutlined } from "@ant-design/icons";
import Link from "next/link";
import style from './navbar.module.css';
import { useRouter } from 'next/router'
import firebase from "@utils/client/client";
import "firebase/auth";

export function Navbar() {
    // TODO: VIMAL: implement default state for loginstate
    const isSignedOut = !(firebase.auth().currentUser);
    const [loginStatus, setLoginStatus] = useState(!isSignedOut);

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    })

    const router = useRouter()
    async function logout() {
        await firebase.auth().signOut();
        router.reload()
    }

    return (
        <nav className={style["navbar"]} id="nav">
            <div className="nav-left">
                <Link href="/">
                    <div className={style["nav-item"]}>
                        <img className="h-10 mb-2" src="/oober.svg" />
                    </div>
                </Link>
            </div>
            {loginStatus ?
                <div className={style["nav-right"]}>
                    <div className={style["nav-item"]}>
                        <Link href="/post"><FormOutlined className="text-2xl"/></Link>
                    </div>
                    <div className={style["nav-item"]}>
                        <Link href="/account">
                            <svg width="40px" height="40px">
                                <defs>
                                    <pattern id="image" x="0%" y="0%" height="100%" width="100%" viewBox="0 0 512 512">
                                        <image x="0%" y="0%" width="512px" height="512px" xlinkHref="https://i.redd.it/cndqmggyr0p51.png" />
                                    </pattern>
                                </defs>
                                <circle id="sd" className="medium" cx="50%" cy="50%" r="40%" fill="url(#image)" stroke="black" strokeWidth="3%" />
                            </svg>
                        </Link>
                    </div>
                    <div className={style["nav-item"]}>
                        <Button type="primary" onClick={() => { logout() }}>Log Out</Button>
                    </div>
                </div>
                :
                <div className={style["nav-right"]}>
                    <div className={style["nav-item"]}>
                        <Link href="/signin">
                            <Button type="primary">Log In</Button>
                        </Link>

                    </div>
                </div>
            }
        </nav>
    );
}
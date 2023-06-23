"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export default function Login() {
    const {data: session} = useSession()

    if (session){
        return (
            <div className="flex justify-center">
                <button className="flex" onClick={() =>signOut()}>
                <Image className="mr-2"
                        src={session.user.image}
                        width={30}
                        height={30}
                        alt="Logo google"/>
                    Logout</button>
            </div>
        )
    }

        return (
            <div className="flex justify-center">
                <button className="flex" onClick={() =>signIn()}>
                    <Image className="mr-2"
                        src={'images/google.svg'}
                        width={30}
                        height={30}
                        alt="Logo google"/> Login Google
                </button>
            </div>
        )
}
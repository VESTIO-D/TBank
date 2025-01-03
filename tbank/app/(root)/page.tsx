"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import {  signUp } from '../libs/user/user.actions';

interface loginData {
    email: string;
    password: string;
};

const Home = () => {
    const [loginData, setloginData] = useState<loginData>({
        email: "",
        password: "",
    });

    console.log(loginData)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = loginData;

        try {
            const response = await signUp(email, password);
            console.log('Full Response:', response); // Log the response object
            console.log('JWT Token:', response.jwt);
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
    <section className="h-screen w-full bg-zinc-200/80">

        <div className="bg-gradient-to-tr from-sky-300/90 to-sky-800/95 px-6 py-3 h-[150px]">
        <div className="flex justify-between gap-3 items-center w-full text-white">
            <h1 className="text-xl font-bold">TBANK</h1>
            <a href="/" className="">help ?</a>
        </div>
        <p className="font-serif text-white text-[12px] font-light mb-12">
            Hi,
            <span className="uppercase text-[12px] ">User</span>
        </p>
        </div>

        <div className="sm:bg-zinc-100 place-items-center p-4 bg-transparent mt-[-80px]">
            <div className="min-w-[350px] px-3 py-5 h-auto bg-zinc-100 shadow-xl  rounded-2xl">
                <form
                        action=""
                        className=""
                        onSubmit={handleSubmit}
                >
                    <div className="mb-4">
                        <input
                                type="email"
                                name="username"
                                placeholder="username"
                                className="p-2 mt-4 w-full rounded-lg outline-none bg-zinc-200/95"
                                onChange={(e) => setloginData({...loginData, email: e.target.value})}
                        />
                    </div>

                    <div className="mb-4">
                        <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                                onChange={(e) => setloginData({...loginData, password: e.target.value})}
                        />
                    </div>

                    <button
                            type="submit"
                            className="mb-3 bg-sky-900/85 text-zinc-100 p-2 w-full rounded-xl font-semibold"
                    >
                        Log in
                    </button>
                    <div className="flex justify-between px-2">
                        <p className="text-[12px] md:text-sm">new registration?</p>
                        <Link
                        href="/signin" 
                        className="text-sky-700/95 text-[12px] md:text-sm"
                        >
                            Signin
                        </Link>
                    </div>
                    

                </form>
            </div>
        </div>

        <div className="">
        <div className="px-3 py-4 grid place-items-center">
            <a
            href="/" 
            className=""
            >

                <div className="bg-zinc-50 rounded-xl py-3 px-4 shadow-md min-w-[350px]">
                    <h2 className="text-xs md:text-sm font-semibold">
                        VIEW BALANCE
                    </h2>
                    <p className="text-xs md:text-sm font-thin font-ibm-plex-serif">
                            View account balance and recent transactions
                    </p>
                </div>
                
            </a>

        </div>
        </div>

        


    </section>
    )
    }

    export default Home

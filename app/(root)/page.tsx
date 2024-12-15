"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const Home = () => {

const [showForm, setShowForm] = useState(false);

return (
<section className="h-screen grid w-full gap-2">

    <div className={`${
         showForm ?
    "h-[250px]" : "h-[150px]"
    } bg-gradient-to-tr from-sky-300/90 to-sky-800/95 px-4 py-3 transition-all duration-300`}>
    <div className="flex justify-between gap-3 items-center w-full">
        <h1 className="text-xl font-bold">TBANK</h1>
        <a href="/" className="">help</a>
    </div>
    <h3 className="font-serif">
        Hi,
        <span className="uppercase">User</span>
    </h3>

    <div className="flex justify-center gap-4 mt-5 mb-4">
        <Link href="/signin">
        <button className="bg-zinc-100 rounded-xl px-4 py-2 outline-none ring-inset ring-1">SIGN IN</button>
        </Link>
        <button onClick={() => setShowForm((prev) => !prev)} className="bg-zinc-100 rounded-xl px-4 py-2 outline-none ring-inset ring-1">LOG
        IN</button>
    </div>
    <div className={`place-items-center ${
         showForm ?
    "block" : "hidden"
    } transition-all duration-300`}>
    <div className="w-[300px] p-3 h-auto bg-zinc-100  rounded-lg shadow-xl">
        <form
                action=""
                className=""
        >
            <div className="mb-4">
                <input
                        type="email"
                        name=""
                        id=""
                        placeholder="username"
                        className="p-2 w-full rounded-xl outline-none bg-zinc-200/95"
                />
            </div>

            <div className="mb-4">
                <input
                        type="email"
                        name=""
                        id=""
                        placeholder="password"
                        className="p-2 w-full rounded-xl outline-none bg-zinc-200/95"
                />
            </div>

            <button
                    type="submit"
                    className="mb-4 bg-sky-900/85 text-zinc-100 p-2 w-full rounded-xl"
            >
                Log in
            </button>

        </form>
    </div>
    </div>
    </div>

    <div className="">
      hello
    </div>

    


</section>
)
}

export default Home

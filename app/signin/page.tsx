"use client";
import React, { useState } from 'react'
import Link from 'next/link'

interface userData {
  name: string;
  lastName:string;
  email: string;
  password: string;
  confirm: string;

}

const Signin = () => {
  const [userData, setUserData] = useState<userData>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });
  console.log(userData)
  return (
    <section className="grid h-screen w-full bg-zinc-200/80">

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

    <div className="place-items-center transition-all duration-300 p-4 bg-transparent mt-[-80px]">
        <div className="p-3 h-auto bg-zinc-100 shadow-xl  rounded-2xl">
            <form
                    action=""
                    className="p-4"
            >

              <h2 className="text-center font-bold text-xl text-zinc-700/85 mb-8">Sign in</h2>

                <div className="mb-5 flex justify-center gap-2">
                    <input
                            type="text"
                            name="name"
                            placeholder="First Name"
                            className="p-2  w-full rounded-lg outline-none bg-zinc-200/95"
                            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
                    />

                    <input
                            type="text"
                            name="lastName"
                            placeholder="lastName"
                            className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                            onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                    />
                </div>

                <div className="mb-5">
                    <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                    />
                </div>

                <div className="mb-5">
                    <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                    />
                </div>

                <div className="mb-5">
                    <input
                            type="password"
                            name="confirm"
                            placeholder="confirm password"
                            className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                            onChange={(e) => setUserData({ ...userData, confirm: e.target.value })}
                    />
                </div>

                <button
                        type="submit"
                        className="mb-8  bg-sky-900/85 text-zinc-100 p-2 w-full rounded-xl font-semibold"
                >
                    Log in
                </button>
                <div className="flex justify-between px-2">
                    <p className="text-[12px] md:text-sm">already registered</p>
                    <Link
                    href="/" 
                    className="text-sky-700/95 text-[12px] md:text-sm"
                    >
                        Login
                    </Link>
                </div>
                

            </form>
        </div>
    </div>

    <div className=" h-screen">
      <div className="px-3 py-4 grid place-items-center">
        <a
         href="/" 
         className=""
         >

            
            
         </a>

      </div>
    </div>

    


</section>
  )
}

export default Signin

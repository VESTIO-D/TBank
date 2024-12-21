"use client";
import React, { useState } from "react";
import Link from "next/link";

interface UserData {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirm: string;
}

const Signin = () => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [errors, setErrors] = useState<Partial<UserData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<UserData> = {};

    if (!userData.name) newErrors.name = "First name is required.";
    if (!userData.lastName) newErrors.lastName = "Last name is required.";
    if (!userData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!userData.password) {
      newErrors.password = "Password is required.";
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (userData.confirm !== userData.password) {
      newErrors.confirm = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully", userData);
      // Handle successful submission logic here
    } else {
      console.log("Form has errors", errors);
    }
  };

  return (
    <section className="grid h-screen w-full bg-zinc-200/80">
      <div className="bg-gradient-to-tr from-sky-300/90 to-sky-800/95 px-6 py-3 h-[150px]">
        <div className="flex justify-between gap-3 items-center w-full text-white">
          <h1 className="text-xl font-bold">TBANK</h1>
          <a href="/" className="">
            help ?
          </a>
        </div>
        <p className="font-serif text-white text-[12px] font-light mb-12">
          Hi, <span className="uppercase text-[12px] ">User</span>
        </p>
      </div>

      <div className="place-items-center transition-all duration-300 p-4 bg-transparent mt-[-80px]">
        <div className="p-3 h-auto bg-zinc-100 shadow-xl rounded-2xl">
          <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-center font-bold text-xl text-zinc-700/85 mb-8">
              Sign in
            </h2>

            <div className="mb-5 flex justify-center gap-2">
              <div>
                <h3 className="px-1 font-inter text-zinc-900/60 font-semibold mb-1">
                  First name
                </h3>
                <input
                  type="text"
                  name="name"
                  placeholder="First Name"
                  className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                  onChange={(e) =>
                    setUserData({ ...userData, name: e.target.value })
                  }
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <h3 className="px-1 font-inter text-zinc-900/60 font-semibold mb-1">
                  Last name
                </h3>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                  onChange={(e) =>
                    setUserData({ ...userData, lastName: e.target.value })
                  }
                />
                {errors.lastName && (
                  <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="mb-5">
              <h3 className="px-1 font-inter text-zinc-900/60 font-semibold mb-1">
                Email
              </h3>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="mb-5">
              <h3 className="px-1 font-inter text-zinc-900/60 font-semibold mb-1">
                Password
              </h3>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="mb-5">
              <h3 className="px-1 font-inter text-zinc-900/60 font-semibold mb-1">
                Confirm Password
              </h3>
              <input
                type="password"
                name="confirm"
                placeholder="Confirm Password"
                className="p-2 w-full rounded-lg outline-none bg-zinc-200/95"
                onChange={(e) =>
                  setUserData({ ...userData, confirm: e.target.value })
                }
              />
              {errors.confirm && (
                <p className="text-red-500 text-xs mt-1">{errors.confirm}</p>
              )}
            </div>

            <button
              type="submit"
              className="mb-8 bg-sky-900/85 text-zinc-100 p-2 w-full rounded-xl font-semibold"
            >
              Log in
            </button>
            <div className="flex justify-between px-2">
              <p className="text-[12px] md:text-sm">Already registered?</p>
              <Link href="/" className="text-sky-700/95 text-[12px] md:text-sm">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signin;

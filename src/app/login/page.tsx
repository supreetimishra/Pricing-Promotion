"use client";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    console.log("email, pass");

    await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    router.push("/home");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard");
    } else {
      setError("");
    }
  };

  return (
    <div className="flex flex-row items-center justify-center bg-white-100">
      <div className="flex-1">
        <img
          src="login/background.svg"
          alt=""
          style={{
            height: "100%",
            maxHeight: "100vh",
            width: "85%",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="flex-1">
        <div className="bg-white ml-8 p-8 rounded-lg shadow-xl w-[65%] text-napoleon">
          <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
          <p className="text-sm mb-10 text-center">
            Please login or Sign-up to create a new account!
          </p>
          <div>{error}</div>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email*"
                className="bg-mangnolia bg-opacity-70 text-lg w-full px-4 py-2 border border-mercury border-opacity-70 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-8">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password*"
                className="bg-mangnolia bg-opacity-70 text-lg w-full px-4 py-2 border border-mercury border-opacity-70 rounded-md focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white text-lg py-2 rounded-md"
              >
                Login
              </button>
            </div>
          </form>
          <p className="my-1 text-right font-bold text-napoleon text-xs">
            Forget Password
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

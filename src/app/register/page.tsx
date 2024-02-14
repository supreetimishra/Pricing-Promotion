"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  jobRole: string;
  country: string;
  email: string;
  password: string;
  reEnterPassword: string;
}

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    jobRole: "",
    country: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const {
    firstName,
    middleName,
    lastName,
    jobRole,
    country,
    email,
    password,
    reEnterPassword,
  } = formData;

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    console.log("FormData ", formData);

    if (!isValidEmail(formData.email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    if (password !== reEnterPassword) {
      setError("Re-entered Password do not match");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          middleName,
          lastName,
          jobRole,
          country,
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div className="h-screen-80 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-2 text-center">
          Create an Account
        </h2>
        <p className="text-sm mb-8 text-center text-gray-600">
          Please login or Sign-up to create a new account!
        </p>
        <div>{error}</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name*"
              value={formData.firstName}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Middle Name"
              value={formData.middleName}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name*"
              value={formData.lastName}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password*"
              value={formData.password}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="reEnterPassword"
              name="reEnterPassword"
              placeholder="Re-enter Password*"
              value={formData.reEnterPassword}
              onChange={handleChange}
              className="text-sm w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-lg py-2 rounded-md"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

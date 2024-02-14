"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { label: "Product", path: "#products" },
  { label: "Pricing", path: "#pricing" },
  { label: "Resources", path: "#resources" },
  { label: "Blogs", path: "#blogs" },
  { label: "Contact Us", path: "#contact" },
];

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-mangnolia shadow-md w-full fixed top-0 left-0 right-0 px-6 h-14 flex justify-between items-center mx-auto font-inter text-base">
        <Link href="/">
          <Image
            src="logo.svg"
            alt="Logo"
            width={150}
            height={50}
            objectFit="contain"
            className="mt-4"
          />
        </Link>
        <div className="flex-1 ml-20">
          <div className="flex-1 flex md:flex flex-col md:flex-row gap-6 items-center absolute md:relative justify-center right-0 md:bg-transparent p-4 md:p-0">
            {menuItems.map((item) => (
              <Link href={item.path}>{item.label}</Link>
            ))}
          </div>
        </div>

        <div className="flex gap-1 justify-center items-center font-inter text-base">
          <span>Hey, Manish!</span>

          <button className="px-5 py-1">
            <Image
              src="/header/person.svg"
              alt="Person"
              width="30"
              height="30"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

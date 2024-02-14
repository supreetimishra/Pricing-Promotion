"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const menuItems = [
    { label: "Data Integration", path: "#", imgSrc: "/sidebar/barItem.svg" },
    { label: "Variable Mapping", path: "#", imgSrc: "/sidebar/barItem.svg" },
    { label: "Data Validation", path: "#", imgSrc: "/sidebar/barItem.svg" },
    { label: "Feature Engineering", path: "#", imgSrc: "/sidebar/barItem.svg" },
    { label: "Model Building", path: "#", imgSrc: "/sidebar/barItem.svg" },
    { label: "Result", path: "#", imgSrc: "/sidebar/barItem.svg" },
  ];

  const [menuItemSelected, setMenuItemSelected] =
    useState<string>("Data Integration");

  return (
    <div className="bg-mangnolia shadow-md w-56 fixed left-0  top-14 h-full flex mx-auto font-inter text-sm ">
      <div className="flex flex-col mt-16 gap-3">
        {menuItems.map((item, index) => (
          <div
            className={`${menuItemSelected === item.label ? "bg-lavender rounded-md" : ""} px-6 py-2 flex flex-row gap-3 cursor-pointer`}
          >
            <Image
              src="sidebar/barItem.svg"
              alt="Line Bar"
              width="16"
              height="16"
              className=""
            />
            <Link href="/home">
              <span
                className="mr-2 w-full"
                key={index}
                onClick={() => setMenuItemSelected(item.label)}
              >
                {item.label}
              </span>
            </Link>
            {menuItemSelected === item.label && (
              <Image
                src="sidebar/lineBar.svg"
                alt="Line Bar"
                width="3"
                height="1"
                className="mx-auto -mr-2"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

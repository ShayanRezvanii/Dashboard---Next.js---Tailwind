"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlineSetting,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from "next/image";
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const closeDropdown = (e) => {
      setNav(false);
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const menuFunc = () => {
    setNav(!nav)
  
  };

  return (
    <div className="flex justify-between  w-full p-4 z-10 ">
      <div className="flex justify-between items-center w-full z-10 ">
          <div className="flex items-center">
            <div onClick={menuFunc} className="sm:hidden cursor-pointer z-10 ">
              {!nav ? (
                <AiOutlineMenu />
              ) : (
                <AiOutlineClose className="fixed " style={{ color: "white"}} />
              )}
            </div>
            <h2 className="font-bold pl-2 pr-2 sm:pl-0 ">DASHBOARD</h2>
          </div>

          <div className="flex justify-between max-w-[1240px] z-10 ">
            <ul className="hidden sm:flex">
              {path === "/" ? (
                <li className="px-2">
                  <Link
                    href="/"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/")}
                  >
                    Home
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/"
                    className=" px-2 text-black "
                    onClick={() => router.push("/")}
                  >
                    Home
                  </Link>
                </li>
              )}

              {path === "/customers" ? (
                <li className="px-2">
                  <Link
                    href="/customers"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/customers")}
                  >
                    Customers
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/customers"
                    className=" px-2 text-black "
                    onClick={() => router.push("/customers")}
                  >
                    Customers
                  </Link>
                </li>
              )}

              {path === "/projects" ? (
                <li className="px-2">
                  <Link
                    href="/projects"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/projects")}
                  >
                    Projects
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/projects"
                    className=" px-2 text-black "
                    onClick={() => router.push("/projects")}
                  >
                    Projects
                  </Link>
                </li>
              )}

              {path === "/tasks" ? (
                <li className="px-2">
                  <Link
                    href="/tasks"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/tasks")}
                  >
                    Tasks
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/tasks"
                    className=" px-2 text-black "
                    onClick={() => router.push("/tasks")}
                  >
                    Tasks
                  </Link>
                </li>
              )}

              {path === "/reporting" ? (
                <li className="px-2">
                  <Link
                    href="/reporting"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/reporting")}
                  >
                    Reporting
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/reporting"
                    className=" px-2 text-black "
                    onClick={() => router.push("/reporting")}
                  >
                    Reporting
                  </Link>
                </li>
              )}

              {path === "/users" ? (
                <li className="px-2">
                  <Link
                    href="/users"
                    className=" p-2 bg-black text-white rounded-lg "
                    onClick={() => router.push("/users")}
                  >
                    Users
                  </Link>
                </li>
              ) : (
                <li className="px-2">
                  <Link
                    href="/users"
                    className=" px-2 text-black "
                    onClick={() => router.push("/users")}
                  >
                    Users
                  </Link>
                </li>
              )}
            </ul>
          </div>


        {!nav ? (
          <div className="sm:hidden fixed w-full top-0 right-0 left-[-100%] bottom-0 flex justify-center items-center h-screen bg-black text-center ease-in duration-300"></div>
        ) : (
          <div className="sm:hidden fixed  w-[70%] top-0 right-0 left-0 bottom-0 flex justify-center  items-center max-h-screen bg-black text-center ease-in duration-300 rounded-r-2xl ">
            <ul className="block sm:hidden">
              <li className="py-2">
                <Link
                  href="/"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Profile
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/customers"
                  className=" p-2 text-white rounded-lg text-2xl hover:text-gray-300 "
                >
                  Customers
                </Link>
              </li>

              <li className="py-2 ">
                <Link
                  href="/projects"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Projects
                </Link>
              </li>

              <li className="py-2 ">
                <Link
                  href="/tasks"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Tasks
                </Link>
              </li>

              <li className="py-2 ">
                <Link
                  href="/reporting"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Reporting
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/users"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Users
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Notifications
                </Link>
              </li>

              <li className="py-2">
                <Link
                  href="/"
                  className="text-white text-2xl hover:text-gray-300"
                >
                  Setting
                </Link>
              </li>
            </ul>
          </div>
        )}

        <div className="md:flex w-full justify-end hidden ">
          <div className="flex">
            <div className="flex p-2 ">
              <div className="px-2">
                <AiOutlineSearch size={22} />
              </div>

              <div className="px-2">
                <AiOutlineSetting size={22} />
              </div>

              <div className="px-2">
                <IoIosNotificationsOutline size={22} />
              </div>
            </div>

            <div>
              <Image
                className="rounded-full"
                width="40"
                height="40"
                src="/photo_2022-09-04_00-45-18.jpg"
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

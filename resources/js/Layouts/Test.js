import React, { useEffect, useState } from "react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Logo from "../Components/UI/Logo";
import { Dropdown, DropdownItem } from "@windmill/react-ui";
import ResponsiveNavLink from "@/Components/Nav/ResponsiveNavLink";
import NavLink from "@/Components/Nav/NavLink";
import Icon from "@/Components/Nav/Icon";
import { Route } from "react-router-dom";
import { FaBeer } from "react-icons/fa";

export default function Guest({ title, auth, children }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    const [show, setShow] = useState(false);
    const [product, setProduct] = useState(false);
    const [deliverables, setDeliverables] = useState(false);
    const [profile, setProfile] = useState(false);
    return (
        <>
            <div className="absolute bg-gray-200 w-full h-full">
                {/* Navigation starts */}
                {/* Mobile */}
                <div
                    className={
                        show
                            ? "w-full h-full absolute z-40  transform  translate-x-0 "
                            : "   w-full h-full absolute z-40  transform -translate-x-full"
                    }
                >
                    <div
                        className="bg-gray-800 opacity-50 inset-0 fixed w-full h-full"
                        onClick={() => setShow(!show)}
                    />
                    <div className="w-64 z-20 absolute left-0 z-40 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                        <div className="flex flex-col justify-between h-full">
                            <div className="px-6 pt-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <svg
                                            aria-label="Home"
                                            id="logo"
                                            enableBackground="new 0 0 300 300"
                                            height={43}
                                            viewBox="0 0 300 300"
                                            width={43}
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                        >
                                            <g>
                                                <path
                                                    fill="#4c51bf"
                                                    d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                                />
                                            </g>
                                        </svg>
                                        <p className="text-bold md:text2xl text-base pl-3 text-gray-800">
                                            Ticket App
                                        </p>
                                    </div>
                                    <div
                                        id="cross"
                                        className=" text-gray-800"
                                        onClick={() => setShow(!show)}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-x"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            strokeWidth={1}
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <line
                                                x1={18}
                                                y1={6}
                                                x2={6}
                                                y2={18}
                                            />
                                            <line
                                                x1={6}
                                                y1={6}
                                                x2={18}
                                                y2={18}
                                            />
                                        </svg>
                                    </div>
                                </div>

                                <a>
                                    <div className="flex items-center pt-8">
                                        <div className="md:w-6 md:h-6 w-5 h-5">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="none"
                                            >
                                                <path
                                                    d="M7.16667 3H3.83333C3.3731 3 3 3.3731 3 3.83333V7.16667C3 7.6269 3.3731 8 3.83333 8H7.16667C7.6269 8 8 7.6269 8 7.16667V3.83333C8 3.3731 7.6269 3 7.16667 3Z"
                                                    stroke="#667EEA"
                                                    strokeWidth={1}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M7.16667 11.6667H3.83333C3.3731 11.6667 3 12.0398 3 12.5V15.8333C3 16.2936 3.3731 16.6667 3.83333 16.6667H7.16667C7.6269 16.6667 8 16.2936 8 15.8333V12.5C8 12.0398 7.6269 11.6667 7.16667 11.6667Z"
                                                    stroke="#667EEA"
                                                    strokeWidth={1}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.1667 11.6667H12.8333C12.3731 11.6667 12 12.0398 12 12.5V15.8334C12 16.2936 12.3731 16.6667 12.8333 16.6667H16.1667C16.6269 16.6667 17 16.2936 17 15.8334V12.5C17 12.0398 16.6269 11.6667 16.1667 11.6667Z"
                                                    stroke="#667EEA"
                                                    strokeWidth={1}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M16.1667 3H12.8333C12.3731 3 12 3.3731 12 3.83333V7.16667C12 7.6269 12.3731 8 12.8333 8H16.1667C16.6269 8 17 7.6269 17 7.16667V3.83333C17 3.3731 16.6269 3 16.1667 3Z"
                                                    stroke="#667EEA"
                                                    strokeWidth={1}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-indigo-500 ml-3 text-lg">
                                            Dashboard
                                        </p>
                                    </div>
                                </a>

                                <ResponsiveNavLink
                                    label="Dashboard"
                                    href={route("user.list")}
                                    active={route().current("user.list")}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                        />
                                    </svg>
                                </ResponsiveNavLink>
                            </div>
                            <div className="w-full">
                                <div className="border-t border-gray-300">
                                    <div className="w-full flex items-center justify-between px-6 pt-1">
                                        <div className="flex items-center">
                                            <img
                                                alt="profile-pic"
                                                src="https://tuk-cdn.s3.amazonaws.com/assets/components/boxed_layout/bl_1.png"
                                                className="w-8 h-8 rounded-md"
                                            />
                                            <p className=" text-gray-800 text-base leading-4 ml-2">
                                                Jane Doe
                                            </p>
                                        </div>
                                        <ul className="flex">
                                            <li className="cursor-pointer text-white pt-5 pb-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-messages"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="#718096"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                    />
                                                    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
                                                    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
                                                </svg>
                                            </li>
                                            <li className="cursor-pointer text-white pt-5 pb-3 pl-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-bell"
                                                    width={24}
                                                    height={24}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={1}
                                                    stroke="#718096"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path
                                                        stroke="none"
                                                        d="M0 0h24v24H0z"
                                                    />
                                                    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                                                    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                                                </svg>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile */}
                <nav className="w-full mx-auto bg-white shadow">
                    <div className="container px-6 justify-between h-16 flex items-center lg:items-stretch mx-auto">
                        <div className="h-full flex items-center">
                            <div className="mr-10 flex items-center">
                                <svg
                                    aria-label="Home"
                                    id="logo"
                                    enableBackground="new 0 0 300 300"
                                    height={44}
                                    viewBox="0 0 300 300"
                                    width={43}
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                >
                                    <g>
                                        <path
                                            fill="#4c51bf"
                                            d="m234.735 35.532c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16zm0 24c-4.412 0-8-3.588-8-8s3.588-8 8-8 8 3.588 8 8-3.588 8-8 8zm-62.529-14c0-2.502 2.028-4.53 4.53-4.53s4.53 2.028 4.53 4.53c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.027-4.53-4.529zm89.059 60c0 2.501-2.028 4.529-4.53 4.529s-4.53-2.028-4.53-4.529c0-2.502 2.028-4.53 4.53-4.53s4.53 2.029 4.53 4.53zm-40.522-5.459-88-51.064c-1.242-.723-2.773-.723-4.016 0l-88 51.064c-1.232.715-1.992 2.033-1.992 3.459v104c0 1.404.736 2.705 1.938 3.428l88 52.936c.635.381 1.35.572 2.062.572s1.428-.191 2.062-.572l88-52.936c1.201-.723 1.938-2.023 1.938-3.428v-104c0-1.426-.76-2.744-1.992-3.459zm-90.008-42.98 80.085 46.47-52.95 31.289-23.135-13.607v-21.713c0-2.209-1.791-4-4-4s-4 1.791-4 4v21.713l-26.027 15.309c-1.223.719-1.973 2.029-1.973 3.447v29.795l-52 30.727v-94.688zm0 198.707-80.189-48.237 51.467-30.412 24.723 14.539v19.842c0 2.209 1.791 4 4 4s4-1.791 4-4v-19.842l26.027-15.307c1.223-.719 1.973-2.029 1.973-3.447v-31.667l52-30.728v94.729z"
                                        />
                                    </g>
                                </svg>
                                <h3 className="text-base text-gray-800 font-bold tracking-normal leading-tight ml-3 hidden lg:block">
                                    Ticket App
                                </h3>
                            </div>

                            <div className="pr-12 xl:flex items-center h-full hidden">
                                <NavLink
                                    label="Dashboard"
                                    href={route("test")}
                                    active={route().current("test")}
                                ></NavLink>

                                <NavLink
                                    label="Products"
                                    href={route("user.list")}
                                    active={route().current("user.list")}
                                ></NavLink>
                            </div>
                        </div>
                        <div className="h-full xl:flex items-center justify-end hidden">
                            <div className="w-full h-full flex items-center">
                                <div className="w-full h-full flex">
                                    <div
                                        aria-haspopup="true"
                                        className="cursor-pointer w-full flex items-center justify-end relative"
                                        onClick={() => setProfile(!profile)}
                                    >
                                        {profile ? (
                                            <ul className="p-2 w-40 border-r bg-white absolute rounded z-40 left-0 shadow mt-48 ">
                                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                                    <div className="flex items-center">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="icon icon-tabler icon-tabler-user"
                                                            width={20}
                                                            height={20}
                                                            viewBox="0 0 24 24"
                                                            strokeWidth="1.5"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <path
                                                                stroke="none"
                                                                d="M0 0h24v24H0z"
                                                            />
                                                            <circle
                                                                cx={12}
                                                                cy={7}
                                                                r={4}
                                                            />
                                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                        </svg>
                                                        <span className="ml-2">
                                                            My Profile
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-help"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                        />
                                                        <circle
                                                            cx={12}
                                                            cy={12}
                                                            r={9}
                                                        />
                                                        <line
                                                            x1={12}
                                                            y1={17}
                                                            x2={12}
                                                            y2="17.01"
                                                        />
                                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                                    </svg>
                                                    <span className="ml-2">
                                                        Help Center
                                                    </span>
                                                </li>
                                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-settings"
                                                        width={20}
                                                        height={20}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="currentColor"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path
                                                            stroke="none"
                                                            d="M0 0h24v24H0z"
                                                        />
                                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                        <circle
                                                            cx={12}
                                                            cy={12}
                                                            r={3}
                                                        />
                                                    </svg>
                                                    <span className="ml-2">
                                                        Account Settings
                                                    </span>
                                                </li>
                                            </ul>
                                        ) : (
                                            ""
                                        )}
                                        <p className="text-gray-800 text-sm ml-2">
                                            {auth.user.name}
                                        </p>
                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="visible xl:hidden flex items-center relative">
                            <ul className="p-2 w-64 border-r bg-white absolute top-0 -ml-2 rounded right-0 shadow mt-12 lg:mt-16 hidden">
                                <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-user"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <circle cx={12} cy={7} r={4} />
                                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                        </svg>
                                        <span className="ml-2">Profile</span>
                                    </div>
                                </li>
                                <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                    <div className="flex items-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="icon icon-tabler icon-tabler-grid"
                                            width={20}
                                            height={20}
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path
                                                stroke="none"
                                                d="M0 0h24v24H0z"
                                            />
                                            <rect
                                                x={4}
                                                y={4}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={14}
                                                y={4}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={4}
                                                y={14}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                            <rect
                                                x={14}
                                                y={14}
                                                width={6}
                                                height={6}
                                                rx={1}
                                            />
                                        </svg>
                                        <span className="ml-2">Dashboard</span>
                                    </div>
                                </li>
                                <li className="flex xl:hidden  cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none flex items-center relative">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-help"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={12} cy={12} r={9} />
                                        <line
                                            x1={12}
                                            y1={17}
                                            x2={12}
                                            y2="17.01"
                                        />
                                        <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -4" />
                                    </svg>
                                    <span className="ml-2">Products</span>
                                </li>
                                <li className="flex xl:hidden cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="icon icon-tabler icon-tabler-settings"
                                        width={20}
                                        height={20}
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                        <circle cx={12} cy={12} r={3} />
                                    </svg>
                                    <span className="ml-2">Performance</span>
                                </li>
                            </ul>
                            <svg
                                onClick={() => setShow(!show)}
                                aria-label="Main Menu"
                                aria-haspopup="true"
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-menu"
                                width={32}
                                height={32}
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#2c3e50"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <line x1={4} y1={8} x2={20} y2={8} />
                                <line x1={4} y1={16} x2={20} y2={16} />
                            </svg>
                        </div>
                    </div>
                </nav>
                {/* Navigation ends */}

                <main>{children}</main>
            </div>
        </>
    );
}

import React from "react";

export default function NavLink({ href, active, label }) {
    return (
        <>
            <a
                href={href}
                className={
                    active
                        ? "cursor-pointer h-full flex items-center text-sm ml-10 text-indigo-700 tracking-normal border-b-2 border-indigo-700 transition duration-150 ease-in-out"
                        : "cursor-pointer h-full flex items-center text-sm ml-10 hover:text-indigo-700 text-gray-800 tracking-normal transition duration-150 ease-in-out"
                }
            >
                {label}
            </a>
        </>
        /*
        <ul className="pr-12 xl:flex items-center h-full hidden">
            <li className="cursor-pointer h-full flex items-center text-sm text-indigo-700 tracking-normal border-b-2 border-indigo-700">
                Dashboar
            </li>
            <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mx-10 tracking-normal">
                Products
            </li>
            <li className="cursor-pointer h-full flex items-center text-sm text-gry-800 mr-10 tracking-normal">
                Performance
            </li>
            <li className="cursor-pointer h-full flex items-center text-sm text-gray-800 tracking-normal">
                Deliverables
            </li>
        </ul>*/
    );
}

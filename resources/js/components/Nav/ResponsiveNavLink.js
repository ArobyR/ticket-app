import React from "react";
import { Button } from "@windmill/react-ui";

export default function ResponsiveNavLink({ href, active, label, children }) {
    return (
        <>
            <a href={href}>
                <li className="text-white pt-8">
                    <div className="flex items-center">
                        <div className="md:w-6 md:h-6 w-5 h-5">
                            <main>
                                {children}
                            </main>
                        </div>
                        <p
                            className={
                                active
                                    ? "cursor-pointer text-indigo-500 ml-3 text-lg tracking-normal transition duration-150 ease-in-out"
                                    : "cursor-pointer hover:text-indigo-500 text-gray-700 ml-3 text-lg tracking-normal transition duration-150 ease-in-out"
                            }
                        >
                            {label}
                        </p>
                    </div>
                </li>
            </a>
        </>

        /*<li
            className={
                active
                    ? "cursor-pointer h-full flex items-center text-sm text-indigo-500 tracking-normal transition duration-150 ease-in-out"
                    : "cursor-pointer h-full flex items-center text-sm hover:text-indigo-500 text-gray-800 mx-10 tracking-normal transition duration-150 ease-in-out"
            }
        >
            <a href={href}>{label}</a>
        </li>*/
    );
}

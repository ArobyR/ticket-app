import React from "react";
import { Button } from "@windmill/react-ui";

export default function ResponsiveNavLink({ href, active, label, children }) {
    return (
        <>
            <a href={href} className={
                            active
                                ? "cursor-pointer text-indigo-500 text-lg tracking-normal transition duration-150 ease-in-out"
                                : "cursor-pointer hover:text-indigo-500 text-gray-700  text-lg tracking-normal transition duration-150 ease-in-out"
                        }>
                <div className="flex items-center pt-8">
                    <div className="md:w-6 md:h-6 w-5 h-5">
                        <main
                             
                        >
                            {children}
                        </main>
                    </div>
                    <p
                        className="ml-3"
                    >
                        {label}
                    </p>
                </div>
            </a>
        </>
    );
}

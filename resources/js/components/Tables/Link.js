import React from "react";

export default function Button({href,children }) {
    return (
        <a href={href} className={`ml-0.5 inline-flex items-center px-4 py-2 bg-indigo-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900`}>{children}</a>
    );
}

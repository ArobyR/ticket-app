import React from "react";

export default function ButtonOnClick({processing, onClick, children }) {
    return (
        <button
            disabled={processing}
            type="button"
            onClick={onClick}
            className={`inline-flex items-center px-4 py-2 bg-indigo-900 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${processing && 'cursor-wait'}`}
        >
            {children}
        </button>
    );
}

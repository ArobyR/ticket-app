import React from "react";

export default function ButtonOnClickSelect({processing, onClick, children }) {
    return (
        <button
            disabled={processing}
            type="button"
            onClick={onClick}
            className={`w-full py-4 bg-blue-600 mt-8 rounded-xl border border-transparent font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ${processing && 'cursor-wait'}`}
        >
            {children}
        </button>
    );
}

import React, { useEffect, useRef } from "react";

export default function TextInputDataList({ label, type = 'text', name, value, handleChange, autoComplete, isFocused, options }) {

    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            {label && <label className="block font-medium text-sm text-gray-700 mb-1">{label}</label>}
            <input
                type={type}
                name={name}
                className="w-full p-2 border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                value={value}
                onChange={(e) => handleChange(e)}
                ref={input}
                autoComplete={autoComplete}
                list={name}
                required
            />
            <datalist
                id={name}

            >
                {options.map((option) => (
                    <option key={option.label} value={option.value}>{option.label}</option>
                ))}
            </datalist>
        </div>
    );
}

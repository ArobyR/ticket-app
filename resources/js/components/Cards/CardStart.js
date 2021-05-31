import React from "react";
import Button from "@/Components/Forms/ButtonOnClickSelect"

export default function CardOne({ label, name, children, onClick, processing }) {
    return (
        <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">

            <h1 className="text-black font-semibold text-2xl">
                {label}
            </h1>

            <div className="pt-8">
                <main>
                    <p className="font-semibold text-gray-400 text-left">
                        {children}
                    </p>
                </main>

                <Button processing={processing} onClick={onClick}>
                    {name}
                </Button>
            </div>
        </div>
    );
}

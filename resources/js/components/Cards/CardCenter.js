import React from "react";
import Button from "@/Components/Forms/ButtonOnClickSelect"

export default function CardTwo({ label, name, children, onClick, processing }) {

    return (
        <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

            <h1 className="text-white font-semibold text-2xl">
                {label}
            </h1>
            <div className="pt-8">

                <main>
                    <p className="font-semibold text-gray-400 text-left pt-5">
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

import React from "react";
import Button from "@/Components/Forms/ButtonOnClickSelect"

export default function CardTwo({ label, name, children, onClick, processing}) {

    return (
        <div className="min-h-screen flex justify-center items-center">
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

                        <h1 className="text-white font-semibold text-2xl">
                            {label}
                        </h1>

                        <p className="mt-4 font-semibold text-gray-400 text-left">
                            <span className="pl-2 ">
                            <main>{children}</main>
                        </span>
                        </p>

                        <div className="pt-8">

                            <Button processing={processing} onClick={onClick}>
                            {name}                               
                            </Button>

                        </div>
                    </div>
                </div>
    );
}
import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Test";

export default function Dashboard(props) {
    return (
        <Authenticated
            title="Dashboard"
            auth={props.auth}
            errors={props.errors}
        >
                <div className="p-6 bg-white border-b border-gray-200">
                            You're logged in!
                        </div>
            
        </Authenticated>
    );
}

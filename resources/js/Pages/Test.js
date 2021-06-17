import React, { useState, useEffect } from "react";
import Authenticated from "@/Layouts/Test";

export default function Dashboard(props) {
    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            title="Dashboard"
        >
        </Authenticated>
    );
}

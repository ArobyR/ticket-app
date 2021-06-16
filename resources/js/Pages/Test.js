import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Test";
import Button from "@/Components/Forms/ButtonOnClickSelect"
import Embarazada from "@/Assets/Png/Embarazada.png";
import Discapacitado from "@/Assets/Png/Discapacitado.png";
import Corriente from "@/Assets/Png/Corriente.png";
import axios from "axios"

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

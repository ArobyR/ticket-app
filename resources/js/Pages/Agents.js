import React, { useState, useEffect } from 'react';
import Link from "@/Components/Tables/Link";

export default function Register() {
    const [usuarios, setUsuarios] = useState([])

    const url = '/api/users'
    const fetchApi = async () => {
        const response = await fetch(url)
        const responseJson = await response.json()
        setUsuarios(responseJson)
    }

    useEffect(() => {
        fetchApi()
    }, []);

    return (
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Agentes
                </h2>
    );
}


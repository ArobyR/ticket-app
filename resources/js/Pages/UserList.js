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

        <div>
            <table className="w-full whitespace-nowrap " >
                <thead>
                    <tr className="font-bold text-left">
                        <th className="px-6 pt-5 pb-4">Nombre</th>
                        <th className="px-6 pt-5 pb-4">Apellido</th>
                        <th className="px-6 pt-5 pb-4">Cedula</th>
                        <th className="px-6 pt-5 pb-4">Email</th>
                        <th className="px-6 pt-5 pb-4">Password</th>
                        <th className="px-6 pt-5 pb-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {!usuarios ? 'Cargando...' :
                        usuarios.map((row) => {
                            return (
                            <tr>
                                <td>
                                    {row.nombre_usuario}
                                </td>
                                <td>
                                    {row.apellido_usuario}
                                </td>

                                <td>
                                    {row.cedula_usuario}
                                </td>
                                <td>
                                    {row.email}
                                </td>
                                <td>
                                    {row.password}
                                </td>

                                <td>
                                    <Link href={"/api/users.delete/" + row.id_usuario} >
                                        Eliminar
                            </Link>

                                    <Link href={"/api/users.update/" + row.id_usuario}>
                                        Actualizar
                            </Link>
                                </td>
                            </tr>)
                        })
                    }

                </tbody>

            </table></div>
    );
}


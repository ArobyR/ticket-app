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
    <div class="pt-24 flex flex-row">

        {/* <!-- Basic Card --> */}
        <div class="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">

            <h1 class="text-black font-semibold text-2xl">Basic</h1>

            <p class="pt-2 tracking-wide">
                <span class="text-gray-400 align-top">$ </span>
                <span class="text-3xl font-semibold">10</span>
                <span class="text-gray-400 font-medium">/ user</span>
            </p>

            <hr class="mt-4 border-1"></hr>

            <div class="pt-8">

                <p class="font-semibold text-gray-400 text-left">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        Get started with <span class="text-black">messaging</span>
                    </span>
                </p>
                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        Flexible <span class="text-black">team meetings</span>
                    </span>
                </p>
                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        <span class="text-black">5 TB</span> cloud storage
                    </span>
                </p>

                <a href="#" class="">
                    <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span class="font-medium">
                            Choose Plan
                        </span>
                        <span class="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                    </p>
                </a>
            </div>

        </div>

        {/* <!-- StartUp Card --> */}
        <div class="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

            <h1 class="text-white font-semibold text-2xl">Startup</h1>
            <p class="pt-2 tracking-wide">
                <span class="text-gray-400 align-top">$ </span>
                <span class="text-3xl font-semibold">24</span>
                <span class="text-gray-400 font-medium">/ user</span>
            </p>
            <hr class="mt-4 border-1 border-gray-600"></hr>

            <div class="pt-8">

                <p class="font-semibold text-gray-400 text-left">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        All features in <span class="text-white">Basic</span>
                    </span>
                </p>

                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        Flexible <span class="text-white">call scheduling</span>
                    </span>
                </p>

                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        <span class="text-white">15 TB</span> cloud storage
                    </span>
                </p>

                <a href="#" class="">
                    <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span class="font-medium">
                            Choose Plan
                        </span>
                        <span class="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                    </p>
                </a>

            </div>

            <div class="absolute top-4 right-4">
                <p class="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
            </div>

        </div>

        {/* <!-- Enterprise Card --> */}
        <div class="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">

            <h1 class="text-black font-semibold text-2xl">Enterprise</h1>
            <p class="pt-2 tracking-wide">
                <span class="text-gray-400 align-top">$ </span>
                <span class="text-3xl font-semibold">35</span>
                <span class="text-gray-400 font-medium">/ user</span>
            </p>
            <hr class="mt-4 border-1"></hr>

            <div class="pt-8">

                <p class="font-semibold text-gray-400 text-left">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        All features in <span class="text-black">Startup</span>
                    </span>
                </p>

                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        Growth <span class="text-black">oriented</span>
                    </span>
                </p>

                <p class="font-semibold text-gray-400 text-left pt-5">
                    <span class="material-icons align-middle">
                        done
                    </span>
                    <span class="pl-2">
                        <span class="text-black">Unlimited</span> cloud storage
                    </span>
                </p>

                <a href="#" class="">
                    <p class="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                        <span class="font-medium">
                            Choose Plan
                        </span>
                        <span class="pl-2 material-icons align-middle text-sm">
                            east
                        </span>
                    </p>
                </a>

            </div>
        </div>

    </div>

        /*
    }
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
            */
    );
}

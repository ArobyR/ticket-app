import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Button from "@/Components/Forms/Button";
import SelectMenu from "@/Components/Forms/SelectMenu";
import TextInput from "@/Components/Forms/TextInput";
import Guest from "@/Layouts/Guest";
import ValidationErros from "@/Components/Forms/ValidationErrors";

//import { Form, Button, Col } from 'react-bootstrap';

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        apellido: "",
        cedula: "",
        telefono: "",
        tipo_telefono: { tipoTelefonoState },
        id_rol: { rolState },
        id_estado: { State },
        calle: "",
        numero_casa: "",
        pais: "",
        ciudad: "",
        codigo_area: "",
        email: "",
        password: "",
        password_confirmation: "",
        terms: false,
    });

    const optionsRol = [
        {
            label: "",
            value: "",
        },
        {
            label: "Usuario",
            value: "4",
        },
        {
            label: "Agente",
            value: "2",
        },
        {
            label: "Encargado",
            value: "3",
        },
        {
            label: "Admin",
            value: "1",
        },
    ];


    const optionsEstado = [
        {
            label: "",
            value: "",
        },
        {
            label: "Activo",
            value: "1",
        },
        {
            label: "Inactivo",
            value: "2",
        },
    ];

    const optionsTipoTelefono = [
        {
            label: "",
            value: "",
        },
        {
            label: "Celular",
            value: "celular",
        },
        {
            label: "Telefono",
            value: "telefono",
        },
    ];

    const [tipoTelefonoState, setTipoTelefonoState] = useState("");
    const [rolState, setRolState] = useState("");
    const [State, setState] = useState("");

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const onHandleChange = (event) => {
        if (event.target.type === "checkbox") {
            setData(event.target.name, event.target.checked);
        } else {
            setData(event.target.name, event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (

        <Guest title="Register">
            <ValidationErros errors={errors} />
            <form onSubmit={submit}>
                <TextInput
                    value={data.nombre}
                    type="text"
                    handleChange={onHandleChange}
                    isFocused={true}
                    label="Nombre"
                    name="nombre"
                    autoComplete="name"
                />

                <div className="mt-4">
                    <TextInput
                        value={data.apellido}
                        type="text"
                        handleChange={onHandleChange}
                        label="Apellido"
                        name="apellido"
                        autoComplete="surname"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.cedula}
                        type="text"
                        handleChange={onHandleChange}
                        label="Cedula"
                        name="cedula"
                        autoComplete="cedula"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.telefono}
                        type="text"
                        handleChange={onHandleChange}
                        label="Telefono"
                        name="telefono"
                        autoComplete="tel"
                    />
                </div>

                <div class="mt-4">
                    <div className="flex flex-col items-start">
                        <label class="block font-medium text-sm text-gray-700 mb-1">Seleccione un tipo</label>
                        <select onChange={(e) => {
                            const selectedTipo = e.target.value;
                            setTipoTelefonoState(selectedTipo)
                        }}
                            className="w-full p-2 border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            {optionsTipoTelefono.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.tipo_telefono}
                        type="hidden"
                        handleChange={onHandleChange}
                        label=""
                        name="tipo_telefono"
                        autoComplete=""
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.calle}
                        type="text"
                        handleChange={onHandleChange}
                        label="Calle"
                        name="calle"
                        autoComplete="calle"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.numero_casa}
                        type="text"
                        handleChange={onHandleChange}
                        label="Numero de casa"
                        name="numero_casa"
                        autoComplete="numero_casa"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.pais}
                        type="text"
                        handleChange={onHandleChange}
                        label="Pais"
                        name="pais"
                        autoComplete="pais"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.ciudad}
                        type="text"
                        handleChange={onHandleChange}
                        label="Ciudad"
                        name="ciudad"
                        autoComplete="ciudad"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.codigo_area}
                        type="text"
                        handleChange={onHandleChange}
                        label="Codigo de area"
                        name="codigo_area"
                        autoComplete="codigo_area"
                    />
                </div>

                <div class="mt-4">
                    <div className="flex flex-col items-start">
                        <label class="block font-medium text-sm text-gray-700 mb-1">Seleccione un Estado</label>
                        <select onChange={(e) => {
                            const selectedState = e.target.value;
                            setState(selectedState)
                        }}
                            className="w-full p-2 border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            {optionsEstado.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.id_estado}
                        type="hidden"
                        handleChange={onHandleChange}
                        label=""
                        name="id_estado"
                        autoComplete=""
                    />
                </div>

                <div class="mt-4">
                    <div className="flex flex-col items-start">
                        <label class="block font-medium text-sm text-gray-700 mb-1">Seleccione un rol</label>
                        <select onChange={(e) => {
                            const selectedRol = e.target.value;
                            setRolState(selectedRol)
                        }}
                            className="w-full p-2 border border-gray-300 outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        >
                            {optionsRol.map((option) => (
                                <option value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.id_rol}
                        type="hidden"
                        handleChange={onHandleChange}
                        label=""
                        name="id_rol"
                        autoComplete=""
                    />
                </div>

                <div class="mt-4">
                    <SelectMenu
                        name="id_estado"
                        label="Seleccione un estado"
                        options={optionsEstado}
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.email}
                        type="text"
                        handleChange={onHandleChange}
                        label="Email"
                        name="email"
                        autoComplete="username"
                    />
                </div>
                <div className="mt-4">
                    <TextInput
                        value={data.password}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password"
                        autoComplete="new-password"
                    />
                </div>

                <div className="mt-4">
                    <TextInput
                        value={data.password_confirmation}
                        type="password"
                        handleChange={onHandleChange}
                        label="Password"
                        name="password_confirmation"
                        autoComplete="new-password"
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <InertiaLink
                        href={route("login")}
                        className="underline text-sm text-gray-600 hover:text-gray-900"
                    >
                        Already registered?
                    </InertiaLink>
                    <div className="ml-4">
                        <Button processing={processing}>
                            Register
                        </Button>
                    </div>
                </div>
            </form>
        </Guest>
    );
}

import React, { useEffect, useState } from "react";
import { useForm } from "@inertiajs/inertia-react";
import { InertiaLink } from "@inertiajs/inertia-react";
import Button from "@/Components/Forms/Button";
import ButtonOnClick from "@/Components/Forms/ButtonOnClick";
import TextInput from "@/Components/Forms/TextInput";
import TextInputDataList from "@/Components/Forms/TextInputDataList";
import Guest from "@/Layouts/Guest";
import ValidationErros from "@/Components/Forms/ValidationErrors";

export default function Register() {

    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: "",
        apellido: "",
        cedula: "",
        telefono: "",
        tipo_telefono: "",
        id_rol: "",
        id_estado: "",
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

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const [formStep, setFormStep] = useState(0)

    const onContinue = () => {
        setFormStep(cur => cur + 1)
    };

    const onBack = () => {
        setFormStep(cur => cur - 1)
    };

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
            <form onSubmit={submit} >
                {formStep === 0 && (
                    <section>
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

                        <div className="mt-4">
                            <TextInputDataList
                                value={data.tipo_telefono}
                                type="text"
                                handleChange={onHandleChange}
                                label="Seleccion un tipo"
                                name="tipo_telefono"
                                autoComplete=""
                                options={optionsTipoTelefono}
                            />
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <div className="ml-4">
                                <ButtonOnClick processing={processing} onClick={onContinue}>
                                    Next
                        </ButtonOnClick>
                            </div>
                        </div>
                    </section>)}

                {formStep === 1 && (
                    <section>
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

                        <div className="flex items-center justify-end mt-4">
                            <div className="ml-4">
                                <ButtonOnClick processing={processing} onClick={onBack}>
                                    Back
                        </ButtonOnClick>
                            </div>
                            <div className="ml-4">
                                <ButtonOnClick processing={processing} onClick={onContinue}>
                                    Next
                        </ButtonOnClick>
                            </div>
                        </div>
                    </section>)}

                {formStep === 2 && (

                    <section>
                        <div className="mt-4">
                            <TextInputDataList
                                value={data.id_estado}
                                type="text"
                                handleChange={onHandleChange}
                                label="Seleccion un Estado"
                                name="id_estado"
                                autoComplete=""
                                options={optionsEstado}
                            />
                        </div>

                        <div className="mt-4">
                            <TextInputDataList
                                value={data.id_rol}
                                type="text"
                                handleChange={onHandleChange}
                                label="Seleccion un Rol"
                                name="id_rol"
                                autoComplete=""
                                options={optionsRol}
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
                                <ButtonOnClick processing={processing} onClick={onBack}>
                                    Back
                            </ButtonOnClick>
                            </div>

                            <div className="ml-4">
                                <Button processing={processing}>
                                    Register
                            </Button>
                            </div>
                        </div>
                    </section>)}
            </form>
        </Guest>
    );
}

import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import CardOne from "@/Components/Cards/CardOne"
import CardTwo from "@/Components/Cards/CardTwo"
import CardThree from "@/Components/Cards/CardThree"
import Embarazada from "@/Assets/Png/Embarazada.png";
import Discapacitado from "@/Assets/Png/Discapacitado.png";
import Corriente from "@/Assets/Png/Corriente.png";
import { createTicket } from "@/Utils/Ticket/api";

export default function Dashboard(props) {

    const { data, setData, processing } = useForm({
        id_categoria: '',
        estado_ticket: '',
    });

    const handlePregnant = () => {
        setData({
            id_categoria: '1',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        { confirm && (setFormStep(2)) }

    }

    const handleDisabled = () => {
        setData({
            id_categoria: '2',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        { confirm && (setFormStep(2)) }

    }
    const handleNormal = () => {
        setData({
            id_categoria: '3',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        { confirm && (setFormStep(2)) }
    }

    const create = async () => {
        const responseData = await createTicket(data)
        console.log(responseData)
    }

    const handleOption1 = () => {

    }

    const handleOption2 = () => {
        const confirm = window.confirm('Estas Seguro de quieres finalizar')
        if (confirm) {
            setFormStep(0)
        }
    }
    const handleOption3 = () => {

    }
    const handleOption4 = () => {
        create()
        setFormStep(3)
    }
    const handleOption5 = () => {
        setFormStep(1)
    }
    const [formStep, setFormStep] = useState(0)

    return (

        <Layout
            auth={props.auth}
            errors={props.errors}
            title="Dashboard"
        >
            {formStep == 0 && (
                <div className="min-h-screen flex justify-center items-center">
                    <CardTwo
                        label="General"
                        name="Generar tu turno"
                        onClick={handleOption5}
                        processing={processing}
                    >
                        Nota: Sea paciente espere su turno y respete a los demas.
                        "Con amor y paciencia, nada es imposible"
                        (Daisaku Ikeda).
                </CardTwo>
                </div>
            )}

            {formStep == 1 && (
                <div className="min-h-screen flex justify-center items-center">
                    {/* <!-- Persona embarazada --> */}
                    <CardOne
                        label="Persona embarazada"
                        name="Seleccionar"
                        onClick={handlePregnant}
                        processing={processing}
                    >
                        <img className="ml-0" src={Embarazada} ></img>
                    </CardOne>

                    {/* <!-- Persona con discapacidad --> */}
                    <CardTwo
                        label="Persona sin discapacidad"
                        name="Seleccionar"
                        onClick={handleDisabled}
                        processing={processing}
                    >
                        <img className="ml-0" src={Discapacitado} ></img>
                    </CardTwo>

                    {/* <!-- Persona sin discapacidad --> */}
                    <CardThree
                        label="Persona sin discapacidad"
                        name="Seleccionar"
                        onClick={handleNormal}
                        processing={processing}
                    >
                        <img className="ml-0" src={Corriente} ></img>
                    </CardThree>
                </div>
            )}

            {formStep == 2 && (
                <div className="min-h-screen flex justify-center items-center">

                    <CardTwo
                        label="General"
                        name="Continuar"
                        onClick={handleOption4}
                        processing={processing}
                    >
                        Nota: Sea paciente espere su turno y respete a los demas.
                        "Con amor y paciencia, nada es imposible"
                        (Daisaku Ikeda).
                </CardTwo>
                </div>
            )}

            {formStep == 3 && (

                <div className="min-h-screen flex justify-center items-center">
                    {/* <!-- Opcion 1 --> */}
                    <CardOne
                        label="Opcion 1"
                        name="Seleccionar"
                        onClick={handlePregnant}
                        processing={processing}
                    >
                        <span className="pl-2">
                            <span className="text-white"> - </span>
                                Generar ticket o voucher para visualizar su turno.
                        </span>
                    </CardOne>

                    {/* <!-- General --> */}
                    <CardTwo
                        label="General"
                        name="Finalizar"
                        onClick={handleOption2}
                        processing={processing}
                    >
                        <span className="pl-2 ">
                            Nota: Sea paciente espere su turno y respete a los demas.
                            "Con amor y paciencia, nada es imposible"
                            (Daisaku Ikeda).
                        </span>
                    </CardTwo>

                    {/* <!-- Opcion 2 --> */}
                    <CardThree
                        label="Opcion 2"
                        name="Seleccionar"
                        onClick={handleNormal}
                        processing={processing}
                    >
                        <span className="pl-2 ">
                            Generar Codigo Qr para escanear y visualizar su turno en la App Movil.
                        </span>
                    </CardThree>
                </div>
            )}
        </Layout>
    );
}

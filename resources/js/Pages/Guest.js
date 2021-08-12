import React, { useState, useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import CardStart from "@/Components/Cards/CardStart"
import CardCenter from "@/Components/Cards/CardCenter"
import CardEnd from "@/Components/Cards/CardEnd"
import Embarazada from "@/Assets/Png/Embarazada.png";
import Discapacitado from "@/Assets/Png/Discapacitado.png";
import Corriente from "@/Assets/Png/Corriente.png";
import { createTicket } from "@/Utils/Ticket/api";
import Modal from "@/Components/Forms/Modal";
import QRCode from "qrcode.react";

export default function Dashboard(props) {

    const { data, setData, processing } = useForm({
        id_categoria: '',
        estado_ticket: '',
    });

    const handleInit = () => {
        setFormStep(1)
    }

    const handlePregnant = () => {
        setData({ id_categoria: '1', estado_ticket: 'en proceso' })
        const confirm = window.confirm('Estas Seguro ?')
        { confirm && (setFormStep(2)) }
    }

    const handleDisabled = () => {
        setData({ id_categoria: '2', estado_ticket: 'en proceso' })
        const confirm = window.confirm('Estas Seguro ?')
        { confirm && (setFormStep(2)) }
    }
    const handleNormal = () => {
        setData({ id_categoria: '3', estado_ticket: 'en proceso' })
        const confirm = window.confirm('Estas Seguro ?')
        { confirm && (setFormStep(2)) }
    }

    const [formStep, setFormStep] = useState(0)
    const [isOpen, setOpen] = useState(false);
    
    const create = async () => {
        const responseData = await createTicket(data)
        console.log(responseData)
    }

    const handleContinue = () => {
        create()
        setFormStep(3)
    }

    const handleFinish = () => {
        const confirm = window.confirm('Estas Seguro que desea finalizar?')
        { confirm && (setFormStep(0)) }
    }

    return (
        <Layout
            auth={props.auth}
            errors={props.errors}
            title="Guest"
        >
            {formStep == 0 && (
                <div className="min-h-screen flex justify-center items-center">
                    <CardCenter
                        label="General"
                        name="Generar tu turno"
                        onClick={handleInit}
                        processing={processing}
                    >
                        Nota: Sea paciente espere su turno y respete a los demas.
                        "Con amor y paciencia, nada es imposible"
                        (Daisaku Ikeda).
                </CardCenter>
                </div>
            )}

            {formStep == 1 && (
                <div className="min-h-screen flex justify-center items-center">
                    <CardStart
                        label="Persona embarazada"
                        name="Seleccionar"
                        onClick={handlePregnant}
                        processing={processing}
                    >
                        <img className="ml-0" src={Embarazada} ></img>
                    </CardStart>

                    <CardCenter
                        label="Persona con discapacidad"
                        name="Seleccionar"
                        onClick={handleDisabled}
                        processing={processing}
                    >
                        <img className="ml-0" src={Discapacitado} ></img>
                    </CardCenter>

                    <CardEnd
                        label="Persona sin discapacidad"
                        name="Seleccionar"
                        onClick={handleNormal}
                        processing={processing}
                    >
                        <img className="ml-0" src={Corriente} ></img>
                    </CardEnd>
                </div>
            )}

            {formStep == 2 && (
                <div className="min-h-screen flex justify-center items-center">
                    <CardCenter
                        label="General"
                        name="Continuar"
                        onClick={handleContinue}
                        processing={processing}
                    >
                        Nota: Sea paciente espere su turno y respete a los demas.
                        "Con amor y paciencia, nada es imposible"
                        (Daisaku Ikeda).
                    </CardCenter>
                </div>
            )}

            {formStep == 3 && (
                <div className="min-h-screen flex justify-center items-center">
                    <CardStart
                        label="Opcion 1"
                        name="Seleccionar"
                        onClick={handleOption1}
                        processing={processing}
                    >
                        <span className="pl-2">
                            <span className="text-white"> - </span>
                                Generar ticket o voucher para visualizar su turno.
                        </span>
                    </CardStart>

                    <CardCenter
                        label="General"
                        name="Finalizar"
                        onClick={handleFinish}
                        processing={processing}
                    >
                        <span className="pl-2 ">
                            Nota: Sea paciente espere su turno y respete a los demas.
                            "Con amor y paciencia, nada es imposible"
                            (Daisaku Ikeda).
                        </span>
                    </CardCenter>

                    <Modal isOpen={isOpen} isClose={() => setOpen(false)}>
                        <span className="pl-2 ">
                            <QRCode value="Hola Mundo" />
                        </span>
                    </Modal>

                    <CardEnd
                        label="Opcion 2"
                        name="Seleccionar"
                        onClick={() => setOpen(true)}
                        processing={processing}
                    >
                        <span className="pl-2 ">
                            Generar Codigo Qr para escanear y visualizar su turno en la App Movil.
                        </span>
                    </CardEnd>
                </div>
            )}
        </Layout>
    );
}

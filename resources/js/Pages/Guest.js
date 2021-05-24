import React, { useState,useEffect } from "react";
import { useForm } from "@inertiajs/inertia-react";
import Authenticated from "@/Layouts/Layout";
import Button from "@/Components/Forms/ButtonOnClickSelect"
import Embarazada from "@/Assets/Png/Embarazada.png";
import Discapacitado from "@/Assets/Png/Discapacitado.png";
import Corriente from "@/Assets/PNg/Corriente.png";
import axios from "axios"

export default function Dashboard(props) {

    const { data, setData, post, processing, errors, reset } = useForm({
        id_categoria: '',
        estado_ticket: '',
    });

    const handlePregnant = () => {
        setData({
            id_categoria: '1',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        if(confirm){
            setFormStep(2)
        }
    }

    const handleDisabled = () => {
        setData({
            id_categoria: '2',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        if(confirm){
            setFormStep(2)
        }
    }
    const handleNormal = () => {
        setData({
            id_categoria: '3',
            estado_ticket: 'en proceso'
        })
        const confirm = window.confirm('Estas Seguro')
        if(confirm){
            setFormStep(2)
        }
    }

    const createTicket = async () => {
        const reponse = await axios.post("api/ticket.insert", data)
        const responseData = await reponse.data
        console.log(responseData)
    }
    
    const handleOption1 = () => {
        
    }

    const handleOption2 = () => {

    }
    const handleOption3 = () => {

    }
    const handleOption4 = () => {
        const confirm = window.confirm('Estas Seguro')
        if(confirm){
            setFormStep(0)
        }
    }
    const handleOption5 = () => {
        setFormStep(1)
    }
    const [formStep, setFormStep] = useState(0)
    
    return (

        <Authenticated
            auth={props.auth}
            errors={props.errors}
            title="Dashboard"
        >
            {formStep == 0 && (
                <div className="min-h-screen flex justify-center items-center">
                    {/* <!-- Inicio  --> */}
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

                        <h1 className="text-white font-semibold text-2xl">
                            General
                        </h1>

                        <p className="mt-4 font-semibold text-gray-400 text-left">
                            <span className="pl-2 ">
                                Nota: Sea paciente espere su turno y respete a los demas.
                                "Con amor y paciencia, nada es imposible"
                                (Daisaku Ikeda).
                        </span>
                        </p>

                        <div className="pt-8">

                            <Button processing={processing} onClick={handleOption5}>
                                Registrar tu turno
                            </Button>

                        </div>
                    </div>
                </div>
            )}

            {formStep == 1 && (
                <div className="min-h-screen flex justify-center items-center">
                    {/* <!-- Persona embarazada --> */}
                    <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">

                        <h1 className="text-black font-semibold text-2xl">
                            Persona embarazada
                    </h1>


                        <div className="pt-8">

                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <img className="ml-0" src={Embarazada} ></img>
                            </p>

                            <Button processing={processing} onClick={handlePregnant}>
                                Seleccionar
                            </Button>

                        </div>

                    </div>

                    {/* <!-- Persona con discapacidad --> */}
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

                        <h1 className="text-white font-semibold text-2xl">
                            Persona con discapacidad
                    </h1>

                        <div className="pt-8">

                            <p className="font-semibold text-gray-400 text-left pt-5">
                                <img className="ml-0" src={Discapacitado} ></img>
                            </p>

                            <Button processing={processing} onClick={handleDisabled}>
                                Seleccionar
                            </Button>

                        </div>
                    </div>

                    {/* <!-- Persona sin discapacidad --> */}
                    <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">

                        <h1 className="text-black font-semibold text-2xl">
                            Persona sin discapacidad
                    </h1>

                        <div className="pt-8">

                            <p className="font-semibold text-gray-400 text-left ">
                                <img className="ml-0" src={Corriente} ></img>
                            </p>

                            <Button processing={processing} onClick={handleNormal}>
                                Seleccionar
                            </Button>

                        </div>
                    </div>
                </div>
            )}

            {formStep == 2 && (
                
                <div onClick = {createTicket} className="min-h-screen flex justify-center items-center">
                    {/* <!-- Persona embarazada --> */}
                    <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">

                        <h1 className="text-black font-semibold text-2xl">
                            Opcion 1
                        </h1>
                        <hr className="mt-4 border-1"></hr>

                        <p className="mt-8 font-semibold text-gray-400 text-left">
                            <span className="pl-2">
                                <span className="text-white"> - </span>
                                Generar ticket o voucher para visualizar su turno.
                        </span>
                        </p>

                        <div className="pt-8">
                            <Button processing={processing} onClick={handleOption1}>
                                Seleccionar
                            </Button>
                        </div>

                    </div>

                    {/* <!-- Persona con discapacidad --> */}
                    <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">

                        <h1 className="text-white font-semibold text-2xl">
                            General
                        </h1>

                        <p className="mt-4 font-semibold text-gray-400 text-left">
                            <span className="pl-2 ">
                                Nota: Sea paciente espere su turno y respete a los demas.
                                "Con amor y paciencia, nada es imposible"
                                (Daisaku Ikeda).
                        </span>
                        </p>

                        <div className="pt-8">

                            <Button processing={processing} onClick={handleOption4}>
                                Finish
                            </Button>

                        </div>
                    </div>

                    {/* <!-- Persona sin discapacidad --> */}
                    <div className="w-96 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">

                        <h1 className="text-black font-semibold text-2xl">
                            Opcion 2
                        </h1>

                        <hr className="mt-4 border-1"></hr>

                        <p className="mt-8 font-semibold text-gray-400 text-left">
                            <span className="pl-2 ">
                                Generar Codigo Qr para escanear y visualizar su turno en la App Movil.
                        </span>
                        </p>

                        <div className="pt-8 ">

                            <Button processing={processing} onClick={handleOption3}>
                                Seleccionar
                            </Button>

                        </div>
                    </div>
                </div>
            )}
        </Authenticated>
    );
}

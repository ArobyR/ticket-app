import React, { useState, useEffect } from 'react';
import './card_container.css';
import logo_embarazada from '../../../images/logo_embarazada.svg'
import logo_corriente from '../../../images/logo_corriente.svg';
import logo_discapacitado from '../../../images/logo_discapacitado.svg';
import Card from '../Card/Card';
import ButtonClick from '../ButtonClick/ButtonClick';
import '../../../css/global.css';
import Popup from '../Popup/Popup';
import { createTicket } from '../../services/ticket/tickets';

const CardContainer = () => {
    const modalInitialValues = {
        text: 'Ticket impreso!!', 
        url: null
    }

    const ticketInitialValues = {
        id_categoria: '3', 
        estado_ticket: 'en espera!!', 
        prioridad: 'normal'
    }

    const [ticketInformation, setTicketCategory] = useState(ticketInitialValues)
    const [modalShow, setModalShow] = useState(false)
    const [modalInfo, setmodalInfo] = useState(modalInitialValues)

    const handleEmbarazada = () => {
        setTicketCategory({...ticketInformation, 
            id_categoria: '3',
            prioridad: 'alta'
        })
    }
    
    const handleDiscapacitado = () => {
        setTicketCategory({...ticketInformation, 
            id_categoria: '1',
            prioridad: 'media'
        })
    }

    const handleCorriente = () => {
        setTicketCategory(ticketInitialValues)
    }

    const getTicket = async () => {

        (async () => {
            const data = await createTicket(ticketInformation)
            console.log(data)
        })();
        console.log(ticketInformation)
        setmodalInfo({...modalInfo, modalInitialValues})
        setModalShow(true)
    }

    const getTicketById = async () => {
        
    }

    const test = () => {
        setmodalInfo({...modalInfo, text: 'JO JO JO', url: logo_corriente})
        setModalShow(true)

    }

    return (
        <div className='vh-100 container'>
            <Popup 
                text={modalInfo.text}
                image={modalInfo.url}
                show={modalShow}
                onHide={() =>setModalShow(false)}
            />
            <h2 className='title text-center'>Seleccione su estado:</h2>      
            <div className='d-flex flex-wrap'>
                <Card logo={logo_embarazada} 
                    handleOnClick={handleEmbarazada}
                    textSide="embarazada"
                />
                 <Card logo={logo_discapacitado} 
                    handleOnClick={handleDiscapacitado} 
                    textSide="discapacitado" 
                />
                <Card logo={logo_corriente}
                    textSide="corriente" 
                    handleOnClick={handleCorriente}
                />
            </div>
            <div className='row mt-5'>
                <div className='mx-auto'>
                    <ButtonClick name="Generar codigo QR" handleOnClick={test} />
                </div>
                <div className='mx-auto'>
                    <ButtonClick handleOnClick={getTicket} name="Imprimir ticket" />
                </div>
            </div>
        </div>
    );
}
 
export default CardContainer;
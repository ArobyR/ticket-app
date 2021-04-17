import React, { useState } from 'react';
import './card_container.css';
import logo_embarazada from '../../../images/logo_embarazada.svg'
import logo_corriente from '../../../images/logo_corriente.svg';
import logo_discapacitado from '../../../images/logo_discapacitado.svg';
import Card from '../Card/Card';
import ButtonClick from '../ButtonClick/ButtonClick';
import '../../../css/global.css';
import Popup from '../Popup/Popup';

const CardContainer = () => {
    const modalInitialValues = {
        text: 'Ticket impreso!!', 
        url: null
    }

    const [cuality, setCuality] = useState({category: 'corriente'})
    const [modalShow, setModalShow] = useState(false)
    const [modalInfo, setmodalInfo] = useState(modalInitialValues)

    const handleEmbarazada = () => {
        setCuality({...cuality, category: 'embarazada'})
    }
    
    const handleDiscapacitado = () => {
        setCuality({...cuality, category: 'discapacitado'})
    }

    const handleCorriente = () => {
        setCuality({...cuality, category: 'corriente'})
    }

    const printJson = () => {
        setmodalInfo({...modalInfo, modalInitialValues})
        setModalShow(true)
        console.log(cuality)
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
                    <ButtonClick handleOnClick={printJson} name="Imprimir ticket" />
                </div>
            </div>
        </div>
    );
}
 
export default CardContainer;
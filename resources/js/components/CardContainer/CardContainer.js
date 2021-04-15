import React, { useState } from 'react';
import './card_container.css';
import logo_embarazada from '../../../images/logo_embarazada.svg'
import logo_corriente from '../../../images/logo_corriente.svg';
import logo_discapacitado from '../../../images/logo_discapacitado.svg';
import Card from '../Card/Card';
import ButtonClick from '../ButtonClick/ButtonClick';
import '../../../css/global.css';

const CardContainer = () => {
    const [cuality, setCuality] = useState({category: 'corriente'})
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
        console.log(cuality)
    }

    return (
        <div className='vh-100 container'>
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
                    <ButtonClick name="Generar codigo QR" />
                </div>
                <div className='mx-auto'>
                    <ButtonClick handleOnClick={printJson} name="Imprimir ticket" />
                </div>
            </div>
        </div>
    );
}
 
export default CardContainer;
import React, { useState } from 'react';
import './card_container.css';
import logo_embarazada from '../../../images/logo_embarazada.svg'
import logo_corriente from '../../../images/logo_corriente.svg';
import logo_discapacitado from '../../../images/logo_discapacitado.svg';
import Card from '../Card/Card';
import ButtonClick from '../ButtonClick/ButtonClick';
import '../../../css/global.css';

const CardContainer = () => {
    return (
        <div className='vh-100 container'>
            <h2 className='title text-center'>Seleccione su estado:</h2>      
            <div className='d-flex flex-wrap'>
                <div className='d-flex mx-auto'>
                    <Card logo={logo_embarazada} textSide="embarazada" />
                </div>
                <div className='d-flex mx-auto'>
                    <Card logo={logo_corriente} textSide="corriente" />
                </div>
                <div className='d-flex mx-auto'>
                    <Card logo={logo_discapacitado} textSide="discapacitado" />
                </div>
            </div>
            <div className='row mt-5'>
                <div className='mx-auto'>
                    <ButtonClick name="Generar codigo QR" />
                </div>
                <div className='mx-auto'>
                    <ButtonClick name="Imprimir ticket" />
                </div>
            </div>
        </div>
    );
}
 
export default CardContainer;
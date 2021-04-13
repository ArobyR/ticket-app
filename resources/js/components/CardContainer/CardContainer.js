import React, { useState } from 'react';
import './card_container.css';
import logo_embarazada from '../../../images/logo_embarazada.svg'
import logo_corriente from '../../../images/logo_corriente.svg';
import logo_discapacitado from '../../../images/logo_discapacitado.svg';
import Card from '../Card/Card';
import ButtonClick from '../ButtonClick/ButtonClick';

const CardContainer = () => {
    return (
        <div className='container'>
            <div className='d-flex flex-wrap card-container'>
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
            <div className='row'>
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
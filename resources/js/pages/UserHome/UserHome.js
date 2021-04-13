import React from 'react';
import './user_home.css';
import '../../../css/global.css';

const UserHome = () => {
    return ( 
        <div className='vh-100 bg-color d-flex align-items-center'>
            <div className='modal-s '>
                <div className='row mx-auto px-5 pt-5'>
                    <div className="col-md div-col">
                        <div className='img-svg1' alt='img-ticket'>
                        </div>
                    </div>
                    <div className="col-md div-col">
                        <div className='img-svg2' alt='img-ticket'>
                        </div>                   
                    </div>
                </div>
                    <h2 className='text-center py-3'>Registra tu turno</h2>
                <div className="row pt-4">
                    <a href='#' className='btn-style mx-auto'>Registrar</a>
                </div>
            </div>            
        </div>
    );
}
 
export default UserHome;
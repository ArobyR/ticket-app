import React, { useState } from 'react';
import {Formik, useFormik} from 'formik';
import './login-form.css';
import { Form, Button } from 'react-bootstrap';
import '../../../css/global.css';

const Login = () => {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (evt) => {
        const form = evt.currentTarget;
        if(form.checkValidity() === false) {
            evt.preventDefault(); 
            evt.stopPropagation();
        }
        console.log('logeado...')
        setValidated(true)
    }

    return (
        <div className="vh-100 container">
            <div className="form">
                <h3 className="text-center mb-4 mt-4">Ingrese su cuenta</h3>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId="validationFormik01">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control required type="email" placeholder="Introduce tu email"/>
                    </Form.Group>
                    <Form.Group controlId="validationFormik02">
                        <Form.Label style={{marginTop: '10px'}}>Contrasenia:</Form.Label>
                        <Form.Control required type="password" placeholder="Introduce tu contrasenia"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid pass.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button style={{marginTop: '30px'}}
                        className='btn-style' 
                        type='submit' 
                        >
                            Enviar
                    </Button>
                </Form>
            </div>
        </div>
    );
}
 
export default Login;
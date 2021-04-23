import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './user-register.css';

const UserRegister = () => {
    const data = {
        nombre: '',
        apellido: '',
        cedula: '',
        pais: '',
        calle: '',
        numero_casa: '',
        rol: 'usuario'
    }
    
    const [validated, setValidated] = useState(false)
    const [datos, setDatos] = useState(data)

    const handleSubmit = (evt) => {
        const form = evt.currentTarget;
        if(form.checkValidity() === false) {
            evt.preventDefault(); 
            evt.stopPropagation();
        }
        else {
            evt.preventDefault();
            // evt.stopPropagation();
            createUser(JSON.stringify(datos))
            console.log(datos)
        }
        setValidated(true)
        console.log('ejecutado...')
    }

    const handleOnChange = (evt) => {
        if (evt.target.id === 'nombre') setDatos({...datos, nombre: evt.target.value})
        if (evt.target.id === 'apellido') setDatos({...datos, apellido: evt.target.value})
        if (evt.target.id === 'cedula') setDatos({...datos, cedula: evt.target.value})
        if (evt.target.id === 'pais') setDatos({...datos, pais: evt.target.value})
        if (evt.target.id === 'calle') setDatos({...datos, calle: evt.target.value})
        if (evt.target.id === 'numero_casa') setDatos({...datos, numero_casa: evt.target.value})
        if (evt.target.id === 'ciudad') setDatos({...datos, ciudad: evt.target.value})
        if (evt.target.id === 'email') setDatos({...datos, email: evt.target.value})
        if (evt.target.id === 'password') setDatos({...datos, password: evt.target.value})
        if (evt.target.id === 'rol') setDatos({...datos, rol: evt.target.value})
    }

    return (
        <div className="container-form container">
            <Form 
                style={{width: '100%', padding: '10px'}}
                noValidate validated={validated} 
                onSubmit={handleSubmit}
            >
                <Form.Row>
                    <Form.Group as={Col} controlId='nombre' onChange={handleOnChange}> 
                        <Form.Label>Primer nombre:</Form.Label>
                        <Form.Control required 
                            placeholder="Nombre:"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='apellido' onChange={handleOnChange}> 
                        <Form.Label>Primer apellido:</Form.Label>
                        <Form.Control required 
                            placeholder="Apellido:"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='cedula' onChange={handleOnChange}> 
                        <Form.Label>Cedula:</Form.Label>
                        <Form.Control required 
                            placeholder="Cedula:"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId='pais' onChange={handleOnChange}>
                        <Form.Label>Pais:</Form.Label>
                        <Form.Control required 
                        placeholder="Pais:"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='calle' onChange={handleOnChange}>
                        <Form.Label>Calle:</Form.Label>
                        <Form.Control required 
                        placeholder="Calle:"/>  
                    </Form.Group>
                    <Form.Group as={Col} controlId='numero_casa' onChange={handleOnChange}>
                        <Form.Label>Numero casa:</Form.Label>
                        <Form.Control required 
                        placeholder="#2:"/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId='ciudad' onChange={handleOnChange}>
                        <Form.Label>Ciudad:</Form.Label>
                        <Form.Control required 
                        placeholder="Santo Domingo:"/>        
                    </Form.Group>
                    <Form.Group as={Col} controlId='email' onChange={handleOnChange}>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            required type="email" 
                            placeholder="Introduce tu email"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='password' onChange={handleOnChange}>
                        <Form.Label>Contrasenia:</Form.Label>
                        <Form.Control 
                            required type="password" 
                            placeholder="Introduce tu contrasenia"/>
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid pass.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId='rol' onChange={handleOnChange}>
                        <Form.Label>Rol:</Form.Label>
                        <Form.Control as="select" defaultValue='Seleccione el rol...'>
                            <option>usuario</option>
                            <option>agente</option>
                            <option>encargado</option>
                            <option>administrador</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Button style={{marginTop: '30px'}}
                    className='btn btn-primary' 
                    type='submit'>
                    Registrar
                </Button>
            </Form>
        </div>
    );
}
 
export default UserRegister;
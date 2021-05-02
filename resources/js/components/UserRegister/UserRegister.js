import React, { useState, useEffect } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import './user-register.css';
import { insertUser } from '../../services/user/users'

const UserRegister = () => {
    const [validated, setValidated] = useState(false)
    const [datos, setDatos] = useState(data)
    // const user = {
    //     nombre: 'Testing', 
    //     apellido: 'Happy',
    //     cedula: '44-2211-1',
    //     calle: 'los angeles',
    //     numero_casa: '22',
    //     pais: 'republica dominnicana',
    //     ciudad: 'santo domingo', 
    //     codigo_area: '2233',
    //     telefono: '2200033000',
    //     tipo_telefono: 'celular',
    //     email: 'interestingHacking01@example.com',
    //     password: 'testing',
    //     rol: '2',
    //     id_estado: '2'
    // }

    const data = {
        nombre: '0',
        apellido: '0',
        cedula: '0',
        calle: '0',
        numero_casa: '0',
        pais: '0',
        ciudad: '0',
        codigo_area: '0',
        telefono: '0',
        tipo_telefono: 'celular',
        email: '0',
        password: '0',
        rol: "2",
        id_estado: '2'
    }

    const handleSubmit = async (evt) => {
        const form = evt.currentTarget;
        if(form.checkValidity() === false) {
            evt.preventDefault(); 
            evt.stopPropagation();
        }
        else {
            evt.preventDefault();
            evt.stopPropagation();            
            const info = await insertUser(datos)
            console.log(info);
            // console.log(JSON.stringify(datos))
            console.log(datos)
        }
        setValidated(true)
    }

    const handleOnChange = (evt) => {
        const {id, value} = evt.target
        if (id === 'nombre') setDatos({...datos, nombre: value})
        if (id === 'apellido') setDatos({...datos, apellido: value})
        if (id === 'cedula') setDatos({...datos, cedula: value})
        if (id === 'calle') setDatos({...datos, calle: value})
        if (id === 'numero_casa') setDatos({...datos, numero_casa: value})
        if (id === 'pais') setDatos({...datos, pais: value})
        if (id === 'ciudad') setDatos({...datos, ciudad: value})
        if (id === 'codigo_area') setDatos({...datos, codigo_area: value})
        if (id === 'telefono') setDatos({...datos, telefono: value})
        if (id === 'tipo_telefono') setDatos({...datos, tipo_telefono: value})
        if (id === 'email') setDatos({...datos, email: value})
        if (id === 'password') setDatos({...datos, password: value})
        if (id === 'rol') {
            setDatos({...datos, rol: (value == 'usuario' ? '1' :  
            (value == 'agente' ? '2' : 
            (value == 'encargado' ? '3': '4')))})
        }  
            
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
                    <Form.Group as={Col} controlId='codigo_area' onChange={handleOnChange}>
                        <Form.Label>Codigo de area:</Form.Label>
                        <Form.Control 
                        placeholder="Codigo de area:"/>
                    </Form.Group>
                    <Form.Group as={Col} controlId='telefono' onChange={handleOnChange}>
                        <Form.Label>Telefono:</Form.Label>
                        <Form.Control required 
                        placeholder="Introduce el telefono:"/>  
                    </Form.Group>
                    <Form.Group as={Col} controlId='tipo_telefono' onChange={handleOnChange}>
                        <Form.Label>Tipo de telefono:</Form.Label>
                        <Form.Control as="select" defaultValue='Seleccione el rol...'>
                            <option>celular</option>
                            <option>telefono</option>
                        </Form.Control>
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
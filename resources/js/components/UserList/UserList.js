import React, { useState, useEffect } from 'react';
import { Button, Table } from "react-bootstrap";
import { RiEditBoxLine, RiDeleteBin2Fill } from 'react-icons/ri'
import { getAllUsers } from '../../services/user/users'

const UserList = () => {
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        (async () => {
            const response = await getAllUsers();
            setUsuarios(response)
        })();
    }, []);

    const handleDelete = (evt) => {
        const { id } = evt.target
        console.log(id)
    }

    return (
        <div className='main flex-column container mt-2'>
            <h3 className='mx-auto'>Lista de usuarios:</h3>
            <Table>
                <thead>
                    <tr>
                        <th className="text-center">#</th>
                            <th>Nombre</th>
                            <th>Posicion</th>
                            <th className="text-right">Correo</th>
                        <th className="text-right">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => {
                            return (
                                <tr key={usuario.id_usuario}>
                                    <td>{usuario.id_usuario}</td>
                                    <td>{usuario.nombre_usuario}</td>
                                    <td>{usuario.rol}</td>
                                    <td>{usuario.email}</td>                             
                                    <td className="td-actions text-right">
                                    <Button
                                        className="btn-link btn-xs mx-2"
                                        onClick={(e) => e.preventDefault()}
                                        variant="success"
                                    >
                                        <RiEditBoxLine />
                                    </Button>
                                    <Button
                                        id={usuario.id_usuario}
                                        className="btn-link btn-xs mx-2"
                                        onClick={handleDelete}
                                        variant="danger"
                                    >
                                        <RiDeleteBin2Fill />
                                    </Button>
                                </td>
                            </tr>
                            )
                        })
                    }    
                </tbody>
            </Table>
                {(usuarios.length == 0 ?
                    <p>Cargando...</p>
                    :
                    '' 
                    )
                }
        </div>
    );
}
 
export default UserList;
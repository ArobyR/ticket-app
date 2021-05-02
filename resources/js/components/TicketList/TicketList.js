import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { getAllTickets } from '../../services/ticket/tickets';

const TicketList = () => {
    // useEffect peticion a la API
    const [tickets, setTickets] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (async () => {
            setLoading(true)
            const information = await getAllTickets();
            setTickets(information)
            setLoading(false)
        })();
    }, []);

    return (
        <div className='container mt-3'>
            {loading ? 'Cargando...' : ''}
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ticket</th>
                        <th>Prioridad</th>
                        <th>Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    tickets.map(data => (
                        <tr key={data.id_ticket}>
                            <td>{data.id_ticket}</td>
                            <td>{data.codigo_ticket}</td>
                            <td>{data.prioridad}</td>
                            <td>{data.created_at}</td>
                        </tr>
                    ))
                    }              
                </tbody>
            </Table>     
        </div>
    );
}
 
export default TicketList;
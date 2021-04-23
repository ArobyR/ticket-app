import { Table } from 'react-bootstrap';

const TicketList = () => {
    // useEffect peticion a la API
    return (
        <div className='container mt-3'>
            <Table striped bordered hover responsive="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ticket</th>
                        <th>Fecha</th>
                        <th>Prioridad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                </tbody>
            </Table>            
        </div>
    );
}
 
export default TicketList;
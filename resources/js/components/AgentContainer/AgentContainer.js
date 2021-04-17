import { Form, Button } from "react-bootstrap"

const AgentContainer = () => {

    const test = () => {
        console.log('test')
    }

    return (
        <div className='container'>
            <div className='row py-5'>
                <h2 className=''>Atencion de turnos</h2>
                <Button className='ml-auto' variant='dark' onClick={test}>
                    Logout
                </Button>
            </div>
            <div className='row pt-3'>
                <div className='col-5 '>
                    <Form.Group>
                        <Form.Label>Ticket Actual: </Form.Label>
                        <Form.Control placeholder='Ticket' disabled/>
                    </Form.Group>
                </div>
                <div className='col'>
                    <div className='row  m-2 row-cols-2 justify-content-around'>
                        <div className='col-5 mx-auto '>
                            <Button variant='dark' onClick={test} size='lg'>
                                Llamar
                            </Button>
                        </div>
                        <div className='col-5 mx-auto '>
                            <Button variant='danger' onClick={test} size='lg'>
                                Anular
                            </Button>
                        </div>
                        <div className='col-5 mx-auto mt-2'>
                            <Button variant='success' onClick={test} size='lg'>
                                Atender
                            </Button>
                        </div>
                        <div className='col-5 mx-auto mt-2'>
                            <Button variant='warning' onClick={test} size='lg'>
                                Ocupado
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AgentContainer;
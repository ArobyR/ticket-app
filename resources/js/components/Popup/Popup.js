import {BrowserRouter as Router, Link, Route, Redirect} from 'react-router-dom';
import '../../../css/global.css';
import './popup.css'
import {Button, Modal} from 'react-bootstrap';

const Popup = (props) => {    
    return (
        <Modal
            {...props}
            size='md'
            aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title'>
                    Informacion:
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3 className='text-center'>{props.text}</h3>
                {props.image ?
                    <img className='d-flex mx-auto' alt='codigo qr' src={props.image} />
                    :
                    null
                }
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    href='#'
                    variant='dark' 
                    size='lg' 
                    block onClick={props.onHide}
                >Cerrar</Button>
            </Modal.Footer>
        </Modal>
    );
}
 
export default Popup;
        // <div  className='btn-style'>
        //     <Router>
        //         <Link style={{textDecoration: 'none'}}  to='/page2'>SOY UN BOTON</Link>   
        //     </Router>

        // </div>
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter } from 'react-router-dom';
import TicketList from './TicketList/TicketList';

import NavContainer from './NavContainer/NavContainer'
import TicketView from '../pages/Ticket/TicketView'
import UserList from './UserList/UserList';
import UserRegister from './UserRegister/UserRegister';

function App() {
    return (
        <div>
            {/* <TicketView /> */}
            <UserList />
            {/* <UserRegister /> */}
            {/* <NavContainer />                 */}
            {/* <TicketList /> */}
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

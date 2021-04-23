import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter } from 'react-router-dom';

import NavContainer from './NavContainer/NavContainer'

function App() {
    return (
        <div>
            <NavContainer />                

        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

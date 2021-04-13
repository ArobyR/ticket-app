import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 

function App() {
    return (
        <div className="">
            <h2 className='text-center display-2'>Home page</h2>
        </div>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App/>, document.getElementById('root'));
}

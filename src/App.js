import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './css/App.css'
import { useState } from 'react';
import Home from './components/Home';

function App(){
    const [employe, setEmploye] = useState([{
        nom: 'Aaron James',
        poste: 'salle'
    },{
        nom: 'Amanda Wallace',
        poste: 'salle'
    },{
        nom: 'Angela Danger',
        poste: 'salle'
    },{
        nom: 'Abella White',
        poste: 'salle'
    },{
        nom: 'Agnes Liles',
        poste: 'cuisine'
    },{
        nom: 'Kenneth Burnett',
        poste: 'cuisine'
    },{
        nom: 'Jawad Abbas',
        poste: 'cuisine'
    },{
        nom: 'Fabrice Piel',
        poste: 'cuisine'
    }]);

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home employe={employe} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
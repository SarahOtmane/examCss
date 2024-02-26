import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Burger from './components/Burger';
import './css/App.css'
import { useState } from 'react';
import Home from './components/Home';
import AddTips from './components/AddTips';

function App(){
    const [allEmploye, setAllEmploye] = useState([
        { nom: 'Aaron James', poste: 'salle' },
        { nom: 'Amanda Wallace', poste: 'salle' },
        { nom: 'Angela Danger', poste: 'salle' },
        { nom: 'Abella White', poste: 'salle' },
        { nom: 'Agnes Liles', poste: 'cuisine' },
        { nom: 'Kenneth Burnett', poste: 'cuisine' },
        { nom: 'Jawad Abbas', poste: 'cuisine' },
        { nom: 'Fabrice Piel', poste: 'cuisine' },
        { nom: 'Darlene Robertson', poste:'salle'}
    ]);

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home allEmploye={allEmploye} />} />
                <Route path='/tips' element={<AddTips />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
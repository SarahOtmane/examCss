import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Burger from './components/Burger.js';
import Header from './components/Header';

import './css/App.css'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/burger'  element={<Burger />}/>
                <Route path='/header' element={<Header />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
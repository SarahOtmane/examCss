import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Burger from './components/Burger.js';

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Burger />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
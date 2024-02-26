import { useState} from "react";
import Header from "./Header";
import Employe from "./Employe";
import Service from './Service';

function Home({ allEmploye, isDarkMode, setIsDarkMode }) {
    const [employeSelected, setEmployeSelected] = useState([]);

    const [postC, setPostC] = useState('salle');

    const cuisine = allEmploye.filter(emp => emp.poste === 'cuisine');
    const salle = allEmploye.filter(emp => emp.poste === 'salle');

    const postClick = (event) => {
        const clickedButton = event.target.name;

        if (clickedButton === 'salle') {
            setPostC('salle');
        } else if (clickedButton === 'cuisine') {
            setPostC('cuisine');
        } else {
            setPostC('service');
        }
    }

    return (
        <body className={`${isDarkMode ? "darkMode" : " "}`}>
            <Header titre={`${postC === 'service' ? "Récapitulatif du service" : "Qui travaille aujourd'hui ?"}`} isDarkMode={isDarkMode} />
            <main className={`home ${isDarkMode ? "darkMode" : " "}`}>
                <article>
                    <button
                        onClick={event => postClick(event)}
                        className={`${postC === 'salle' ? 'click' : ''}`}
                        name='salle'
                    >
                        salle
                    </button>
                    <button
                        onClick={event => postClick(event)}
                        className={`${postC === 'cuisine' ? 'click' : ''}`}
                        name='cuisine'
                    >
                        cuisine
                    </button>
                    <button
                        onClick={event => postClick(event)}
                        className={`${postC === 'service' ? 'click' : ''}`}
                        name='service'
                    >
                        service
                    </button>
                </article>

                {postC === "salle" && <Employe post="salle" list={salle} employeSelected={employeSelected} setEmployeSelected={setEmployeSelected} setPostC={setPostC} />}
                {postC === "cuisine" && <Employe post="cuisine" list={cuisine} employeSelected={employeSelected} setEmployeSelected={setEmployeSelected} setPostC={setPostC} />}
                {postC === "service" && <Service employeSelected={employeSelected} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}
            </main>
        </body>
    )
}   

export default Home;

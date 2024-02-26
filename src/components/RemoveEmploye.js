import Header from "./Header";
import { useState } from "react";

import avatar from '../svg/avatar.svg';


function RemoveEmploye({allEmploye, setAllEmploye, isDarkMode}){
    const [postC, setPostC] = useState('salle');

    const cuisine = allEmploye.filter(emp => emp.poste === 'cuisine');
    const salle = allEmploye.filter(emp => emp.poste === 'salle');

    const postClick = (event) => {
        const clickedButton = event.target.name;

        if (clickedButton === 'salle') {
            setPostC('salle');
        } else{
            setPostC('cuisine');
        }
    }


    return(
        <body className="remove">
            <Header titre="Suppression d'employés" />
            <article className="remove">
                <button
                    className={`${postC === 'salle' ? 'click' : ''}`}
                    name='salle'
                    onClick={event => postClick(event)}
                >
                    service
                </button>
                <button
                    onClick={event => postClick(event)}
                    className={`${postC === 'cuisine' ? 'click' : ''}`}
                    name='cuisine'
                >
                    cuisine
                </button>
            </article>
            <ul>
                {postC === "salle" && salle.map((employe, index) => (
                    <li key={index}>
                        <img src={avatar} alt='Avatar'/> 
                        <p>{employe.nom}</p> 
                        <p className='poste'>{employe.poste}</p>
                    </li>
                ))}
                {postC === "cuisine" && cuisine.map((employe, index) => (
                    <li key={index}>
                        <img src={avatar} alt='Avatar'/> 
                        <p>{employe.nom}</p> 
                        <p className='poste'>{employe.poste}</p>
                    </li>
                ))}
            </ul>
        </body>
    )
}

export default RemoveEmploye;
import Header from "./Header";
import { useState } from "react";

import avatar from '../svg/avatar.svg';

import avatarAdmin from '../svg/avatarAdminN.svg';
import avatarAdd from '../svg/avatarAddN.svg';
import avatarRemove from '../svg/avatarRemoveO.svg';

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

    const [zIndex, setZIndex] = useState(-2);

    const handleClick = () => {
    const currentZIndex = zIndex;

    const newZIndex = currentZIndex + 2;

    setZIndex(newZIndex);
    };

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
                    <li key={index} className="relative"  onClick={handleClick}>
                        <img src={avatar} alt='Avatar'/> 
                        <p>{employe.nom}</p> 
                        <p className='poste'>{employe.poste}</p>
                        <button className="supp" style={{ zIndex: zIndex }}>Supression</button>
                    </li>
                ))}
                {postC === "cuisine" && cuisine.map((employe, index) => (
                    <li key={index} className="relative"  onClick={handleClick}>
                        <img src={avatar} alt='Avatar'/> 
                        <p>{employe.nom}</p> 
                        <p className='poste'>{employe.poste}</p>
                        <button className="supp" style={{ zIndex: zIndex }}>Supression</button>
                    </li>
                ))}
            </ul>
            <figure>
                <a href='/'><img src={avatarAdmin} alt="" /></a>
                <a href='/add'><img src={avatarAdd} alt="" /></a>
                <a href='/remove'><img src={avatarRemove} alt="" /></a>
            </figure>
        </body>
    )
}

export default RemoveEmploye;
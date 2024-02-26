import avatar from '../svg/avatar.svg';

import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";


function Service({employeSelected}){
    return(
        <section className='service'>
            <h2>Employés sélectionnés</h2>
            <ul>
                {employeSelected.map((employe, index) => (
                    <li key={index}>
                        <img src={avatar} alt='Avatar'/> 
                        <p>{employe.nom}</p> 
                        <p className='poste'>{employe.poste}</p>
                    </li>
                ))}
            </ul>
            <div>
                <div>
                    <p>Service</p>
                    <button className='dark'>
                        <GoSun className='icon' />
                        <IoMoonOutline className='icon' />
                    </button>
                    <p>midi</p>
                </div>
                <button type='submit'>Commencer le service !</button>
            </div>
        </section>
    )
}

export default Service;
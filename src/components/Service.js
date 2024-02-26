import avatar from '../svg/avatar.svg';

import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";


function Service({employeSelected, isDarkMode, setIsDarkMode}){
    const changeMode = () =>{ setIsDarkMode(!isDarkMode) }

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
                    <button className='dark' onClick={changeMode}>
                        <GoSun className={`icon ${isDarkMode ? "dark" : "light"}`} />
                        <IoMoonOutline className='icon' />
                    </button>
                    <p>{isDarkMode ? "soir" : "midi"}</p>
                </div>
                <button type='submit'>Commencer le service !</button>
            </div>
        </section>
    )
}

export default Service;
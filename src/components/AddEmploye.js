import Header from "./Header";
import Input from "./Inputt";
import Button from "./Button";

import { PiCookingPot } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

import { useState } from "react";


function AddEmploye({isDarkMode}){
    const [poste, setPoste] = useState('serveur');

    const changePoste = () =>{
        if(poste === "serveur") setPoste("cuisinier");
        else setPoste("serveur")
    }

    return(
        <body className="addEmploye">
            <Header titre="Ajouter un pourboire" />
            <Input placeholder="Vox" label="Nom" id="lastNameEmploye"  />
            <Input placeholder="Lana" label="Prénom" id="nameEmploye" />
            <p>Poste occupé</p>
            <button className='poste' onClick={changePoste}>
                <BiDish className={`icon ${isDarkMode ? "dark" : "light"} ${poste==="serveur" ? "selected" : ""}`} />
                <PiCookingPot className={`icon ${poste==="cuisinier" ? "selected" : ""}`} />
            </button>
            <p>{poste==="serveur" ? "Serveur" : "Cuisinier"}</p>
        </body>
    )
}

export default AddEmploye;
import Header from "./Header";
import Input from "./Inputt";
import Button from "./Button";

import { PiCookingPot } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

import { useState } from "react";


function AddEmploye({allEmploye, setAllEmploye, isDarkMode}){
    const [poste, setPoste] = useState('serveur');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] =useState("");

    const changePoste = () =>{
        if(poste === "serveur") setPoste("cuisinier");
        else setPoste("serveur")
    }

    const ajoutEmploye = (e) =>{
        e.preventDefault();
        let tab = allEmploye;
        tab.push({nom: `${nom} ${prenom}`, poste: poste});
        setAllEmploye(tab);
        console.log(allEmploye);
    }

    const inputChange= (event) =>{
        if(event.target.id === "lastNameEmploye") setNom(event.target.value);
        else setPrenom(event.target.value)
    }

    return(
        <body className="addEmploye">
            <Header titre="Ajouter un pourboire" />
            <form onSubmit={e => ajoutEmploye(e)}>
                <Input placeholder="Vox" label="Nom" id="lastNameEmploye" value={nom} inputChange={inputChange} />
                <Input placeholder="Lana" label="Prénom" id="nameEmploye" value={prenom} inputChange={inputChange} />
                <p>Poste occupé</p>
                <button className='poste' onClick={changePoste} type="button">
                    <BiDish className={`icon ${isDarkMode ? "dark" : "light"} ${poste==="serveur" ? "selected" : ""}`} />
                    <PiCookingPot className={`icon ${poste==="cuisinier" ? "selected" : ""}`} />
                </button>
                <p>{poste==="serveur" ? "Serveur" : "Cuisinier"}</p>
                <button type="submit">Ajouter</button>
            </form>
        </body>
    )
}

export default AddEmploye;
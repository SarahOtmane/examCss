import Header from "./Header";
import Input from "./Inputt";

import { PiCookingPot } from "react-icons/pi";
import { BiDish } from "react-icons/bi";

import { useState } from "react";

import avatarAdmin from '../svg/avatarAdminN.svg';
import avatarAdd from '../svg/avatarAddO.svg';
import avatarRemove from '../svg/avatarRemoveN.svg';


function AddEmploye({allEmploye, setAllEmploye, isDarkMode}){
    const [poste, setPoste] = useState('salle');
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] =useState("");

    const changePoste = () =>{
        if(poste === "salle") setPoste("cuisine");
        else setPoste("salle")
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
            <Header titre="Ajout d'employés" />
            <form onSubmit={e => ajoutEmploye(e)}>
                <Input placeholder="Vox" label="Nom" id="lastNameEmploye" value={nom} inputChange={inputChange} />
                <Input placeholder="Lana" label="Prénom" id="nameEmploye" value={prenom} inputChange={inputChange} />
                <p>Poste occupé</p>
                <button className='poste' onClick={changePoste} type="button">
                    <BiDish className={`icon ${isDarkMode ? "dark" : "light"} ${poste==="salle" ? "selected" : ""}`} />
                    <PiCookingPot className={`icon ${poste==="cuisine" ? "selected" : ""}`} />
                </button>
                <p>{poste==="salle" ? "Serveur" : "Cuisinier"}</p>
                <button type="submit">Ajouter</button>
            </form>
            <figure>
                <a href='/'><img src={avatarAdmin} alt="" /></a>
                <a href='/add'><img src={avatarAdd} alt="" /></a>
                <a href='/remove'><img src={avatarRemove} alt="" /></a>
            </figure>
        </body>
    )
}

export default AddEmploye;
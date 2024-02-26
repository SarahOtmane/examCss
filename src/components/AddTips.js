import Header from "./Header";
import Input from "./Inputt";
import Tips from "./Tips";

import { useState } from "react";

import check from "../svg/check.svg"

function AddTips({isDarkMode}){
    const [message, setMessage] = useState(false);

    const afficheMessage = () => {
        setMessage(true);
    };
    
    return(
        <body className={`addTips ${isDarkMode ? "darkMode" : " "}`}>
            <Header titre="Ajouter un pourboire" />
            <Input placeholder="Cerise" label="Nom de table" id="nameTable"  />
            <Input placeholder="3" label="Montant de pourboire" id="tips" />
            <div className="shortcut">
                <Tips value="0.50" />
                <Tips value="1.00" />
                <Tips value="2.00" />
            </div>
            <div className="input">
                <button className="button" onClick={afficheMessage}>Ajouter un pourboire</button>
            </div>

            {message && <div className="message">
                <p>Ajouter un pourboire <img src={check} alt='check' /></p>
            </div>}
        </body>
    )
}

export default AddTips;
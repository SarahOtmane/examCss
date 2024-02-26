import Header from "./Header";
import Input from "./Inputt";
// import Tips from "./Tips";
import Button from "./Button";
import Burger from "./Burger";

function AddTips({isDarkMode}){
    
    return(
        <main className={`addTips ${isDarkMode ? "darkMode" : " "}`}>
            <Header titre="Ajouter un pourboire" />
            <Input placeholder="Cerise" label="Nom de table" id="nameTable"  />
            <Input placeholder="3" label="Montant de pourboire" id="tips" />
            <div className="shortcut">
                {/* <Tips value="0.50" />
                <Tips value="1.00" />
                <Tips value="2.00" /> */}
            </div>
            <Button value="Ajouter un pourboire" />
        </main>
    )
}

export default AddTips;
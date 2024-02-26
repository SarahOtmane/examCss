import Header from "./Header";
import Input from "./Inputt";

function AddTips (){
    return <div>
        <Header titre="Ajouter un pourboire" />
        <Input placeholder="Cerise" label="Nom de table" id="nameTable"  />
        <Input placeholder="3" label="Montant de pourboire" id="tips" />
    </div>
}

export default AddTips;
import avatar from '../svg/avatar.svg'


function Employe({post, list, employeSelected, setEmployeSelected, setPostC}){
    const selectionEmploy = (employe) =>{
        if (employeSelected.includes(employe)) {
            setEmployeSelected(prevSelection => prevSelection.filter(emp => emp !== employe));
        } else {
            setEmployeSelected(prevSelection => [...prevSelection, employe]);
        }
    }

    const pageSuivante = (event) =>{
        if(event.target.name === "salle") setPostC("cuisine");
        else setPostC("service")
    }

    return(
        <section className="employe">
            <ul>
                {list.map((employe, index) => (
                    <li key={index}>
                        <div>
                            <img src={avatar} alt='Avatar'/> 
                            <p>{employe.nom}</p> 
                        </div>
                        <input type="checkbox" onChange={() =>selectionEmploy(employe)}></input>
                    </li>
                ))}
            </ul>
            <button type='submit' name={post} onClick={e => pageSuivante(e)}>
                Suivant 
                <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.5625 15.875L18 8.4375L10.5625 1M18 8.4375H1H18Z" stroke="#FF6B40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </section>
    )
}

export default Employe;
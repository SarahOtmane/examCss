import { useState } from "react";
import Header from "./Header";
import Salle from "./Salle";
import Cuisine from './Cuisine';
import Service from './Service';

function Home(employe){
    const cuisine = [];
    const salle = [];

    const [postC, setPostC] = useState('salle');

    for(let i=0; i<employe.length; i++){
        if(employe[i].poste === 'cuisinie') cuisine.push(employe[i])
        else salle.push(employe[i]);
    }

    const postClick = (event) =>{
        if(event.target.name === 'salle') setPostC('salle')
        else if(event.target.name === 'cuisine') setPostC('cuisine');
        else setPostC('service');
    }

    return(
        <>
            <Header />
            <main>
                <article>
                    <button onClick={event => postClick(event)} name='salle'>salle</button>
                    <button onClick={event => postClick(event)} name='cuisine'>cuisine</button>
                    <button onClick={event => postClick(event)} name='service'>service</button>
                </article>
                
                {postC==="salle" && <Salle />}
                {postC==="cuisine" && <Cuisine />}
                {postC==="service" && <Service />}
            </main>
        </>
    )
}

export default Home;
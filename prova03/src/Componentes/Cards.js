import { useEffect, useState } from "react";
import CardSecond from "./CardSecond"

const Cards = () => {
    const url = "https://random-data-api.com/api/food/random_food?size=10"

    const [dadosComida,setDadosComida] = useState([]);

    const getDadosComida = async () => {
        const response = await fetch(url);
        const dadosJson = await response.json();
        setDadosComida(dadosJson)
    };

    useEffect(() => {       
        getDadosComida();
    }, []);

    return(
        <>
            {dadosComida.map( (itens) =>{
                const {id, vid, dish, description, measurement} = itens;
                return(
                    <CardSecond   
                    key={id}                 
                    icone="far fa-calendar"
                    titulo={dish}
                    data={description}
                    id={id}
                />
                )
            } )}        
        </>
    )
}
export default Cards;
import { useState,useEffect } from "react";
import Ficha from './ficha';
import Menu from './menu';
import { useParams } from "react-router-dom";

const ImportadorList=({tipof})=>{
    const {cat}=useParams();

    const [fichas,setFichas]=useState([]); //alamacena toda la base de datos
    const [catalogos,setCatalogos]=useState([null]); //almacena una lista con todos los catalogos de todos los articulos
    const [catalogoelegido,setCatalagoelegido]=useState([null]); //almacena la informacion de un articulo

        //carga la base de datos e inicializa el catalogo
    useEffect(()=>{
        fetch('src/data/items.json')
        .then(res => res.json())
        .then(data => {
            setFichas(data);
            if (data.length>0) {
                setCatalogos(data.find(categoria => categoria.category === cat));
                }
            }
        )
    },[]);

        //se crea un una listado que almacena los catalogos unicos en la base de datos
    useEffect(() => {
        if (catalogos) {
            const categoria = fichas.find(categoria => categoria.category === catalogos);
            setCatalagoelegido(categoria);
        }
    }, [catalogos, fichas]);

    const catal = [...new Set(fichas.map(categoria => categoria.category))];
    const catalogo=catal.map((link)=>({label:link , href:`/tienda/catalogo/${link}`}));
    console.log({catalogos});
    
        
    /*-------------------------------------------------------------------------------*/
        
    return(
            tipof==='catalogo'
                ? <>
                    <Menu clase="categoria" tipo="e1" links={catalogo} />
                </>
                : 
                <>
                    {/* {fichas.map((ficha, index) => <Ficha key={index+1} tipo={tipof} {...ficha} tag="Nuevo"/>)} */}
                    {fichas.map((ficha, index) => <Ficha key={index+1} tipo={tipof} {...ficha} tag="Nuevo"/>)}
                </>
    );
};

export default ImportadorList;
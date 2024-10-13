
/*Crea etiquetas Anchor (<a/>) con una clase general estatica (enlace) 
y una clase dinamica con sufijo (__enlace) asociada a la llamada del componente 
utiilzando como objeto un texto*/

const Enlace=({clase,etiqueta,href='#'}) =>{
    const i=!href;

    return(
        <a className={i?'enlace1':`enlace ${clase}__enlace`} href={i?undefined:href}> {etiqueta} </a>
    );
};
export default Enlace;
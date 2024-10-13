//import Enlace from "./enlace";
import EnlaceIcon from "./enlaceicon";
//import Menu from "./menu";

/*componente que crea un proceso de seleccion de comportamientos
que se ejecutaran como entrada para un tipo de registro para cada seccion de Main*/
const Ficha = ({tipo, href, category,portada,icono,name,tag,comentario,dues,price,img, children})=>{

    switch (tipo) {

        case 'estandarte': 
            return(
                <figure>
                    <EnlaceIcon clase="estandarte" icono={img.front} href={href}/>
                    <figcaption>{name}</figcaption>
                </figure>
            );
        /*se integra <seccion/> -- portadas articulos, a traves de sidebar,*/
        case 'portada':
            return (
                <>
                    <figure className="portada">
                        <img src={portada} alt="fondo de categoria" />
                        <figcaption>{category} </figcaption>
                    </figure>
                </>
            );
        /*se integra <seccion/> -- portadas articulos, a traves de navegacion, es excluyente con "detalle" y "portada"*/
        case 'articulo':
            return (
                <>
                {/* <EnlaceIcon clase="regreso" icono="src/assets/main/back.png" href={href}/> */}
                <article className="articulo">
                    <picture>
                        <span>{tag}</span>
                        <img src={img.front} alt="fondo de articulo" />
                    </picture>
                    <article className="articulo__info">
                        <h3>{name}</h3>
                        {/* <audio src="src/assets/catalogo1/audio1.png"></audio> */}
                        <p className="item__info--price">$ {price} .-</p>
                        <p className="item__info--dues">{dues}</p>
                        {/* <video src="src/assets/catalogo1/video1.png"></video> */}
                    </article>
                </article>
                {/* <EnlaceIcon clase="cambio" icono="src/assets/main/cambio.png" href={href}/> */}
            </>
        );
        /*se integra <seccion/> -- portadas articulos, a traves de navegacion, es excluyente con "articulo" y "portada"*/
        case 'detalle':
            return(
                <>
                    {/* <EnlaceIcon clase="regreso" icono="src/assets/main/back.png" href={href}/> */}
                    <article className="detalle">
                        <picture>
                            <span>{tag}</span>
                            <img src={img.back} alt="fondo de articulo" />
                        </picture>
                        <article className="detalle_info">
                            <h3>{name}</h3>
                            <video src="src/assets/catalogo1/video1.png"></video>
                            <p className="detalle__info--price">$ {price} .-</p>
                            <p className="detalle__info--dues">{dues}</p>
                            <p className="detalle__info--descripcion">{descripcion}</p>
                            <audio src="src/assets/catalogo1/audio1.png"></audio>
                            <p className="detalle_info--comentario">{comentario}</p>
                        </article>
                    </article>
                    {/* <EnlaceIcon clase="cambio" icono="src/assets/main/cambio.png" href={href}/> */}
                </>
            );
        default: content = null; // No renderiza nada para otros valores o si el valor es vacío
    }
}

export default Ficha;


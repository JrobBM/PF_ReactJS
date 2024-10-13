// import { Icon } from '@iconify/react';
import Menu from "../../components/menu";
import EnlaceIcon from "../../components/enlaceicon";


const Header = () => {
    const links =[
        { label:'Inicio', pag:'main', href:'/' },
        { label:'Tienda', pag:'main1', href:'/tienda'},
        { label:'Contacto', pag:'main2', href:'/contacto'}
    ];

    const links1 =[
        { icono:'src/assets/header/solarmusicnote4broken.png', href:'#' },
        { icono:'src/assets/header/fluentscanperson24regular.png', href:'#'},
        { icono:'src/assets/header/mdinotebookfavoriteOutline.png', href:'#'},
        { icono:'src/assets/header/letsiconspackagecar.png', href:'#'}
    ];

    return(
        <header className="header">
            <figure>
                <img src='src/assets/header/logo.png' alt="Logo" />
                <figcaption>Imagen Logo</figcaption>
            </figure>
            <nav>
                <Menu tipo="e1"clase="navbar" links={links}/>
                <li className="navbar__finder">
                        <input  className="navbar__in"
                                type="text"
                                placeholder="Buscar"
                                name='encontrar'
                        />
                        <EnlaceIcon clase="busqueda" icono="src/assets/header/ouiwssearch.png"/>
                </li>
            </nav>
            <nav>
                <Menu tipo="i1" clase="navbar1" links={links1}/>
            </nav>
            <figure>
                <EnlaceIcon clase="carrito" icono="src/assets/header/solarcart2broken.png" texto={0}/>
            </figure>
        </header>
    );
};
export default Header;
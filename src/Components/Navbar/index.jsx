
// const Navbar = ()=> {
//     return(
//         <div>
//             <header>
//                 <nav className="barnavb">
//                     <div href="#" className="barnavc">
//                         <ul>
//                             <li><a href="./pages/redstone.html">Redstone</a></li>
//                             <li><a href="./pages/estructuras.html">Estructuras</a></li>
//                             <li><a href="./pages/aldeanos.html">Aldeanos</a></li>
//                             <li><a href="./pages/granjas.html">Granjas</a></li>
//                         </ul>
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     )
// }
/************************************************************************ */
import logo from '../../assets/imagenes/iconos/mob.png';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList';

const Navbar = () => {
        return(
            <div>
                <header className="header">
                    <nav className="navbar container">
                        <figure className="navbar__logo">
                            <img src={logo} alt="" />
                            <p>Aqui va el Titulo de la pagina que aun no eh decidido</p>
                        </figure>
                        <menu className="navbar__menu">
                            <ItemList label="Tienda"/>
                            <ItemList label="Contacto"/>
                            <ItemList label="Sesion"/>
                            <li>
                                <a href="" className='navbar__link'>
                                    <CartWidget quantity={5}/>
                                </a>
                            </li>
                        </menu>
                    </nav>
                </header>
            </div>
        )
    }
export default Navbar;
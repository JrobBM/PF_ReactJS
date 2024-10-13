/*Crea etiquetas Menu (<menu/>) con una clase general estatica (menu) y una clase dinamica 
con sufijo (__menu) asociada a la llamada del componente, adicionalmente integra un elemento li por cada 
(link) en la entrada (links --> base de datos donde se alojan los objetos) a la cual asigna 
una clase general estatica (menu_item), una clase dinamica con sufijo (__menu) asociada a la llamada 
del componente y dependiendo del requirimiento un componeten <Enlace/> ó <Iconbtn/>*/

import { NavLink } from "react-router-dom";
import Enlace from "./enlace";
import EnlaceIcon from "./enlaceicon";
import SupIndice from "./supindice";

const Menu=({links,clase, tipo,texto,children})=>{
    switch (tipo) {
        case 'e1':
            return(
                <menu className={`menu ${clase}__menu`}>
                    {links.map((link, index)=>   
                                <li key={index+1} className={`menu__item ${clase}__item`}>
                                    <NavLink to={link.href}>{link.label}</NavLink>
                                </li>
                            )}
                    {children} 
                </menu>
                );
        case 'e':
            return(
                <menu className={`menu ${clase}__menu`}>
                    {links.map((link, index)=>   
                                <li key={index+1} className={`menu__item ${clase}__item`}>
                                    <Enlace clase={clase} href={link.href} etiqueta={link.label}/>
                                </li>
                            )}
                    {children} 
                </menu>
                );
        case 'i1':
            return(
                <menu className={`menu ${clase}__menu`}>
                    {links.map((link, index)=>   
                                <li key={index+1} className={`menu__item ${clase}__item`}>
                                    <NavLink to={link.href}>
                                        <img className={`${clase}__ibtn`} src={link.icono} alt="" />
                                        <SupIndice texto={link.texto}/>
                                    </NavLink>
                                </li>
                            )}
                    {children} 
                </menu>
                );
        case 'i':
            return(
                <menu className={`menu ${clase}__menu`}>
                    {links.map((link, index)=>   
                                <li key={index+1} className={`menu__item ${clase}__item`}>
                                    <EnlaceIcon clase={clase} href={link.href} icono={link.icono} texto={texto}/>
                                </li>
                            )}
                    {children} 
                </menu>
                );
        
        default:
            content = null; // No renderiza nada para otros valores o si el valor es vacío
    }

};
export default Menu;
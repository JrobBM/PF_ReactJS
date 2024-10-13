/*Crea etiquetas Anchor (<a/>) con una clase general dinamica (clase) 
y una clase dinamica con sufijo (__ibtn) asociada a la llamada del componente 
utiilzando como objeto un icono y un objeto texto/numero*/

//import { Icon } from '@iconify/react';
import SupIndice from './supindice';


const EnlaceIcon = ({clase, icono="src/assets/header/solarforbiddenbroken.png", texto="0", href="#"}) => {
    return (
        <a className={`enlaceicon ${clase}__eicon`} href={href}>
            {/*<Icon className={`${clase}__ibtn`} icon={icono} href={href}/>*/}
            <img className={`${clase}__ibtn`} src={icono} alt="" />
            <SupIndice texto={texto}/>
        </a>
    );
};
export default EnlaceIcon;
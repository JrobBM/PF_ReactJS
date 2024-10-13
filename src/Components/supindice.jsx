/*Crea etiquetas <span/> con una clase general estatica (supindice) 
y un objeto texto/numero asociado a la llamada del componente 
utiilzando como superindice en otros componentes */

const SupIndice = ( {texto} ) => <span className='supindice'>{ texto }</span>;

export default SupIndice;
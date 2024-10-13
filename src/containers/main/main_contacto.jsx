import Menu from "../../components/menu";
//import { Icon } from '@iconify/react';


const Main = () => {

    const links =[
        { label:'Email', href:'#' },
        { label:'Ubicacion', href:'#'},
        { label:'Telefono', href:'#'},
    ];

    return(
    
        <main className="mainc">
            <aside className="sidebar">
                <h2>Filtros de Categoría</h2>
                <nav>
                    <Menu clase="categoria" tipo="e" links={links}/>
                </nav>
                <h2>Filtros de Categorías</h2>
            </aside>
            <article className="contacto">
                    <figure>
                        <img src="src\assets\main\email.png" alt=""/>
                        <figcaption>Email</figcaption>
                    </figure>
                    <figure>
                        <img src="src\assets\main\ubicacion.png" alt=""/>
                        <figcaption>Ubicacion</figcaption>
                    </figure>
                    <figure>
                        <img src="src\assets\main\telefono.png" alt=""/>
                        <figcaption>Telefono</figcaption>
                    </figure>
            </article>
        </main>
    );
};

export default Main;
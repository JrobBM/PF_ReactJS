
import { Routes , Route } from "react-router-dom";
import ImportadorList from "../../components/importador";
import Menu from "../../components/menu";
import Naviagtion from "./navegacion";
//import { Icon } from '@iconify/react';


const Main = () => {
    
    const links =[
        { label:'Categoria1', href:'#' },
        { label:'Categoria2', href:'#'},
        { label:'Categoria3', href:'#'},
        { label:'Categoria4', href:'#'},
        { label:'Categoria5', href:'#'}
    ];

    return(
    
        <main className="maint">
                <aside className="sidebar">
                    <h2>Filtros de Categoría</h2>
                        <nav>
                            <ImportadorList tipof="catalogo"/>
                        </nav>
                    <h2>Filtros de Categorías</h2>
                </aside>
                <section className="principal">
                    <figure className="portadas">
                        <ImportadorList tipof="portada"/>
                    </figure>
                    <section className="articulos">
                        <Routes>
                            <Route exact path='/tienda/catalogo/:cat' element={<ImportadorList tipof="articulo"/>}/>
                            <Route path="/" element={<ImportadorList tipof="articulo"/>} />
                        </Routes>
                    </section>
                    {/* <section className="detalles">
                        <ImportadorList tipof="detalle"/>
                    </section> */}
                </section>
                <section className="navegacion">
                    <nav>
                    <ImportadorList tipof="estandarte"/>
                    </nav>
                </section>
        </main>
    
    );
};

export default Main;
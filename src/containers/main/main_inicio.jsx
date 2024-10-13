import Menu from "../../components/menu";


const Main = () => {
    
    const links =[
        { label:'Ofertas', href:'#' },
        { label:'Nuevos', href:'#'},
        { label:'Recomendados', href:'#'}
    ];

    return(
    
        <main className="maini">
            <aside className="sidebar">
                <h2>Filtros de Categoría</h2>
                <nav>
                    <Menu clase="categoria" tipo="e" links={links} />
                </nav>
                <h2>Filtros de Categorías</h2>
            </aside>
            <article className="inicio">
                <picture>
                    <img src="src/assets/main/personaje.gif" alt="" />
                    <img src="src/assets/main/main_inicio.png" alt="" />
                </picture>
            </article>
        </main>
    );
};

export default Main;
import Header from '../containers/Header';

const BaseLayout=({children})=>{
    

    return (
        <>
            <Header/>
            {children}
            <footer>
                <p>Pie del Sitio</p>
            </footer>
        </>
    );
};
export default BaseLayout;
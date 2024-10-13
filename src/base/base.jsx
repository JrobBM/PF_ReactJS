import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from "../containers/header/header"
import MainI from "../containers/main/main_inicio";
import MainC from "../containers/main/main_contacto";
import Main from "../containers/main/main";
import Footer from "../containers/footer/footer";

const Base=()=>{
    
    return (
        <BrowserRouter>
            <Header/>

            <Routes>
                <Route exact path='/' element={<MainI/>}/>
                <Route exact path='/tienda' element={<Main/>}/>
                <Route exact path='/tienda/catalago/:id' element={<Main/>}/>
                <Route exact path='/contacto' element={<MainC/>}/>
            </Routes>

            <Footer/>
        </BrowserRouter>
    );
};
export default Base;

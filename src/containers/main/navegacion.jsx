import { useParams } from "react-router-dom";
import ImportadorList from "../../components/importador";

const Naviagtion = () => {

    return(
        <section className="articulos">
            <ImportadorList tipof="articulo"/>
        </section>
    );
}
export default Naviagtion;

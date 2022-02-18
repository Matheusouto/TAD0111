import Titulos from "./Componentes/Titulos";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Cards from "./Componentes/Cards";

function Noticias() {
    return(
        <>
            <Navbar/> 
            <main className="m-4">
                <Titulos tit="Notícias" />
                <section id="noticias" className="m-4">
                    <div className="container-fluid">
                        <div className="row">
                            <Cards />
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>        
        </>
    );
}
export default Noticias;
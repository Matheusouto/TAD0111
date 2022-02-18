import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import SubTitulos from "./Componentes/SubTitulos";
import Titulos from "./Componentes/Titulos";

function Calendario() {
    return(
        <>
            <Navbar/>  
            <main className="m-4">
                <Titulos tit="Calendário" />
                <section id="semanal" className="m-4">
                    <SubTitulos tit="Eventos da Semana" />
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active bg-azul-escuro"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1" className="bg-azul-escuro"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-sm-flex text-center">
                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />

                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />
                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-sm-flex text-center">
                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />

                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />
                                    <Card
                                        icone="far fa-calendar"
                                        titulo="Matrícula para o período 2021.2."
                                        data="30/09/2021 - 07/10/2021"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <section id="anual" className="m-4">
                    <SubTitulos tit="Eventos do Ano" />
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">DATA</th>
                                <th scope="col">DESCRIÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan="2" className="bg-azul-claro">Fevereiro</th>
                            </tr>
                            <tr>
                                <th scope="row">19/02/2022</th>
                                <td>Término do período letivo 2021.2.</td>
                            </tr>
                            <tr>
                                <th scope="row">...</th>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </table>
                 </section>
            </main>
            <Footer/>        
        </>
    );
}
export default Calendario;
import Titulos from "./Componentes/Titulos";
import SubTitulos from "./Componentes/SubTitulos";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";

function Formularios() {
    return(
        <>
            <Navbar />
            <main className="m-4">
                <Titulos tit="Documentos" />
                <section className="mx-4 mt-4">
                    <SubTitulos tit="Formularios" />
                    <table className="table table-striped text-center">
                        <thead>
                            <tr>
                                <th scope="col">ANEXO</th>
                                <th scope="col">DESCRIÇÃO</th>
                                <th scope="col">RESOLUÇÃO</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><th>Anexo I</th>
                                <th>FICHA DE REGISTRO DE PRÉ-PROJETO</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo I</th>
                                <th>FORMULÁRIO PARA CONTABILIZAÇÃO DAS HORAS COMPLEMENTARES</th>
                                <th>RESOLUÇÃO Nº 01/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo II</th>
                                <th>FORMULÁRIO PARA CADASTRO DE PROJETO DE TCC</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo III</th>
                                <th>TERMO DE CONHECIMENTO DAS NORMAS DE TCC</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo IV</th>
                                <th>FORMULÁRIO DE AVALIAÇÃO de TCCI</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo V</th>
                                <th>ATA DE DEFESA DE TCC</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th>Anexo VII</th>
                                <th>FORMULÁRIO DE AVALIAÇÃO DE TCCII</th>
                                <th>RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                            <tr>
                                <th> Anexo VI</th>
                                <th> NORMAS PARA ESCRITA DE MONOGRAFIA</th>
                                <th> RESOLUÇÃO Nº 02/2019</th>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </main>
            <Footer />        
        </>
    );
}
export default Formularios;
const Footer = () => {
    return(
        <footer className="container-fluid branco bg-azul-escuro branco">
            <div className="row align-items-center p-4">
                <div className="col-12 col-sm-3 displayed" > 
                    <figure>
                        <img src="https://arquivos.info.ufrn.br/arquivos/201913023034eb6318005a55275305503/nometads.png" alt="nometads.png"/>                        
                    </figure>
                </div>
                <div className="col-12 col-sm-9">
                    <address className="whiteSpacePreline">
                        <a href="https://sigaa.ufrn.br" target="_blank">SIGAA - Sistema Integrado de Gestão de Atividades Acadêmicas</a> <br/>
                        CURSO DE ANÁLISE E DESENVOLVIMENTO DE SISTEMAS / EAJ <br/>
                        ESCOLA AGRÍCOLA DE JUNDIAÍ - EAJ <br/>
                        Telefone/Ramal: (84) 3342-2297/227 <br/>
                    </address>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
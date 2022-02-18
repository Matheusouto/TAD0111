import Card from "./Componentes/Card";
import Footer from "./Componentes/Footer";
import Navbar from "./Componentes/Navbar";
import Titulos from "./Componentes/Titulos";

function Init() {

    return (
        <>
            <Navbar />
            <main className="m-4">
                <section id="apresentacao" className="mx-4">
                    <article>
                        <Titulos tit="Apresentação" />

                        <figure className="my-3">
                            < img src="https://arquivos.info.ufrn.br/arquivos/201407408477332148643a980769a39f0/capa.jpg" alt="Minha Figura" className="displayed w-100 w-sm-75" />
                        </figure>
                        <p>
                            O Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) tem como objetivo a formação de profissionais capazes de compreender o processo de construção e reconstrução do conhecimento no domínio da análise e desenvolvimento de sistemas e, dessa forma, realizar atividades de concepção, especificação, projeto, implementação, avaliação, suporte e manutenção de sistemas computacionais, orientando sua ação na sociedade em geral e no mundo do trabalho em particular para a busca de soluções para o setor produtivo (notadamente o setor primário da economia) e para a melhoria da qualidade de vida das populações. Os profissionais formados atuarão na área de análise e desenvolvimento de sistemas, podendo exercer atividades no campo da análise de sistemas, engenharia de software, gerência de projetos e administração de bancos de dados.
                        </p>
                        <p>
                            lém da formação geral em Tecnologia em Análise e Desenvolvimento de Sistemas, o curso tem objetivo de promover a integração entre as ciências agrárias e a denominada Tecnologia da Informação (TI) com suas diversas subáreas, obtendo-se assim uma gama de benefícios e ampliação do espectro de formação profissional em nível superior, considerando que um curso desta natureza permitirá ao egresso propor soluções tecnológicas em software e/ou hardware para as ciências agrárias ou, usando uma nomenclatura mais específica e mercadológica, para a cadeia do agronegócio e da agricultura familiar, sendo, nesse sentido estratégico para o desenvolvimento regional e nacional. Tais objetivos baseiam-se na formação de Tecnólogos com capacidade técnico-científica e visão integral, ética e humanística, comprometidos com o bem estar da sociedade envolvida e com o desenvolvimento sustentável, exercendo todas as competências relacionadas à profissão.
                        </p>
                    </article>
                </section>
                <section id="calendario" className="mx-4 mt-4">
                    <Titulos tit="Calendário" />
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active bg-azul-escuro"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1" className="bg-azul-escuro"></li>
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
                                        titulo="Início do período letivo 2021.2." 
                                        data="04/10/2021"
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
                                        titulo="Início do período letivo 2021.2." 
                                        data="04/10/2021"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="noticias" className="mx-4 mt-4">
                    <Titulos tit="Notícias" />
                    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators1" data-slide-to="0" className="active bg-azul-escuro"></li>
                            <li data-target="#carouselExampleIndicators1" data-slide-to="1" className="bg-azul-escuro"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-sm-flex text-center">
                                    <Card 
                                        icone="far fa-newspaper" 
                                        titulo="CALENDÁRIO PARA PROJETO DE TRABALHO DE CONCLUSÃO DE CURSO ANO/SEMESTRE 2022.1"
                                    />
                                    <Card 
                                        icone="far fa-newspaper" 
                                        titulo="SEMANA DE DEFESA DE TRABALHOS DE CONCLUSÃO DE CURSO - ANO/SEMESTRE 2021.2" 
                                    />
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="d-sm-flex text-center">
                                    <Card
                                        icone="far fa-newspaper"
                                        titulo="SEMANA DE DEFESA DE TRABALHOS DE CONCLUSÃO DE CURSO - ANO/SEMESTRE 2021.2"
                                    />
                                    <Card
                                        icone="far fa-newspaper"
                                        titulo="SEMANA DE DEFESA DE TRABALHOS DE CONCLUSÃO DE CURSO - ANO/SEMESTRE 2021.2"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
export default Init;
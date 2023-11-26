import Head from "next/head"
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Bons Fluidos</title>
                <link rel="stylesheet" href="/css/sobre.css" />
                <link rel="shortcut icon" href="/imgs/logo.png" />
            </Head>
            <main>
                <header className="header">
                    <Link href="/">
                        <img className="logo" src="/imgs/logo.png" alt="Logo" />
                    </Link>
                    <div className="header-buttons">
                    </div>
                </header>
                <main className="main">
                    <div className="main-child">
                    </div>
                </main>
                <section className="section">
                    <div className="container">
                        <div className="grid">
                            <div>
                                <h1>Sobre nós</h1>
                                <p>
                                    O Projeto Bons Fluidos é uma iniciativa dedicada a trazer dignidade e educação para meninas cujo direito à
                                    educação é prejudicado devido à menstruação. <br/> <br/> Acreditamos que todas as meninas têm o direito de
                                    crescer com autoestima, confiança e conhecimento para enfrentar a transição de fases em suas vidas.
                                </p>
                            </div>
                            <div className="img-1">
                                <img src="/imgs/3.png" alt="primeira imagem" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="download section">
                    <div className="container">
                        <div className="grid">
                            <div>
                                <h1>Nosso Compromisso</h1>
                                <p>
                                    No Portal de Notícias do Projeto Bons Fluidos, estamos comprometidos em compartilhar histórias inspiradoras,
                                    atualizações e notícias relacionadas ao trabalho e missão do projeto. <br/> <br/>Acreditamos que a
                                    conscientização é o primeiro passo para a mudança, e nossa plataforma é projetada para informar, educar e
                                    inspirar.
                                </p>
                            </div>
                            <div className="img-1">
                               <img src="/imgs/2.png" alt="El" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="device-pile section">
                    <div className="container">
                        <div className="grid">
                            <div>
                                <h1>Nos ajude nessa missão</h1>
                                <p>
                                    Se você deseja se envolver e apoiar nossa causa, há várias maneiras de contribuir, fique por dentro das
                                    notícias mais recentes do Projeto Bons Fluidos. <br/><br/>Faça parte da nossa missão de levar dignidade e
                                    educação para meninas em todo o mundo.</p>
                            </div>
                            <div className="img-1">
                                <img src="/imgs/4.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer">
                    <section className="faq">
                        <h1>Perguntas frequentes</h1>
                        <dl className="faq-list">
                            <dt className="faq-question">Quem é responsável pelo projeto?</dt>
                            <dd className="faq-answer">
                                <div>
                                    Katia Romero Felizardo (Prof. de informática e coordenadora do projeto)<br/>
                                    <br/>
                                    Érika Ferreira de Souza (Prof. de informática e coordenadora do projeto)<br/>
                                    <br/>
                                    Tatiane Agostinho Martins (Assistente social)<br/>
                                    <br/>
                                    Geisily de Souza Vargas (Aluna de eng. de software e voluntária do projeto)
                                </div>
                            </dd>
                            <dt className="faq-question">Como posso colaborar?</dt>
                            <dd className="faq-answer">
                                <div>
                                    Doações Financeiras;<br/>
                                    <br/>
                                    Doações de Produtos Menstruais;<br/>
                                    <br/>
                                    Voluntariado;<br/>
                                    <br/>
                                    Compartilhando Nossa Missão.
                                </div>
                            </dd>
                            <dt className="faq-question">Público alvo</dt>
                            <dd className="faq-answer">
                                <div>
                                    O projeto tem como público alvo meninas de escolas públicas de Cornélio Procópio que ofertam anos finais do
                                    ensino fundamental e ensino médio.
                                </div>
                            </dd>
                            <dt className="faq-question">Redes sociais</dt>
                            <dd className="faq-answer">
                                <div>
                                    Instagram: @BonsFluidosUTFPR
                                </div>
                            </dd>
                            <dt className="faq-question">Contato</dt>
                            <dd className="faq-answer">
                                <div>
                                    Instagram: @BonsFluidosUTFPR
                                </div>
                            </dd>
                        </dl>
                    </section>
                    <p className="direitos">Copyright ©. Todos os direitos reservados.</p>
                </footer>
                <Script src="/js/script.js"></Script>               
            </main>
        </>
    )
}
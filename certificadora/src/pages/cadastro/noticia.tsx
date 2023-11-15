import Head from "next/head"
import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/cadastroNoticia.css" />
                <link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet" />
            </Head>
            <main>
                <header>
                    <Link href="/" className="logo">
                        <img src="/imgs/logo.png"/>
                        <h1>Projeto Bons Fluídos</h1>
                    </Link>
                    <div className="nav">
                        <Link href="/login">
                            Login
                        </Link>
                        <p className="divider">
                            |
                        </p>
                        <Link href="/cadastro/user">
                            Inscreva-se
                        </Link>
                    </div>
                </header>

                <main>
                    <form action="">
                        <textarea id="titulo" name="titulo" placeholder="Titulo"></textarea>
                        <textarea id="resumo" name="resumo" placeholder="Resumo"></textarea>
                        <label htmlFor="imagem" className="labelImagem">Selecione a imagem principal</label>
                        <input type="file" id="imagem" name="imagem" />
                        <div id="visualizacaoImagem"></div>
                        <div className="divisor"></div>
                        <div id="editor"></div>
                        <input type="submit" id="publicar" name="publicar" value="Publicar" />
                    </form>
                </main>
                <Script src="/js/visualizadorImagem.js"></Script>
                <Script src="https://cdn.quilljs.com/1.3.6/quill.js"></Script>
                
            </main>
        </>
    )
}
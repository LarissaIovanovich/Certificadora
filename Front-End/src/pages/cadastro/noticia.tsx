import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head"
import Link from 'next/link'
import Script from 'next/script'
import axios from 'axios'

export default function Home() {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [body, setBody] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const Authorization = 'Bearer' ;
    const conexao = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('Token'),
        },
    });

    useEffect(() => {
        if (!localStorage.getItem('Token')) {
            router.push('/')
        }
    }, [])

    function validaCadastro() {
        if (title.length < 3) {
            setErrorMessage("Titulo inválido, mínimo 3 caracteres");
            return false;
        }
        if (subTitle.length < 3) {
            setErrorMessage("E-Mail não informado");
            return false;
        }

        setErrorMessage("");
        return true;
    }

    async function Register (event: { preventDefault: () => void; }) {
        event.preventDefault();

        if (!validaCadastro()) {
            return;
        }

        const json = {
            "title": title,
            "subTitle": subTitle,
            "body": body
        };
        
        const {data} = await conexao.post("/news", json);
        router.push('/')
    }

    function resize() {
        const element = textareaRef.current;
        if (element) {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        }
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/cadastroNoticia.css" />
            </Head>
            <main>
                <header>
                    <Link href="/" className="logo">
                        <img src="/imgs/logo.png"/>
                        <h1>Projeto Bons Fluídos</h1>
                    </Link>
                </header>

                <main>
                    <form action="" onSubmit={Register}>
                        <textarea id="titulo" name="titulo" placeholder="Titulo" onChange={(e) => setTitle(e.target.value)} ref={textareaRef} onInput={resize}></textarea>
                        <textarea id="resumo" name="resumo" placeholder="Resumo" onChange={(e) => setSubTitle(e.target.value)} ref={textareaRef} onInput={resize}></textarea>
                        <label htmlFor="imagem" className="labelImagem">Selecione a imagem principal</label>
                        <input type="file" id="imagem" name="imagem" />
                        <div id="visualizacaoImagem"></div>
                        <div className="divisor"></div>
                        <textarea id="body" name="body" placeholder="Noticia" onChange={(e) => setBody(e.target.value)} ref={textareaRef} onInput={resize}></textarea>
                        <input type="submit" id="publicar" name="publicar" value="Publicar" />
                    </form>
                    <span>{errorMessage}</span>
                </main>
                <Script src="/js/visualizadorImagem.js"></Script>
            </main>
        </>
    )
}
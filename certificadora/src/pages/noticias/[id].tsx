import Head from "next/head"
import { useEffect, useState, useRef } from 'react';
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
    const [logado, setLogado] = useState(false);
    const [comentario, setComentario] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const[title, setTitle] = useState('');
    const[subTitle, setSubTitle] = useState('');
    const[body, setBody] = useState('');
    const[author, setAuthor] = useState('');
    const[dateTime, setDateTime] = useState('');

    useEffect(() => {
        setLogado(localStorage.getItem('Token')? true : false)
        if (id) {
            noticia();
        }
    }, [id])

    function noticia () {
        const url = 'http://localhost:8080/news/'+id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: "cors",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro de rede! Código: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setTitle(data.title);
            setSubTitle(data.subTitle);
            setBody(data.body);
            setAuthor(data.user.name);
            var dia = data.publicationDate.split('T')[0];
            dia = dia.split('-')[2] + "/" + dia.split('-')[1] + "/" + dia.split('-')[0];
            const hora = data.publicationDate.split('T')[1].split('.')[0];
            setDateTime(dia + " - " + hora);
            
        })
        .catch(error => {
            console.log(error);
        });
    }

    function validaComentario() {
        if (!comentario) {
            setErrorMessage('Comentário inválido');
            return false
        }
        setErrorMessage('');
        return true
    }
    function Comentar (event: { preventDefault: () => void; }) {
        event.preventDefault();

        if (!validaComentario()) {
            return;
        }
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
                <link rel="stylesheet" href="/css/noticia.css" />
            </Head>
            <main>
                <header>
                    <Link href="/" className="logo">
                        <img src="/imgs/logo.png"/>
                        <h1>Projeto Bons Fluídos</h1>
                    </Link>
                    { !logado &&
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
                    }
                </header>

                <main>
                    <div className="header">
                        <h1>{title}</h1>
                        <h2>{subTitle}</h2>
                        <div className="author">
                            <div className="name_date">
                                <h3>
                                    <strong>{author}</strong>
                                </h3>
                                <p>
                                    {dateTime}
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="article">
                        <div className="image">
                            <img src="/imgs/user.png"/>
                        </div>
                        <div className="text">
                            <p>
                            {body}
                            </p>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="like">
                            <button>
                                <img src="/imgs/like.png"/>
                                <p>Gostei - 999 mil</p>
                            </button>
                        </div>
                        <div className="dislike">
                            <button>
                                <img src="/imgs/dislike.png"/>
                                <p> Não gostei - 999 mil</p>
                            </button>
                        </div>
                    </div>
                </main>

                <footer>
                    { logado &&
                        <form className="commentary" onSubmit={Comentar}>
                            <textarea placeholder="Digite seu comentário..." onChange={(e) => setComentario(e.target.value)} ref={textareaRef} onInput={resize}/>
                            <div>
                                <button type='submit'>Comentar</button>
                                <span>{errorMessage}</span>
                            </div>
                        </form>
                    }
                    { !logado &&
                        <div className="commentary">
                            <Link className="comment" href="/login">
                                <p>Para comentar é necessário estar logado.</p>
                            </Link>
                        </div>
                    }
                    <div className="commentary">
                        <div className="user">
                            <p>
                                Nome usuario
                            </p>
                            <p>
                                02/11/2023 00h00
                            </p>
                        </div>
                        <div className="comment">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ab repellat id placeat laboriosam atque ratione dolore minima! Sit voluptatem repudiandae esse, officiis eaque inventore. Corrupti molestiae vel suscipit hic?
                            </p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
import Head from "next/head"
import { useRouter } from "next/router";
import Link from 'next/link'

export default function Home() {
    const router = useRouter();
    const { id } = router.query;
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
                    <div className="header">
                        <h1>Titulo Noticia</h1>
                        <h2>Resumo da noticia</h2>
                        <div className="author">
                            <img src="/imgs/user.png"/>
                            <div className="name_date">
                                <h3>
                                    <strong>Nome Autor</strong>
                                </h3>
                                <p>
                                    02/11/2023 00h00
                                </p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="article">
                        <div className="image">
                            <img src="/imgs/user.png"/>
                            <p>
                                Descrição em texto da imagem
                            </p>
                        </div>
                        <div className="text">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime nulla sint quibusdam totam recusandae! Rerum quibusdam sequi eligendi illum in. Numquam, veritatis. Amet impedit unde neque optio magnam delectus?
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
                    <div className="commentary">
                        <div className="user">
                            <img src="/imgs/user.png"/>
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
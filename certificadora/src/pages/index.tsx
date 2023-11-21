import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link'

export default function Home() {
  const router = useRouter();
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    console.log(localStorage.getItem('Token') + "  -  " + localStorage.getItem('Role'));
    setLogado(localStorage.getItem('Token')? true : false)

  }, [])

  const redirectNoticia = () => {
    router.push('/noticias/1');
  }
  
  function logout () {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    router.reload();
  }

  return (
    <>
      <Head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Projeto Bons Fluídos</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/css/menu.css" />
      </Head>
      <main>
        <div className="sidebar">
          <div className="logo">
              <Link href="/">
                <img src="/imgs/logo.png" />
              </Link>
          </div>
        </div>
          
          <div className="main-container">
              <div className="topbar">
                <h1>Projeto Bons Fluídos</h1>
                  <div className="navbar">
                      <ul>
                          <li>
                              { !logado && <Link href="/login">Entrar</Link> }
                              { logado && <button onClick={logout}>Sair</button> }
                          </li>
                      </ul>
                  </div>
              </div>

              { !logado &&
              <div className="botao">
                <Link href="/cadastro/user">
                  <button type="button">Inscreva-se</button>
                </Link>
                <Link href="/sobre">
                  <button type="button">Saiba mais</button>
                </Link>
              </div>
              }

              <div className="noticia">
                  <h2>Notícias / Eventos</h2>
          
                  <div className="list">
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Peaceful Piano</h4>
                      <p>Relax and indulge with beautiful piano pieces</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f000000025551996f500ba876bda73fa5" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Deep Focus</h4>
                      <p>Keep calm and focus with ambient and post...</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f00000002fe24d7084be472288cd6ee6c" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Instrumental Study</h4>
                      <p>Focus with soft study music in the...</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f00000002e435ce0a86a8b9dc24527618" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Workday Lounge</h4>
                      <p>Lounge and chill out music fot your workday.</p>
                    </div>
          
                  </div>
                </div>
          
                <div className="noticia">
                  <div className="list">
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f0000000283829f7cdd2443271b6a6ec2" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Today's Top Hits</h4>
                      <p>Post Malone is on top of the Hottest 50!</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f0000000297037047894ce6c9d8e2efc2" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>RapCaviar</h4>
                      <p>New music from NLE Choppa, Ice Spice an...</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>All Out 2010s</h4>
                      <p>The biggest songs of the 2010s.</p>
                    </div>
          
                    <div className="item">
                      <img src="https://i.scdn.co/image/ab67706f0000000278b4745cb9ce8ffe32daaf7e" />
                      <div className="play">
                        <span className="fa fa-play"></span>
                      </div>
                      <h4>Rock classNameics</h4>
                      <p>Rock legends & epic songs that continue to...</p>
                    </div>
          
          
                  </div>
                </div>

              <div className="preview">
                  <div className="imagem">
                    <Link href="/">
                        <img src="/imgs/rodape.png" />
                    </Link>
                  </div>
                  <div className="text">
                      <h6>Faça parte da comunidade!</h6>
                      <p>Sua voz faz diferença, contribua com o projeto!</p>
                  </div>
                  <div className="button">
                      <button type="button">Contrubuir</button>
                  </div>
              </div>
          </div>
        </main>
    </>
  )
}

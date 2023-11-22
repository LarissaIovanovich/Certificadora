import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Noticias from '@/components/Noticias';
 
export default function Home() {
  const router = useRouter();
  const [logado, setLogado] = useState(false);
  const [adm, setAdm] = useState(false);
  const [noticias, setNoticias] = useState([{id: -1, title: '', subTitle: ''}]);
  
  useEffect(() => {
    if (noticias[0].id < 0) {
      setLogado(localStorage.getItem('Token')? true : false)
      setAdm(localStorage.getItem('Role') === 'admin'? true : false)
      redirect();
    }
  }, [])

  function logout () {
    localStorage.removeItem('Token');
    localStorage.removeItem('Role');
    router.reload();
  }

  function redirect () {
    const url = 'http://localhost:8080/news';
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
      setNoticias(data);
    })
    .catch(error => {
        console.log(error);
    });
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

              { adm &&
              <div className="botao">
                <Link href="/cadastro/noticia">
                  <button type="button">Cadastrar Notícia</button>
                </Link>
              </div>
              }

              <div className="noticia">
                  <h2>Notícias / Eventos</h2>
          
                  {noticias.map(item => (
                    <Noticias key={item.id} id={item.id} title={item.title} subTitle={item.subTitle} />
                  ))}
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

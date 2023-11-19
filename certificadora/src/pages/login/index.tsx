import Head from "next/head"
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Projeto Bons Fluídos - Login</title>
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="/css/login.css" />
            </Head>
            <main>
                <div className="topbar-cadastro">
                    <Link href="/" className="logo">
                        <img src="/imgs/logo.png" />
                        <h1>Projeto Bons Fluídos</h1>
                    </Link>
                </div>

                <div className="login-container">
                    <h2>Login</h2>
                    <form className="login-form">
                        <div className="input-container">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="Usuário..." />
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Senha..." />
                        </div>
                    </form> 
                    <div className="forgot-password">
                       <Link href="/cadastro/user">Esqueci a senha</Link>
                    </div>
                    <div className="login-form">
                        <button type="submit">Login</button>
                    </div>
                </div>
            </main>
        </>
    )
}
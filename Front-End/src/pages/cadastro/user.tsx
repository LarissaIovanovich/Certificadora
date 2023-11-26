import { useState } from 'react';
import Head from "next/head";
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Home() {
    const [name, setName] = useState('joao');
    const [email, setEmail] = useState('joao@gmail.com');
    const [password, setPassword] = useState('123');
    const [errorMessage, setErrorMessage] = useState('');
    const router = useRouter();
    const conexao = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    function validaCadastro() {
        if (name.length < 3) {
            setErrorMessage("Nome inválido, mínimo 3 caracteres");
            return false;
        }
        if (!email) {
            setErrorMessage("E-Mail não informado");
            return false;
        }
        if (password.length < 3) {
            setErrorMessage("Senha inválida, mínimo 3 caracteres");
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
            "email": email,
            "name": name,
            "password": password,
            "role": "USER"
        };
        
        const {data} = await conexao.post("/auth/register", json);
        router.push('/');
    }

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
                    <Link className="logo" href="/">
                        <img src="/imgs/logo.png" />
                        <h1>Projeto Bons Fluídos</h1>
                    </Link>
                </div>   

                <div className="login-container">
                    <h2>Inscreva-se agora!</h2>
                    <form className="login-form" onSubmit={Register} >
                        <div className="input-container">
                            <i className="fa fa-user"></i>
                            <input type="text" placeholder="Usuário..." onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="input-container">
                            <i className="fa fa-envelope"></i>
                            <input type="email" placeholder="Email..." onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-container">
                            <i className="fa fa-lock"></i>
                            <input type="password" placeholder="Senha..." onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="login-form">
                            <button type="submit">Login</button>
                        </div>
                    </form>
                    <span>{errorMessage}</span>
                </div>
            </main>
        </>
    )
}
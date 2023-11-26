import { useRouter } from 'next/router';
import style from '../../public/css/noticiasMenu.module.css'
import axios from 'axios'

interface ItemProps {
    id: number;
    title: string;
    subTitle: string;
};

const Noticias: React.FC<ItemProps> = ({ id, title, subTitle }) => {
    const route = useRouter();
    const conexao = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    async function redirect () {
        const {data} = await conexao.get("/news/"+id);
        route.push('/noticias/' + id)
    }

    return (
    <div className={style.item} onClick={redirect}>
        <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" />
        <div className={style.play}>
            <span className="fa fa-play"></span>
        </div>
        <h4>{title}</h4>
        <p>{subTitle}</p>
    </div>
    );
};
  
export default Noticias;
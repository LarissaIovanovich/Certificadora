import { useRouter } from 'next/router';
import style from '../../public/css/comentarios.module.css'
import axios from 'axios'

interface ItemProps {
    info: string;
    author: string;
    publicationDate: string;
};

const Comentario: React.FC<ItemProps> = ({ info, author, publicationDate }) => {
    return (
    <div className={style.commentary}>
        <div className={style.user}>
            <p>
                {author}
            </p>
            <p>
                {publicationDate}
            </p>
        </div>
        <div className={style.comment}>
            <p>
                {info}
            </p>
        </div>
    </div>

    );
};
  
export default Comentario;
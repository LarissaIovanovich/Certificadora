import { useRouter } from 'next/router';
import style from '../../public/css/comentarios.module.css'
import axios from 'axios'

interface ItemProps {
    info: string;
};

const Comentario: React.FC<ItemProps> = ({ info, author,  }) => {
    return (
    <div className={style.commentary}>
        <div className={style.user}>
            <p>
                Nome usuario
            </p>
            <p>
                02/11/2023 00h00
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
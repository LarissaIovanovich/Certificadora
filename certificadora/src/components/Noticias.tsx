import { useRouter } from 'next/router';

interface ItemProps {
    id: number;
    title: string;
    subTitle: string;
};

const Noticias: React.FC<ItemProps> = ({ id, title, subTitle }) => {
    const route = useRouter();
    function redirect () {
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
            route.push('/noticias/'+id);
        })
        .catch(error => {
            console.log(error);
        });
    }

    return (
    <div className="item" onClick={redirect}>
    <img src="https://i.scdn.co/image/ab67706f00000002ca5a7517156021292e5663a6" />
    <div className="play">
        <span className="fa fa-play"></span>
    </div>
    <h4>{title}</h4>
    <p>{subTitle}</p>
    </div>
    );
};
  
export default Noticias;
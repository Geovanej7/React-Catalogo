import { Link } from "react-router-dom";
import './Card.css';

const Card = () => {
    const services = [
        {id: 1, name: 'Serviço',
        description: 'O profissional responsável, o body piercer, utiliza ferramentas esterilizadas para garantir a segurança e prevenir infecções. O procedimento envolve a limpeza da área a ser perfurada, seguida da marcação exata do local do piercing. Em seguida, o body piercer utiliza uma agulha apropriada para perfurar a pele de maneira rápida e precisa. Depois, a joia escolhida é inserida.',
        img: 'https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg' },
        { id: 2, name: 'Serviço 2', description: 'Descrição do serviço 2...', img: 'https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg' },
        { id: 3, name: 'Serviço 3', description: 'Descrição do serviço 3...', img: 'https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg' },
        
    ];

    return(
        <div className="card-container">
            {services.map(service => (
                <div className="card" key={service.id}>
                    <img 
                        src={service.img} 
                        alt={`Imagem do ${service.name}`}
                    />
                    <div>
                        <h2>{service.name}</h2>
                        <div className="card-actions">
                            <Link 
                                to={`/service/${service.id}`} 
                                state={{
                                    name: service.name,
                                    description: service.description,
                                    img: service.img
                                }}
                                className="details-btn"
                            >
                                Detalhes
                            </Link>
                            <button className="schedule-btn">Agendar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;

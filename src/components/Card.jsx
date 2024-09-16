import { Link } from "react-router-dom"
import './Card.css'
const Card = () => {
    return(
        <div className="card-container">
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        <div className="card">
            <img 
                src="https://i.pinimg.com/564x/94/4a/2c/944a2ce7c15ea5ba753055b5401ea327.jpg" 
                alt="Imagem do serviço"
            />
            <div>
                <h2>Nome do Serviço</h2>
                <p>Descrição breve do serviço...</p>
                <div className="card-actions">
                    <Link to={`/service/id`} className="details-btn">Detalhes</Link>
                    <button className="schedule-btn">Agendar</button>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Card
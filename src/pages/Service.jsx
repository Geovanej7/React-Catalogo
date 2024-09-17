import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer'
import '../components/Service.css';

const Service = () => {
    const location = useLocation();
    const { name, description, img } = location.state;

    return (
        <>
        <div className="page-container">
        <div className="service-details">
            <img src={img} alt={`Imagem do ${name}`} className="service-image" />
            <div className="service-card">
                <div className="service-info">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
        </>
    )
}
export default Service
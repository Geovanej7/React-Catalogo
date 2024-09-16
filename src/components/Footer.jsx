import './Footer.css';
import { FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <div className="footer-container">
            <a 
                href="https://www.instagram.com/seu-perfil" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="instagram-icon"
            >
                <FaInstagram size={30} />
                <span className="instagram-text">Visite nosso Instagram</span>
            </a>
            <p className="footer-text">© 2024 Your Company </p>
        </div>
    );
}

export default Footer;

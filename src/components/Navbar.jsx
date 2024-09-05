import { Link } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi';

import "./Navbar.css"

const Navbar = () => {
    return(
        <nav id="navbar">
        <h2>
          <Link to="/">Catalogo</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque um serviço" />
            <button type="submit"><BiSearchAlt2/></button>
        </form>
      </nav>
    )
}

export default Navbar
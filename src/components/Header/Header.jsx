import {Link} from "react-router-dom";
import Logo from "./logo.png";

import './Header.css';

export default function Header() {
    return (
        <header className="header">
					<Link to="/"><img className="header-logo" src={Logo} alt="Логотип" /></Link>
					<nav className="header-nav">
						<Link className="header-nav_link" to="/">Главная</Link>
						<Link className="header-nav_link" to="/game">Игра</Link>
					</nav>
		</header>
    );
}
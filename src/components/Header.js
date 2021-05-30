import '../styles/Header.css';
import logo from '../assets/logo.svg';
import { Link } from 'react-scroll';
//import { HashLink as Link } from '../react-router-hash-link';

function Header() {

    return (<div className="header">
        <ul className="header-list">
            <Link className="links"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >ABOUT</Link>
            <Link className="links"
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >EDUCATION</Link>
            <Link className="links"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
            >SKILLS</Link>
        </ul>
    </div>)
}

export default Header
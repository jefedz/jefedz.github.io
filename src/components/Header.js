import '../styles/Header.css';
import logo from '../assets/logo.svg';
//import { HashLink as Link } from '../react-router-hash-link';

function Header() {

    return (<div className="header">
        <img src={logo} alt="logo" className="header-logo" />
        <ul className="header-list">
            <a href="./About#about"><li>ABOUT</li></a>
            <a href="#education"><li>EDUCATION</li></a>
            <a href="#skills"><li>SKILLS</li></a>
            <a href="#contact"><li>CONTACT</li></a>
        </ul>
    </div>)
}

export default Header
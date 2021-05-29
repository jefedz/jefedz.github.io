import '../styles/Header.css';
import logo from '../assets/logo.svg';

function Header() {

    return (<div className="header">
        <h1 className="header-title">Amir TALBI</h1>
        <img src={logo} alt="logo" className="header-logo" />
        <ul className="header-list">
            <li>ABOUT</li>
            <li>EDUCATION</li>
            <li>SKILLS</li>
            <li>CONTACT</li>
        </ul>
    </div>)
}

export default Header
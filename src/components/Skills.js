import '../styles/Skills.css';
import sql from '../assets/sql.png';
import php from '../assets/php.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import react from '../assets/logo.svg';

function Skills() {
    return (
        <div className="skills">
            <h2 id="skills">SKILLS</h2>
            <ul className="skills-list">
                <li className="languages">Programming languages & tools</li><br/>
                <li>
                    <img src={sql} alt="mysql logo" className="sql"/>&nbsp;
                    <img src={php} alt="php logo" className="php" />&nbsp;
                    <img src={html} alt="html logo" className="html" />&nbsp;
                    <img src={css} alt="css logo" className="css" />&nbsp;
                    <img src={react} alt="react logo" className="react" />
                </li>
                <br/><br/>
                <li className="spoken-languages">Spoken languages</li><br/>
                <li>
                    <li>French &nbsp; &#11044; &#11044; &#11044; &#11044; </li>
                    <li>English &nbsp; &#11044; &#11044; &#11044; &#9675;</li>
                    <li>Spanish &nbsp; &#11044; &#11044; &#9675; &#9675;</li>
                </li>
                <br/><br/>
                <li className="strenghts">Strenghts</li><br/>
                <li>
                    <li>&#9658; Enthusiastic</li>
                    <li>&#9658; Adaptive</li>
                    <li>&#9658; Friendly</li>
                    <li>&#9658; Autonomous</li>
                    <li>&#9658; Reliable</li>
                </li>
            </ul>
        </div>
    )
}

export default Skills
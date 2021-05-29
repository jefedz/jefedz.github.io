import '../styles/About.css';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';

function About() {
    return (
        <div id="#about">
            <br/>
            <div className="about-title">
                <span className="about-title-first">AMIR</span> 
                <span className="about-title-second">TALBI</span>
                </div>
                <br/>
            <span className="about-job">Student in computer science</span>
            <div className="logos">
                <a href="https://www.linkedin.com/in/amir-talbi-598082206/"><img src={linkedin} alt="linkedin logo" className="linkedin" /></a> &nbsp;
                <a href="https://github.com/jefedz"><img src={github} alt="github logo" className="github" /></a>
            </div>
            <p className="description">I am a young geek 🤓 absorbed in new technologies !</p>
             
        </div>
    )
}

export default About
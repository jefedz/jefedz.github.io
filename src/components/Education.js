import '../styles/Education.css';

function Education() {
    return (
        <div className="education">
            <h1 id="education">Education</h1>
            <ul className="education-first">
                <li className="first-name">UIT of Sénart</li>
                <li>Technological University Diploma in computer science</li>
                <li className="first-date">2020-now</li>
                <li className="text">I am in first year in computer science in the University Institute of Technology of Sénart. <br/>
                In this formation I have already learned Java programming, C programming, some web developpement (PHP, HTML, SQL) <br/>
                and system and network architecture I project to do the second year as a work-study to apply the things that I learned and will learn.</li>
                <br/>
                <li className="first-name">Maurice Eliot High School</li>
                <li>High school diploma in sciences</li>
                <li className="first-date">2017-2020</li>
                <li className="text">In 2020 I graduated from the baccalaureate despite the complicated health situation we experienced.<br />
                I chose to take the mathematics specialty in the last year. Despite the lack of computers sciences in my formation,
                <br />I took the initiative to learn HTML5, CSS3 and the basics of JavaScript</li><br/>
            </ul>
        </div>
    )
}

export default Education
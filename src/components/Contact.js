import '../styles/Contact.css';

function Contact() {
    return (
        <div className="contact">
            <h2 id="contact">Contact</h2>
            <ul>
                <li>Mail : <a href="mailto:amirotalbi94@gmail.com">amirotalbi94@gmail.com</a></li>
                <li>Phone : <a href="tel:+33664767040">(+33) 06.64.76.70.40</a></li><br/>
                <li>
                    <form method="POST" action="./form.php">
                        <label>Last name :&nbsp;</label>
                        <input type="text" name="lastName" className="lastName" /> <br/><br/>
                        <label>First name :&nbsp;</label>
                        <input type="text" name="firstName" className="firstName" /> <br/><br/>
                        <label>Mail :&nbsp;</label>
                        <input type="mail" name="mail" className="mail" /><br/><br/>
                        <label>Message :&nbsp;</label><br/>
                        <textarea name="message" className="message" rows="10" cols="20" /><br/><br/>
                        <button type="submit" value="submitted">Send</button>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default Contact

export default function ContactForm(){
    return(
        <main>
            <form className="contact-form">
                <h2>Contact Us</h2>

                <div className="form-row">
                    <label>Name:</label>
                    <input id="name" type="text" />
                </div>

                <div className="form-row">
                    <label>Email:</label>
                    <input id="email" type="email" />
                </div>

                <div className="form-row">
                    <label>Message:</label>
                    <textarea id="message" rows="5"></textarea>
                </div>

                <button className="submit-button" type="submit">Send Message</button>
            </form>
        </main>
    )
}
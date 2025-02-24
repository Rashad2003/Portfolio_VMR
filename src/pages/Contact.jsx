import { FaPaperPlane, FaSquarePhoneFlip, FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6";
import { NavLink } from "react-router-dom";



export const Contact = () => {
    return(
        <>
        <section id="cnt">
        <p data-aos="fade-down" className="wai"><strong>How Can You Communicate ?</strong></p>
        <h1 data-aos="fade-down" className="heading"><strong>CONTACT ME</strong></h1>
            <div className="contact">
                    <div className="contact-left" data-aos="fade-right">
                        <p><FaPaperPlane className="si"/> mohammedrashadvanaikar@gmail.com</p>
                        <p><FaSquarePhoneFlip className="si"/> +918925366447</p>
                        <div className="social-icons">
                            <NavLink to="https://www.facebook.com/profile.php?id=100027438399372&mibextid=ZbWKwL"><FaFacebook /></NavLink>
                            <NavLink to="https://twitter.com/Rashad_0826?t=OH-dkok9niha2Cn-tHafZA&s=08"><FaXTwitter /></NavLink>
                            <NavLink to="https://instagram.com/rashad._.26?igshid=ZDc4ODBmNjlmNQ=="><FaInstagram /></NavLink>
                            <NavLink to="https://www.linkedin.com/in/vanaikar-mohammed-rashad-700503221"><FaLinkedin /></NavLink>
                            <NavLink to="https://github.com/Rashad2003"><FaGithub /></NavLink>
                        </div>
                    </div>
                    <div className="contact-right" data-aos="fade-left">
                        <form action="https://formspree.io/f/mayzjzww" method="POST">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className="btn">Send</button>
                        </form>
                    </div>
            </div>
            </section>
        </>
    )
}
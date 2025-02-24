import { NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";

export const HeroSection = () => {
  return (
    <>
      <div className="container">
        <div className="left-content">
          <h1 className="main-head">
            Hi!
            <br />
            I'm <span>Mohammed Rashad</span>
          </h1>
          <p>Full-Stack Developer</p>
          <div className="social-icons">
            <NavLink to="https://www.facebook.com/profile.php?id=100027438399372&mibextid=ZbWKwL">
              <FaFacebook />
            </NavLink>
            <NavLink to="https://twitter.com/Rashad_0826?t=OH-dkok9niha2Cn-tHafZA&s=08">
              <FaXTwitter />
            </NavLink>
            <NavLink to="https://instagram.com/rashad._.26?igshid=ZDc4ODBmNjlmNQ==">
              <FaInstagram />
            </NavLink>
            <NavLink to="https://www.linkedin.com/in/vanaikar-mohammed-rashad-700503221">
              <FaLinkedin />
            </NavLink>
            <NavLink to="https://github.com/Rashad2003">
              <FaGithub />
            </NavLink>
          </div>
          <div className="abc">
            <NavLink to="/Mohammed Rashad_CV.pdf" target="_blank" download>
              <button className="home-btn1 hover">
                <strong>View CV</strong>
              </button>
            </NavLink>
            <NavLink to="/contact">
              <button className="home-btn2 hover">
                <strong>Hire Me</strong>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

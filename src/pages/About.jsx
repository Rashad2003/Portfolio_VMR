import { NavLink } from "react-router-dom";
export const About = () => {
  return (
    <>
      <section id="abt">
        <p className="wai">
          <strong>Who Am I ?</strong>
        </p>
        <h1 className="heading" data-aos="fade-down">
          <strong>ABOUT ME</strong>
        </h1>
        <div className="about">
          <div className="left-abt" data-aos="fade-right">
            <h2>
              <span> So, Who am I ? and What I do ? </span>
            </h2>
            <br />
            <p>
              I'm <span>Mohammed Rashad. V</span> from TamilNadu, India.
              Commerce Student with a Passion for
              <span> Full-Stack Development</span> skills, adept at creating
              responsive, user-centered web interfaces. Passionate about
              continuous learning in modern frameworks and best practices, ready
              to contribute fresh ideas to enhance user experience.
            </p>
            <br />
            <p>
              Thank You for Visiting my Portfolio. I'm Excited to connect and
              Collabrate on Projects that share my vision for Goal. Let's get in
              touch or Create something amazing together !
            </p>
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
          <div className="right-abt" data-aos="fade-left">
            <img
              src="./images/home.4b78b07ddfec36a0b5ed31d0225ce708.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

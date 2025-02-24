import { HeroSection } from "../components/UI/HeroSection"
import { About } from "./About"
import { Contact } from "./Contact"
import { Projects } from "./Projects"
import { Skill } from "./Skill"

export const Home = () => {
    return(
        <>
        <section id="home">
        <HeroSection />
        </section>

        <section id="abt">
            <About />
        </section>

        <section id="skl">
            <Skill />
        </section>

        <section id="pf">
            <Projects />
        </section>

        <section id="cnt">
            <Contact />
        </section>
        </>
    )
}
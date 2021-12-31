import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import MovingCircles from "../components/MovingCircles";
import NavBar from "../components/NavBar";
import ProjectList from "../components/ProjectList";
import ShiftingTextHero from "../components/ShiftingTextHero";
import SocialButtonRow from '../components/SocialButtonRow';
import Head from '../components/Head';

export default function Home() {
  return (
    <div className="page">
      <Head/>
      <main>
        <NavBar pageTitle="Portfolio `22" />
        <div className="frontPage">
          <ShiftingTextHero />

          <div className="sub">
            <MovingCircles />
            <div className="subText">
              <p>
                I am an AI and Full-Stack developer based in Toronto, 🇨🇦. I
                study Computer Science and Cognitive Science at the University
                of Toronto.
              </p>

              <p>
                I like to explore my interests and develop my skills by making
                cool projects. My favourite libraries are React.js and TensorFlow.
                In recent academic work, I focus on topics in computational
                cognition and consciousness.
              </p>
              <p>Looking for an internship position for Summer 2021.</p>

              <SocialButtonRow />
            </div>
          </div>
        </div>

        <div className="pageContent">
          <div className="spacer" />

          <h1>Selected Projects</h1>
          <ProjectList />

          <div className="spacer" />

          <h1>Contact Me</h1>
          <ContactForm />

          <div className="spacer" />
        </div>
      </main>
      <Footer />
    </div>
  );
}

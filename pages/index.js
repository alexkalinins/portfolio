import Footer from "../components/Footer";
import MovingCircles from "../components/MovingCircles";
import NavBar from "../components/NavBar";
import ProjectList from "../components/ProjectList";
import ShiftingTextHero from "../components/ShiftingTextHero";

export default function Home() {
  return (
    <div className="page">
      <main>
        <NavBar pageTitle="Portfolio `21" />
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
                cool projects. Recent projects and academic work, I focus on
                computational cognition 🧠
              </p>
              <p>Looking for an internship position for Summer 2021.</p>
            </div>
          </div>
        </div>
        
    <ProjectList/>

        <div className="placeholder">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tincidunt consectetur, nisi nunc fermentum nisi,
          euismod aliquam nunc nisl eu nisi. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </div>
      </main>
      <Footer />
    </div>
  );
}

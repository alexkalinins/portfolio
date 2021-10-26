import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ShiftingTextHero from "../components/ShiftingTextHero";

export default function Home() {
  return (
    <div className="page">
      <main>
        <NavBar pageTitle="Portfolio `21" />

        <ShiftingTextHero />

        <div className="sub">
          <div>
            <p>
              I am an AI and Full-Stack developer based in Toronto. I study
              Computer Science and Cognitive Science at the University of
              Toronto.
            </p>

            <p>
              I like to make interesting projects that explore my interests and
              develop my skills.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

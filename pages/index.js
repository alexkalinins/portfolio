import Lottie from "react-lottie";
import NavBar from "../components/NavBar";
import * as animationData from "../public/lottie/placeholder.json";


export default function Home() {
  const HeroText = ()=> (
    <h1>
      ALEX
      <br />
      KALININS
    </h1>
  )

  return (
    <div className='page'>
      <main>
        <NavBar pageTitle="Portfolio `21" />

        <div className="hero">
          <h1>
            <HeroText />

            <div id="shift1">
            <HeroText />

            </div>
            <div id="shift2">
            <HeroText />
            </div>
            <div id="shift3">
            <HeroText />
            </div>
            <div id="shift4">
            <HeroText />
            </div>
          </h1>
          {/* </div> */}
        </div>

        {/* end of hero */}
        <div className="sub">
          {/* <div className="subLottie">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData.default,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
              }}
            />
          </div> */}

          <div>
            <p>
              I am an AI and Full-Stack developer based in Toronto. I study Computer Science and Cognitive Science at the University of Toronto.
            </p>

            <p>
              I like to make interesting projects that explore my interests and develop my skills.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

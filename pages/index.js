import Lottie from "react-lottie";
import NavBar from "../components/NavBar";
import * as animationData from "../public/lottie/placeholder.json";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />

        <div className="hero">
          <h1>
            <h1>
              INTER-
              <br />
              DISCIPLINARY <br />
              FRONT-END
            </h1>

            <div id="shift1">
              <h1>
                INTER-
                <br />
                DISCIPLINARY <br />
                FRONT-END
              </h1>
            </div>
            <div id="shift2">
              <h1>
                INTER-
                <br />
                DISCIPLINARY <br />
                FRONT-END
              </h1>
            </div>
            <div id="shift3">
              <h1>
                INTER-
                <br />
                DISCIPLINARY <br />
                FRONT-END
              </h1>
            </div>
            <div id="shift4">
              <h1>
                INTER-
                <br />
                DISCIPLINARY <br />
                FRONT-END
              </h1>
            </div>
          </h1>
          {/* </div> */}
        </div>

        {/* end of hero */}
        <div className="sub">
          <div className="subLottie">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData.default,
                rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
              }}
            />
          </div>

          <div>
            <p>
              I am a freelance web designer and full-stack developer based in
              Barrie, Ontario. I borrow inspiration from other media, including
              photography, typography, and cinema, to create
              aesthecially-pleasing and practical websites and webapps.
            </p>

            <p>
              I can help you build a custom and stunning website or webapp from
              scratch with React.js or Next.js.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

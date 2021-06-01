import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <main>
        <NavBar />

        <div className="hero">
          {/* todo fix the top and left thing */}
          <div
            style={{ position: "relative", top: -16, left: -16, zIndex: 1000 }}
          >
            <h1>
              INTER-
              <br />
              DISCIPLINARY <br />
              FRONT-END
            </h1>
          </div>
          <div id="shift1">
            <h1>
              INTER-
              <br />
              DISCIPLINARY <br />
              FRONT-END
            </h1>
          </div>
          <div id="shift2">
            <h1 >
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
        </div>

        {/* end of hero */}
        <div className="sub">
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vitae auctor orci. Quisque condimentum quam ligula, eget
              consectetur metus cursus vel. Vestibulum cursus rhoncus
              consectetur. Integer eget porta nunc. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia curae; In ac
              neque sit amet enim ullamcorper porttitor ut eu magna. Nulla
              facilisi. Sed mauris lectus, congue vitae fermentum nec,
              vestibulum in ligula. Morbi et lorem finibus nibh tristique
              aliquet. Maecenas eu gravida enim, ac ultricies nisl. Curabitur
              gravida consequat lacinia.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SocialButtonRow from '../components/SocialButtonRow';

export default function about() {
  return (
    <div className="page">
      <main>
        <NavBar pageTitle="About" />
        <div className="pageContent">
          <h1>About Me</h1>
          <p>
            My name is <strong>Alex Kalinins</strong>. I am a student at the
            University of Toronto, pursuing an HBSc in Computer Science and
            Cognitive Science. I am equally passionate about computers and human
            cognition; wishing to explore computer modeling of neural processes.
          </p>
          <p>
            Through a growth mindset, I always aim to develop fluency and
            understanding of anything that I do. I like to explore various
            software tools and libraries that I come across by making
            'mini-projects' to gain understanding that is deeper than a YouTube
            tutorial. Outside my academic and professional careers, I am
            passionate about music, literature and photography.
          </p>
          <SocialButtonRow/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

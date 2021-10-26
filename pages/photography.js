import React from "react";
import NavBar from "../components/NavBar";

export default function photography() {
  return (
    <div className="page">
      <main>
        <NavBar pageTitle="Photography" />
        <h1>Photo Gallery</h1>
        <div>
          <span>
            <p>
              I am a traditional film photographer, primarily shooting
              architecture and still-life in black-and-white (with occasional
              color work). I run a darkroom and print my black-and-white
              work&mdash;taking the photo is only one half of the process.
            </p>
            <p>
              Analogue photography provides a greater sense of authenticity,
              with each photograph having a direct connection to the subject and
              each print being one-of-a-kind.
            </p>
          </span>
        </div>
      </main>
    </div>
  );
}

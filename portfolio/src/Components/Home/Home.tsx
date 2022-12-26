import React from "react";
import "./Home.css";
import hero from "../pics/hero.png"
import react from "../pics/react.svg"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return <>

  <section  className="hero" id="home">
    <div className="container f_flex top">
      <div className="left top">
        <h3>WELCOME To MY WORLD</h3>
        <h1> Olá, me chamo <span>Eliezer</span></h1>
        <h2></h2>
      </div>
    </div>
  </section>
  </>;
};

export default Home;

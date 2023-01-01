import React from "react";
import "./Home.css";
import hero from "../pics/hero.png";
import react from "../pics/skills/react.svg";
import csharp from "../pics/skills/csharp.svg";
import java from "../pics/skills/java.svg";
import nodejs from "../pics/skills/nodejs.svg";
import spring from "../pics/skills/spring.svg";
import dotnet from "../pics/skills/dotnet.svg";
import typescript from "../pics/skills/typescript.svg";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>BE WELCOME :)</h3>
            <h1>
              {" "}
              Olá, me chamo <span>Eliezer.</span>
            </h1>
            <h2>
              Sou um
              <span>
                <Typewriter
                  words={[
                    " Desenvolvedor Jr.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              magni facilis labore officiaores beatae exercitationem praesentium
              excepturi et quaerat!
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>PODE ME ENCONTRAR EM:</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-github"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>

              <div className="col_1">
                <h4>SKILLS</h4>
                <button className="btn_shadow">
                  <img src={react} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={csharp} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={java} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={dotnet} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={spring} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={typescript} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={nodejs} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

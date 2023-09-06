import React, { Component } from "react";
import Style from "./home.module.scss";
export class Home extends Component {
  render() {
    return (
      <section id={Style.home}>
        <div className={`container ${Style.homeContainer}`}>
          <div className="homeContent">
            <p className="caption">LEANGROUP - тубы и этикетки</p>
            <h1 className="title">Ламинатные тубы</h1>
            <p className="context">
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            
          </div>
        </div>
      </section>
    );
  }
}

export default Home;

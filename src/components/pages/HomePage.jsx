import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../home/Home";

export class HomePage extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </>
    );
  }
}

export default HomePage;

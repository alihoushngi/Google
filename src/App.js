import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";

function App(props) {
  return (
    <div>
      <Navbar />
      <Main />
      <Cards />
    </div>
  );
}

export default App;

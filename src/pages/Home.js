import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <h2>Home Page</h2>
        <Link to="/about">Go To About Page</Link>
      </div>
      <button
        onClick={() => {
          import("../utils/sayHelloWorld.js").then((module) =>
            module.sayHelloWorld()
          );
        }}
      >
        Click to say "Hello World"!
      </button>
    </div>
  );
};

export default Home;

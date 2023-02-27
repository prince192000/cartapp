import React, { useState } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <Navbar parentToChild={count} />

      <div className="container">
        <div className="button-1">
          <button onClick={increment}>Add Cart Item </button>
        </div>

        <div className="button-2">
          <button onClick={decrement}>Remove Cart Item </button>
        </div>
      </div>
    </>
  );
};

export default Home;

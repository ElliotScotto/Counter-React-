import "./App.css";
import { useState } from "react";

function App() {
  const handleClick = () => {
    return alert("+1 !");
  };
  const [counter, setCounter] = useState(0);
  return (
    <>
      <header>
        <div className="title">React Counter</div>
      </header>
      <main>
        <div className="app">
          <div className="counter-primary">
            <div
              style={{ visibility: counter <= 0 ? "hidden" : "visible" }}
              className="left-btn"
              onClick={(handleClick) => {
                setCounter(counter - 1);
              }}
            >
              -
            </div>
            <div className="main-btn">
              <div className="main-counter">{counter}</div>
            </div>
            <div
              style={{ visibility: counter >= 10 ? "hidden" : "visible" }}
              className="left-btn"
              onClick={(handleClick) => {
                setCounter(counter + 1);
              }}
            >
              +
            </div>
          </div>
        </div>
        <div className="block-reset">
          <div
            className="reset-Btn"
            onClick={(handleClick) => {
              setCounter(0);
            }}
          >
            Reset
          </div>
        </div>
      </main>
      <footer>
        Made with<span> React </span>at<span> Le Reacteur </span>by
        <span> Elliot </span>
      </footer>
    </>
  );
}

export default App;

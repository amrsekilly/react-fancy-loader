import React from "react";
import "./App.css";
import "./loaders.css";
import { NoBorderSpinner } from "./Components/Loaders";

function App() {
  return (
    <div>
      <h1 className="library-title">
        React <span className="fancy">Fancy</span> Loader
      </h1>
      <div className="flexbox">
        <div>
          <NoBorderSpinner size={60} color="red" stroke={3} duration={700} />
        </div>

        <div>
          <div className="bt-spinner"></div>
        </div>

        <div>
          <div className="db-spinner"></div>
        </div>

        <div>
          <div className="dbl-spinner"></div>
          <div className="dbl-spinner dbl-spinner--2"></div>
        </div>

        <div>
          <div className="reverse-spinner"></div>
        </div>

        <div>
          <div className="hm-spinner"></div>
        </div>

        <div>
          <div className="triple-spinner"></div>
        </div>

        <div>
          <div className="cm-spinner"></div>
        </div>

        <div>
          <div className="multi-spinner-container">
            <div className="multi-spinner">
              <div className="multi-spinner">
                <div className="multi-spinner">
                  <div className="multi-spinner">
                    <div className="multi-spinner">
                      <div className="multi-spinner"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="dot-loader"></div>
          <div className="dot-loader dot-loader--2"></div>
          <div className="dot-loader dot-loader--3"></div>
        </div>

        <div>
          <div className="circle-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <div className="ml-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div>
          <div className="mesh-loader">
            <div className="set-one">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
            <div className="set-two">
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        </div>

        <div>
          <div className="heart-loader"></div>
        </div>

        <div>
          <div className="triforce-container">
            <div className="triforce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

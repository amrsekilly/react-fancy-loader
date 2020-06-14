import React from "react";
import "./App.css";
import "./loaders.css";
import {
  NoBorderSpinner,
  DotLoader,
  BorderTopSpinner,
} from "./Components/Loaders";

function App() {
  return (
    <div>
      <h1 className="library-title">
        React <span className="fancy">Fancy</span> Loader
      </h1>
      <div className="flexbox">
        <div>
          <h2 className="item-title">NoBorderSpinner</h2>
          <NoBorderSpinner size={70} color="red" stroke={4} duration={700} />
        </div>

        <div>
          <h2 className="item-title">BorderSpinner</h2>
          <BorderTopSpinner
            size={70}
            color="red"
            outlineColor="#222"
            stroke={4}
            duration={700}
          />
        </div>

        <div>
          <h2 className="item-title">DoubleBorderSpinner</h2>
          <div className="db-spinner"></div>
        </div>

        <div>
          <h2 className="item-title">DoubleSpinner</h2>
          <div className="dbl-spinner"></div>
          <div className="dbl-spinner dbl-spinner--2"></div>
        </div>

        <div>
          <h2 className="item-title">ReverseSpinner</h2>
          <div className="reverse-spinner"></div>
        </div>

        <div>
          <h2 className="item-title">HMSpinner</h2>
          <div className="hm-spinner"></div>
        </div>

        <div>
          <h2 className="item-title">TripleSpinner</h2>
          <div className="triple-spinner"></div>
        </div>

        <div>
          <h2 className="item-title">CMSpinner</h2>
          <div className="cm-spinner"></div>
        </div>

        <div>
          <h2 className="item-title">MultiSpinner</h2>
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
          <h2 className="item-title">DotLoader</h2>
          <DotLoader size={10} color="red" duration={1000} />
        </div>

        <div>
          <h2 className="item-title">CircleLoader</h2>
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
          <h2 className="item-title">MLLoader</h2>
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
          <h2 className="item-title">MeshLoader</h2>
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
          <h2 className="item-title">HeartLoader</h2>
          <div className="heart-loader"></div>
        </div>

        <div>
          <h2 className="item-title">TriForceLoader</h2>
          <div className="triforce-container">
            <div className="triforce"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

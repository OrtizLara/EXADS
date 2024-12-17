import React from "react";
import "./WatchNow.css";

type WatchNowProps = {
  onRedirect: () => void;
};

const WatchNow: React.FC<WatchNowProps> = ({ onRedirect }) => {
  return (
    <div className="overlay">
      <div className="watch-now-container">
        <h2>WATCH NEW MOVIES FOR FREE!</h2>
        <p>Watch any movies online for free without ads!</p>
        <p>Have fun watching your favourite movies!</p>
        <button className="watch-now-button" onClick={onRedirect}>
          WATCH HERE!
        </button>
      </div>
    </div>
  );
};

export default WatchNow;

import {
    CircularProgressbarWithChildren,
    buildStyles,
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import Countdown from "react-countdown";
  
  export const About = (props) => {
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      return (
        <div className="counter-align">
          <CircularProgressbarWithChildren
            value={seconds}
            maxValue={60}
            text={`${days}:${hours}:${minutes}:${seconds}`}
            strokeWidth="1"
            styles={buildStyles({
              strokeLinecap: "butt",
              textColor: "white",
            })}
          ></CircularProgressbarWithChildren>
          <span className="textCounter">
          NFTs Collection of LANDS. Mint on November 15 at 3 p.m. (CEST)
            </span>
        </div>
      );
    };
    return (
      <div id="aboutus" className="aboutus">
        <div className="container">
          <div className="main-timer text-center">
            <div className="countdown">
              <Countdown date="2022-11-15T14:00:00" renderer={renderer} />
            
            </div>
          </div>
        </div>
      </div>
    );
  };
  
import React from "react";
import { Link } from "react-router-dom";

//Images
import Paramedis from "../assets/images/paramedics11.png";
import fireTruck1 from "../assets/images/fire-truck1.png";
import repair from "../assets/images/repair.png";
// "@fortawesome/react-fontawesome": "fortawesome/react-fontawesome",

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-section">
        <div className="header-description">
          <p className="caption">
            Africa's no 1 accident reporting website
            <br /> <span className="title">cident</span> <br />
            <span className="functions">...report an accident now!!!</span>
          </p>
          <div className="registration-button">
            <Link to="/login">
              <button className="login">report</button>
            </Link>
            <Link to="/signup">
              <button className="signup">join us</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="divisions">
        <div className="row">
          <div className="mid-grid">
            <h3>PARAMEDICS</h3>
            <Link href="#" to="#">
              <img src={Paramedis} alt="spares" title="Paramedics" />
            </Link>

            <h4>Hospital, FRSC, NPF etc</h4>
            <p>
              Do you need urgent hospitalisation? contact any paramedics nearest
              to you through this channel
            </p>
            <Link className="button" href="#" to="#">
              More
            </Link>
          </div>
          <div className="mid-grid">
            <h3>FIRE SERVICE</h3>
            <Link href="#" to="#">
              <img src={fireTruck1} alt="sales" title="Fire Truck" />
            </Link>

            <h4>Emergency Responds Unit</h4>
            <p>
              Have they been a fire outbreak? contact the required agency
              through this channel
            </p>
            <Link className="button" href="#" to="#">
              More
            </Link>
          </div>
          <div className="mid-grid">
            <h3>REPAIRS</h3>
            <Link href="#" to="#">
              <img src={repair} alt="repair" title="Repair" />
            </Link>

            <h4>Mechanic, Towing Van etc</h4>
            <p>
              Do you need the services of a mechanic, a towing van etc contact
              them through this channel
            </p>
            <Link className="button" href="#" to="#">
              More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

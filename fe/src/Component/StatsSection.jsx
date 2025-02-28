import React from "react";
import CountUp from "react-countup";
import "./StatsSection.css";

function StatsSection() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat-item">
          <h2>
            <CountUp start={0} end={400} duration={3} separator="," />
          </h2>
          <p>Total Staff</p>
        </div>
        <div className="stat-item">
          <h2>
            <CountUp start={0} end={1000000} duration={3} separator="," />
          </h2>
          <p>Happy Clients</p>
        </div>
        <div className="stat-item">
          <h2>
            <CountUp start={0} end={22100000000} duration={3.5} separator="," />
          </h2>
          <p>Disbursed Amount</p>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;

import React from "react";
import "../assets/styles/index.css";
import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <div className="announcement">
      <Marquee speed={150} gradient={false} pauseOnHover>
        <div className="announcement-text text1">
          <span> Wellcome to CinemaGhar.</span>
        </div>
        <div className="announcement-text text2">
          <span>Book your seats for dynamic movie experience. </span>
        </div>
      </Marquee>
    </div>
  );
};

export default Announcement;

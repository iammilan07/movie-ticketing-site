import React from "react";
import Movieseats from "./Movieseats";
import "./Style.css";
import { useLocation } from "react-router-dom";

const Moviedetails = (props) => {
  const location = useLocation();
  const { movieDetail } = location.state;

  return (
    <>
      <div className="movie-detail">
        <div className="left">
          <h1>{movieDetail.sname}</h1>

          <div class="ratio ratio-16x9">
            <iframe
              width="560"
              height="315"
              src={movieDetail.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <h3
            className="hdetails"
            dangerouslySetInnerHTML={{ __html: movieDetail.detail }}
          ></h3>
        </div>
        <Movieseats />
      </div>
    </>
  );
};

export default Moviedetails;

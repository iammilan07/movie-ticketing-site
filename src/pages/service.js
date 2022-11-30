import React from "react";
import "../components/navbar.css";
import Cards from "../cards";
import Sdata from "../Sdata";

const Service = () => {
  return (
    <>
      <h1 className="heading_style">Top rated movies!!</h1>

      {Sdata.map((value) => {
        return <Cards key={value.id} {...value} />;
      })}
    </>
  );
};

export default Service;

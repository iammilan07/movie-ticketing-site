import React, { useState } from "react";
import "./Style.css";
import { useLocation } from "react-router-dom";

const Rightpart = () => {
  const location = useLocation();
  const { movieDetail } = location.state;

  // const [firstPrice, setFirstPrice] = useState("0");
  const [data, setData] = useState(movieDetail.seats);

  const handleUpdateMovie = (index, name) => {
    const newData = { ...data };

    if (newData[name].tempOccupied.includes(index)) {
      const tempIndex = newData[name].tempOccupied.indexOf(index);
      newData[name].tempOccupied.splice(tempIndex, 1);
    } else newData[name].tempOccupied.push(index);
    setData(newData);
  };
  // console.log(data);

  // console.log(Sdata);

  // console.log(movieDetail.seat.keys);

  // let a = data.row1.tempOccupied.length;
  // let b = data.row2.tempOccupied.length;
  // let c = data.row3.tempOccupied.length;
  // let d = data.row4.tempOccupied.length;

  // let total = a + b + c + d;

  // let e = data.row4.tempOccupied.price;

  // let price = e;

  // console.log(total);

  const seats = movieDetail.seats;

  Object.keys(seats);
  let sum = 0;
  Object.keys(seats).forEach((seat, index) => {
    return (sum = sum + seats[seat].tempOccupied.length);
  });

  return (
    <>
      <div className="right">
        <div className="movie-container">
          <label>
            <h3>
              {" "}
              <b>Select Seats!</b>
            </h3>
          </label>
        </div>
        <ul className="showcase">
          <li>
            <div className="seat"></div>
            <small>N/A</small>
          </li>

          <li>
            <div className="seat selected"></div>
            <small>Selected</small>
          </li>

          <li>
            <div className="seat occupied"></div>
            <small>Booked</small>
          </li>
        </ul>

        <div className="container">
          <div className="screen"></div>

          <div className="row">
            {new Array(data.row1.totalSeat).fill(true).map((test, index) => {
              const isOccupied = data.row1.occupied.includes(index);
              const tempIsOccupied = data.row1.tempOccupied.includes(index);
              return (
                <div
                  key={index}
                  className={`seat ${
                    isOccupied ? "occupied" : tempIsOccupied ? "selected" : ""
                  }`}
                  onClick={() =>
                    !isOccupied && handleUpdateMovie(index, "row1")
                  }
                ></div>
              );
            })}
          </div>

          <div className="row">
            {new Array(data.row2.totalSeat).fill(true).map((test, index) => {
              const isOccupied = data.row2.occupied.includes(index);
              const tempIsOccupied = data.row2.tempOccupied.includes(index);

              return (
                <div
                  key={index}
                  className={`seat ${
                    isOccupied ? "occupied" : tempIsOccupied ? "selected" : ""
                  }`}
                  onClick={() =>
                    !isOccupied && handleUpdateMovie(index, "row2")
                  }
                ></div>
              );
            })}
          </div>

          <div className="row">
            {new Array(data.row3.totalSeat).fill(true).map((test, index) => {
              const isOccupied = data.row3.occupied.includes(index);
              const tempIsOccupied = data.row3.tempOccupied.includes(index);

              return (
                <div
                  key={index}
                  className={`seat ${
                    isOccupied ? "occupied" : tempIsOccupied ? "selected" : ""
                  }`}
                  onClick={() =>
                    !isOccupied && handleUpdateMovie(index, "row3")
                  }
                ></div>
              );
            })}
          </div>

          <div className="row">
            {new Array(data.row4.totalSeat).fill(true).map((test, index) => {
              const isOccupied = data.row4.occupied.includes(index);
              const tempIsOccupied = data.row4.tempOccupied.includes(index);

              return (
                <div
                  key={index}
                  className={`seat ${
                    isOccupied ? "occupied" : tempIsOccupied ? "selected" : ""
                  }`}
                  onClick={() =>
                    !isOccupied && handleUpdateMovie(index, "row4")
                  }
                ></div>
              );
            })}
          </div>
        </div>

        <p className="txt">
          You have selected {sum} seats for a price of Rs{" "}
          {sum * movieDetail.price}.<span id="total">.</span>
        </p>
        <button className="proceed">Proceed</button>
      </div>
    </>
  );
};

export default Rightpart;

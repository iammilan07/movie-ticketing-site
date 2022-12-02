import React, { useState } from "react";
import Service from "./service";

// const ITEM_LIST = [
//   {
//     href:"https://www.youtube.com/watch?v=X0tOpBuYasI"
//   },
//   {
//     id: 2,
//     name: "nameasdf",
//   },
//   {
//     id: 3,
//     name: "asdf",
//   },
// ];

const Home = () => {
  const [data] = useState({
    movie1: {
      photo: "./img/blackadam.jpeg",
      href: "https://www.youtube.com/watch?v=X0tOpBuYasI",
    },
    movie2: {
      photo: "./img/lakhey.jpg",
      href: "https://www.youtube.com/watch?v=xyyKHCbD1jo",
    },
    movie3: {
      photo: "./img/mahapurus.jpg",
      href: "https://www.youtube.com/watch?v=7e7Bbwf4uOc",
    },
  });
  //   const [data, setData] = useState([]);

  // React.useEffect(() => {
  //   setData(data);
  // }, []);

  //   return (
  //     <>
  //       <ul>
  // {data.map((x) => {
  //   return <li key={x.id}>{x.name}</li>;
  // })}
  //       </ul>
  //     </>
  //   );

  return (
    <>
      <div className="alert alert-info" role="alert">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="false"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={data.movie1.photo}
                className="d-block w-100"
                alt="BlackAdam Movie"
              />
              <div className="carousel-caption d-none d-md-block">
                <a
                  href={data.movie1.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Watch Trailer</h3>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={data.movie2.photo}
                className="d-block w-100"
                alt="Lakhey Movie"
              />
              <div className="carousel-caption d-none d-md-block">
                <a
                  href={data.movie2.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Watch Trailer</h3>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={data.movie3.photo}
                className="d-block w-100"
                alt="MahaPurus Movie"
              />
              <div className="carousel-caption d-none d-md-block">
                <a
                  href={data.movie3.href}
                  style={{
                    textDecoration: "none",
                    color: "white",
                  }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h3>Watch Trailer</h3>
                </a>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Service />
    </>
  );
};

export default Home;

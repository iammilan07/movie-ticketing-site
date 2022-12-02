import React from "react";
import "./index.css";
import { useSelector } from "react-redux";
import {
  selectIncrementWishList,
  selectIsInWatchList,
} from "./redux/increment/selector";

import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { addToWishList } from "./redux/increment/Numberslice";
import { useDispatch } from "react-redux";
import { removeWishList } from "./redux/increment/Numberslice";
import { useEffect } from "react";

function Cards(props) {
  const incrementWishList = useSelector(selectIncrementWishList);
  // useEffect(
  //   (id) => {
  const data1 = localStorage.getItem("persist:wishlist");

  console.log(data1);
  //   },
  //   [number]
  // );

  const isInWatchList = useSelector((state) =>
    selectIsInWatchList(props?.id, state)
  );

  const dispatch = useDispatch();

  const handleWishListAdd = () => {
    dispatch(addToWishList(props));
    dispatch(incrementWishList());
  };
  const handleRemove = (id) => {
    dispatch(removeWishList(id));
  };

  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="" className="card_img" />
          <div className="card_info">
            <h3 className="card_title">{props.sname}</h3>

            <Link
              to="/Moviedetails"
              state={{ movieDetail: props }}
              className="card_category"
              style={{ cursor: "pointer" }}
            >
              {props.title}
            </Link>

            <br />
            <br />
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Watch Trailer</button>
            </a>
            <br />
            {!isInWatchList ? (
              <Button onClick={handleWishListAdd} bg="#5ba8f5" mt="10px">
                Add to wishlist
              </Button>
            ) : (
              <Button
                marginLeft="40px"
                marginTop="10px"
                onClick={() => handleRemove(props.id)}
              >
                Remove From WatchList
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

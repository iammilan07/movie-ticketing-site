import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import { selectWishListCount } from "../redux/wishlist/index";
import { Box } from "@chakra-ui/react";

const Navbar = () => {
  const count = useSelector(selectWishListCount);

  return (
    <Box>
      <nav className="main-nav">
        {/* 1st logo Part */}
        <div className="logo">
          <Link to="/">
            <h2>
              <span>C</span>inema
              <span>G</span>har
            </h2>
          </Link>
        </div>

        {/* 2nd menu part */}
        <div className="menu-link">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/Watch">
                <div className="nav-bag">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="currentColor"
                    className="bi bi-tv-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM2 2h12s2 0 2 2v6s0 2-2 2H2s-2 0-2-2V4s0-2 2-2z" />
                  </svg>
                  <span className="bag-quantity">
                    <span>{count}</span>
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UC5FPRJilZwSeh-ddPP-V-uA"
                target="_Milan"
              >
                <FaYoutubeSquare className="youtube" />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100042295680045"
                target="_Milan"
              >
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iammilan_7/" target="_Milan">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
          </ul>
        </div>
        <Link to="/Login">
          <button className="login">Login</button>
        </Link>
        {/* <Link to="/src/Login" type="button" className="login"> */}
        {/* Login
        </Link> */}
      </nav>
    </Box>
  );
};

export default Navbar;

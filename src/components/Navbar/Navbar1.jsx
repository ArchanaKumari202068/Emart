import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  const [bars,setBars ]= useState(false)
  const handleOnClick = () =>{
    setBars(!bars)
  }


  return (
    <>
      <nav>
        <div className="Navbar_main_container" >
          <div className="bars"onClick={handleOnClick} >
            <i className="fa fa-bars"></i>
          </div>
          <div
          className={`menulink ${bars ? "show" : ""}`}
          onClick={handleOnClick}
          id="nav-menu"
        >
          <div className={`mobile`}></div>

          <i className="fa fa-multiply"></i>

          <ul>
            <li id="brand_titile">AK COLLECTION</li>
          </ul>
          <div className="features">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Products</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="buttons_nav">
            <button>
              <i className="fa fa-sign-in "></i>Login
            </button>
            <button>
              <i className="fa fa-user-plus"></i>Register
            </button>
            <button>
              <i className="fa fa-shopping-cart"></i>Cart(0)
            </button>
          </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;

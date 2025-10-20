// import React from 'react';

// function Header() {
//     return (
//       <>
//         <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-3">
//           <div className="container-fluid">
//             {/* Left Section: Logo */}
//             <a className="navbar-brand d-flex flex-column me-4" href="#">
//               <h4 className="mb-0">UniLearn</h4>
//               <small className="text-muted">By PDPU</small>
//             </a>
  
//             {/* Hamburger Button */}
//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarContent"
//               aria-controls="navbarContent"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-icon"></span>
//             </button>
  
//             {/* Collapsible Content */}
//             <div className="collapse navbar-collapse" id="navbarContent">
//               {/* My Learning */}
//               <ul className="navbar-nav me-3">
//                 <li className="nav-item">
//                   <a className="nav-link" href="#">
//                     My Learning
//                   </a>
//                 </li>
//               </ul>
  
//               {/* Search Bar */}
//               <form className="d-flex flex-grow-1 mx-4 my-2 my-lg-0">
//                 <input
//                   type="text"
//                   className="form-control"
//                   placeholder="Search"
//                 />
//               </form>
  
//               {/* Right Section: Buttons */}
//               <div className="d-flex align-items-center flex-wrap mt-2 mt-lg-0">
//                 <button className="btn btn-dark me-2 mb-2 mb-lg-0">
//                   Cart
//                 </button>
//                 <button className="btn btn-dark me-2 mb-2 mb-lg-0">
//                   Wishlist
//                 </button>
//                 <button className="btn btn-dark me-2 mb-2 mb-lg-0">
//                   LOG IN
//                 </button>
//                 <button className="btn btn-dark me-2 mb-2 mb-lg-0">
//                   SIGN UP
//                 </button>
//                 <button className="btn btn-dark me-3 mb-2 mb-lg-0">
//                   Light/Dark Mode
//                 </button>
  
//                 {/* Profile Circle */}
//                 <button className="btn btn-dark rounded-circle">A</button>
//               </div>
//             </div>
//           </div>
//         </nav>
//       </>
//     );
//   }
  
//   export default Header;

import React, { useContext } from "react";
import { ThemeContext } from "./themeContext";
import { Link } from "react-router-dom";

function Header() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const btnStyle = {
    backgroundColor: isDark ? "#f8f9fa" : "#212529",
    color: isDark ? "#212529" : "#f8f9fa",
    border: "none",
  };

  return (
    <nav
      className={`navbar navbar-expand-lg sticky-top px-3 ${
        isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <Link to = "/" style={{ textDecoration: 'none' }}>
        <div className="navbar-brand d-flex flex-column me-4">
          <h4 className="mb-0">UniLearn</h4>
          <h6 className="">By PDPU</h6>
        </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-3">
            <li className="nav-item">
              <a className="nav-link" href="#">
                My Learning
              </a>
            </li>
          </ul>

          <form className="d-flex flex-grow-1 mx-4 my-2 my-lg-0">
            <input
              type="text"
              className="form-control"
              placeholder="Search"
              style={{
                backgroundColor: isDark ? "#343a40" : "#fff",
                color: isDark ? "#f8f9fa" : "#212529",
              }}
            />
          </form>

          <div className="d-flex align-items-center flex-wrap mt-2 mt-lg-0">
            <Link to = "/cart">
            <button className="btn me-2 mb-2 mb-lg-0" style={btnStyle}>
            Cart

          </button>
            </Link>
            <button className="btn me-2 mb-2 mb-lg-0" style={btnStyle}>
              Wishlist
            </button>
            <button className="btn me-2 mb-2 mb-lg-0" style={btnStyle}>
              LOG IN
            </button>
            <button className="btn me-2 mb-2 mb-lg-0" style={btnStyle}>
              SIGN UP
            </button>
            <button
              className="btn me-3 mb-2 mb-lg-0"
              onClick={toggleTheme}
              style={btnStyle}
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
            <button className="btn rounded-circle" style={btnStyle}>
              A
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;


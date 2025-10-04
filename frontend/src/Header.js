import React from 'react';

function Header() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top px-3">
          <div className="container-fluid">
            {/* Left Section: Logo */}
            <a className="navbar-brand d-flex flex-column me-4" href="#">
              <h4 className="mb-0">UniLearn</h4>
              <small className="text-muted">By PDPU</small>
            </a>
  
            {/* Hamburger Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarContent"
              aria-controls="navbarContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
  
            {/* Collapsible Content */}
            <div className="collapse navbar-collapse" id="navbarContent">
              {/* My Learning */}
              <ul className="navbar-nav me-3">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My Learning
                  </a>
                </li>
              </ul>
  
              {/* Search Bar */}
              <form className="d-flex flex-grow-1 mx-4 my-2 my-lg-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </form>
  
              {/* Right Section: Buttons */}
              <div className="d-flex align-items-center flex-wrap mt-2 mt-lg-0">
                <button className="btn btn-dark me-2 mb-2 mb-lg-0">
                  Cart
                </button>
                <button className="btn btn-dark me-2 mb-2 mb-lg-0">
                  Wishlist
                </button>
                <button className="btn btn-dark me-2 mb-2 mb-lg-0">
                  LOG IN
                </button>
                <button className="btn btn-dark me-2 mb-2 mb-lg-0">
                  SIGN UP
                </button>
                <button className="btn btn-dark me-3 mb-2 mb-lg-0">
                  Light/Dark Mode
                </button>
  
                {/* Profile Circle */}
                <button className="btn btn-dark rounded-circle">A</button>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  
  export default Header;
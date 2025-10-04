import React from 'react';

function Header() {
    return ( 
        <>
       <nav className="navbar navbar-light bg-light sticky-top px-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">

        {/* Left Section: Logo + My Learning */}
        <div className="d-flex align-items-center">
          <div className="me-4 text-start">
            <h4 className="mb-0">UniLearn</h4>
            <small className="text-muted">By PDPU</small>
          </div>
          <a className="nav-link" href="#">My Learning</a>
        </div>

        {/* Search Bar */}
        <div className="flex-grow-1 mx-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
          />
        </div>

        {/* Right Section: Buttons */}
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-primary me-2">Cart</button>
          <button className="btn btn-outline-primary me-2">Wishlist</button>
          <button className="btn btn-outline-dark me-2">LOG IN</button>
          <button className="btn btn-primary me-2">SIGN UP</button>
          <button className="btn btn-secondary me-3">Light/Dark Mode</button>

          {/* Profile Circle */}
          <button className="btn btn-dark rounded-circle">A</button>
        </div>
      </div>
    </nav>
        </>
     );
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header id="header" className="header-one">
      {/* <Middlebar /> */}
      {/* menu */}
      <div className="site-navigation">
        <div className="container">
          {/* menu */}
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link to={"/"} className="nav-link ">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={"/about"} className="nav-link ">
                        About
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/project"} className="nav-link">
                        Project
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/ourwork"} className="nav-link">
                        Work
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/team"} className="nav-link">
                        Team
                      </Link>
                    </li>

                    <li className="nav-item ">
                      <Link to={"/contact"} className="nav-link ">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          {/* search */}
          <div className="nav-search">
            <Link to="/search" className=" ml-3">
              <i className="fa fa-search"></i>
            </Link>
            <Link to="/login" className=" ml-3">
              <i class="fa fa-lock"></i>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

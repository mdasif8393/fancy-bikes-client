import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'
const Header = () => {
const {user, logout} = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <img style={{height: '50px', width: '50px', marginLeft:'20px'}} src="https://i.ibb.co/jrT2DCB/logo.png" alt="" className="img-fluid"></img>
              <h4><span className="fancy-text-color">Fancy</span><span className="bikes-text-color">Bikes</span></h4>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-link-text">
                  <li className="nav-item header-link-hover">
                    <Link to="/" className="nav-link active " aria-current="page" >Home</Link>
                  </li>

                  <li className="nav-item header-link-hover">
                    <Link to="/exploreBikes" className="nav-link active" aria-current="page" >Explore Bikes</Link>
                  </li>

                  

                  {
                    user.email && <li className="nav-item header-link-hover">
                                    <Link to="/dashboard" className="nav-link active" aria-current="page" >Dashboard</Link>
                                  </li>
                  }
                  
                  {/* <li className="nav-item header-link-hover">
                    <Link to="/sellBike" className="nav-link active" aria-current="page" >Sell Bike</Link>
                  </li> */}

                </ul>
                <form className="d-flex">
                  {
                    <p>{user.displayName}</p>
                  }
                  {
                    user.email ? 
                    <button onClick={logout} className="btn btn-outline-danger" ><i class="fas fa-sign-out-alt"></i> Logout</button> : 
                    <Link to="/login"><button className="btn btn-outline-success" ><i class="fas fa-sign-in-alt"></i> Login</button></Link>
                  }

                  
                </form>
              </div>
            </div>
          </nav>
        </div>
    );
};

export default Header;
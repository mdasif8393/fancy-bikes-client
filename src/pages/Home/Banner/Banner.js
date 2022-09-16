import React from 'react';
import { Link } from 'react-router-dom';
import './Bannsr.css'
const Banner = () => {
    return (
        <div className="row">
            <div className="col-md-8 col-sm-12">
                <img src="https://i.ibb.co/R3cpLHJ/Honda-Fireblade-SP.jpg" className="img-fluid" alt="..."/>
            </div>

            <div className="col-md-4 col-sm-12 mt-5 " >
                
                <div><h1 className="mb-4" style={{fontSize:'70px', color:'#1C3E40',fontWeight: '700'}}>Honda Fireblade SP</h1></div>
                <div><h2 style={{color:'#1C3E40',fontWeight: '700'}}><i style={{color:'rgb(255, 67, 59)'}} className="fas fa-motorcycle"></i> ABS Break</h2></div>
                <div><h2 style={{color:'#1C3E40',fontWeight: '700'}}><i style={{color:'rgb(255, 67, 59)'}} className="fas fa-motorcycle"></i> 1200 CC</h2></div>
                <div><h2 style={{color:'#1C3E40',fontWeight: '700'}}><i style={{color:'rgb(255, 67, 59)'}} className="fas fa-motorcycle"></i> 215bhp</h2></div>
                <div><h2 style={{color:'#1C3E40',fontWeight: '700'}}><i style={{color:'rgb(255, 67, 59)'}} className="fas fa-motorcycle"></i> 345 km/h</h2></div>

                <div>
                <Link to="exploreBikes"><button className="btn btn-success banner-button" ><i className="fas fa-arrow-right"></i> Explore all Bikes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
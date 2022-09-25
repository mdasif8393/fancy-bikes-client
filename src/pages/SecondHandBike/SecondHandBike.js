import React from 'react';
import { Link } from 'react-router-dom';

const SecondHandBike = ({bike}) => {
    const {_id, name, engine, price, description, image, number, reason, userName, status} =bike;
    return (
        <div className="container col-md-4 col-sm-12 mb-5">
            {
                status === 'confirm' && <div className="card" style={{width: "23rem" , height: "30rem"}}>
                <img style={{width: "100%", height: "280px"}} src={image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title card-title-header">{name}</h4>
                    <h6 style={{color:'rgb(255, 67, 59)'}}>{engine} cc</h6>
                    <p style={{color:'rgb(0, 60, 63)'}} className="card-text">Description: {description}</p>
                    <p style={{color:'rgb(0, 60, 63)'}} className="card-text">Seller Name: {userName}</p>
                    <p style={{color:'rgb(0, 60, 63)'}} className="card-text">Seller Number: +880 {number}</p>
                    <h6 style={{color:'rgb(255, 67, 59)'}}>{price} taka</h6>
                    
                </div>
                </div>
            }
        </div>
    );
};

export default SecondHandBike;
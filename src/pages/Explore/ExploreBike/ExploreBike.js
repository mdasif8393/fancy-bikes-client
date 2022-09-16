import React from 'react';
import { Link } from 'react-router-dom';

const ExploreBike = ({bike}) => {
    const {_id, name, engine, price, description, image} =bike;
    return (
        <div className="col-md-4 col-sm-12 mb-5">
            <div className="card" style={{width: "23rem" , height: "37rem"}}>
            <img style={{width: "100%", height: "280px"}} src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title card-title-header">{name}</h5>
                <h6 style={{color:'rgb(255, 67, 59)'}}>{engine} cc</h6>
                <p style={{color:'rgb(0, 60, 63)'}} className="card-text"><small className="text-muted">{description}</small></p>
                <h6 style={{color:'rgb(255, 67, 59)'}}>{price} taka</h6>
                <Link to={`/purchaseProduct/${_id}`}><button className="btn btn-success card-button"><i class="fas fa-cart-plus"></i> Buy Now</button></Link>
            </div>
            </div>
        </div>
    );
};

export default ExploreBike;
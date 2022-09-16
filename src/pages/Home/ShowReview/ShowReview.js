import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser } from '@fortawesome/free-solid-svg-icons'
import './ShowReview.css'

const ShowReview = ({r}) => {
    const {_id, review, rating, userName, email} = r;
    const [value, setValue] = useState(rating);
    
    return (
        <div className="col-md-3 col-sm-12">
            <div className="card  mb-3 text-center" style={{height:'220px' , width:'280px'}}>
            
            <div className="card-body review-card">
                <FontAwesomeIcon style={{color: 'rgb(0, 60, 63)'}} icon={faUser} size="2x" />
                <h5 style={{color: 'rgb(0, 60, 63)'}} className="card-title">{userName}</h5>
                <small>{email}</small>
                <p className="card-text text-secondary">{review}</p>
                <Rating style={{color: 'rgb(255, 67, 59)'}} name="read-only" value={value} readOnly />
            </div>
            </div>
        </div>
    );
};

export default ShowReview;
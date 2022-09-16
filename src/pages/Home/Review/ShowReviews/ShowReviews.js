import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ShowReview from '../../ShowReview/ShowReview';
import './ShowReviews.css'
const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>{
        axios.get('http://localhost:5000/review')
        .then(result => {
            setReviews(result.data);
        })
    },[])
    return (
        <div className="mt-5">
            <h5 style={{color: 'rgb(255, 67, 59)', fontWeight:'bold',}} className="text-center">Users Reviews</h5>
            <div className="container show-reviews-container row">
            {
                reviews.map((r) =><ShowReview key={r._id} r={r}></ShowReview>)
            }
            </div>
        </div>
    );
};

export default ShowReviews;
import React from 'react';
import './Subscribe.css'

const Subscribe = () => {
    const handleSubscribe = () => {
        alert('Thank you for your Subscription! We will send our exciting offer to your Email')
    }
    return (
        <div className="hero-image container-fluid d-flex justify-content-center align-items-center mt-5">
            <div>
                <h2 className="text-center subscribe-text-color">SUBSCRIBE OUR NEWSLETTER</h2>
                <h4 className="text-center subscribe-text-color mt-4">SUBSCRIBE TO RECEIVE OUR INTERESTING OFFERS</h4>
                <input placeholder="Enter your email address" className="form-control email-subscribe d-inline w-75" type="text"></input>
                <button className="subscribe-button" onClick={handleSubscribe}>Subscribe</button>
            </div>

        </div>
    );
};

export default Subscribe;
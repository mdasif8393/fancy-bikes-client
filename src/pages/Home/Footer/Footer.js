import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className="container-fluid footer-container row pb-5">
            <div className="about-us text-center footer-texts col-md-4 col-sm-12">
                <h4 className="text-white pb-3">CONTACT US</h4>
                <p className="text-white"><i className="fas fa-map-marker-alt fa-lg"> </i> Bashundhara, Dhaka Bangladesh </p>
                <p className="text-white"><i className="fas fa-phone fa-lg"></i> +88-01721212121</p>
                <p className="text-white"><i className="far fa-envelope fa-lg"></i> fancy-bikes@gmail.com</p>
            </div>

            <div className="about-us text-center footer-texts col-md-4 col-sm-12">
                <h4 className="text-white pb-3">ABOUT US</h4>
                <p className="text-white">We are the number one leading bike importer in Bangladesh. We provide all kind of sports bikes like Ducati, Yamaha, Honda etc. You also find us when you need after sale service. It's our duty to satisfy our customers not only with our bike, but also with our service.</p>
            </div>

            <div className="about-us text-center mt-5 col-md-4 col-sm-12">
                <h4 className="text-white pb-3">Payment Options</h4>
                <img className="img-fluid img-thumbnail" src="https://i.ibb.co/Ms3hJxC/payment.jpg" alt=""></img>
            </div>
        </div>
    );
};

export default Footer;
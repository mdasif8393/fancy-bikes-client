import { Button } from '@mui/material';
import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import HomeProducts from '../HomeProducts/HomeProducts';
import ShowReviews from '../Review/ShowReviews/ShowReviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div>
            <div className="container">
            <HomeProducts></HomeProducts>
            <ShowReviews></ShowReviews>
            
            </div>
            <Subscribe></Subscribe>
            <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HomeProduct from '../HomeProduct/HomeProduct';

import './HomeProducts.css'

const HomeProducts = () => {
    const [allBikes, setAllBikes] = useState([]);
    const bikes = allBikes.slice(0, 6);

    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
        .then( result => {
            setAllBikes(result.data);
            
        } )
    },[])
    
    return (
        <div className="home-products-container row" style={{marginTop: '50px'}}>
            <h3 style={{color:'rgb(255, 67, 59)', fontWeight: 'bold'}} className="text-center">Bikes</h3>
            {
                    bikes.map(bike=> <HomeProduct key={bike._id} bike={bike}></HomeProduct>)
            }

        </div>
                
           
            
    );
};

export default HomeProducts;
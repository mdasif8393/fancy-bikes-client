import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SecondHandBike from './SecondHandBike';

const SecondHandBikes = () => {
    const [allBikes, setAllBikes] = useState([]);
    console.log(allBikes);
    useEffect(() => {
        axios.get('http://localhost:5000/usedBike')
        .then( result => {
            setAllBikes(result.data);
            
        } )
    },[])
    return (
        <div className="container">
            <div className="home-products-container row" style={{marginTop: '50px'}}>
            <h3 style={{color:'rgb(255, 67, 59)', fontWeight: 'bold'}} className="text-center">Bikes</h3>
            {
                    allBikes.map(bike=> <SecondHandBike key={bike._id} bike={bike}></SecondHandBike>)
            }

        </div>
        </div>
    );
};

export default SecondHandBikes;
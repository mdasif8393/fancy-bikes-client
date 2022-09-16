import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import ExploreBike from '../ExploreBike/ExploreBike'

const ExploreBikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
            .then(result => {
                setBikes(result.data);

            })
    }, [])

    return (

        <div className="home-products-container container " style={{ marginTop: '50px' }}>
            <h3 style={{ color: 'rgb(255, 67, 59)', fontWeight: 'bold' }} className="text-center">Bikes</h3>
            <div className="row">
                {
                    bikes.map((bike) => <ExploreBike key={bike._id} bike={bike}></ExploreBike>)
                }
            </div>

        </div>


    );
};

export default ExploreBikes;
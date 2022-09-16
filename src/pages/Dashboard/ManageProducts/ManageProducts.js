import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ManageProducts.css'
import ManageProduct from '../ManageProduct/ManageProduct'
import useAuth from '../../../hooks/useAuth';
import { CircularProgress } from '@mui/material';

const ManageProducts = () => {
    const [bikes, setBikes] = useState([]);
    const {isLoading} = useAuth();
    useEffect(() => {
        axios.get('http://localhost:5000/bikes')
        .then(result => {
            setBikes(result.data);
        })
    },[])

    const deleteBike = (id) =>{
        axios.delete(`http://localhost:5000/bikes/${id}`)
        .then(result => {
            if(result.data.acknowledged){
                const newBikes = bikes.filter(bike => bike._id !== id);
                setBikes(newBikes);
                alert('A bike is deleted successfully!');
            }
        })
    }

    return (
        <div>
            <div className="manage-products-container container mt-5">
            {
                        isLoading && <CircularProgress />
            }
            {
                bikes.map((bike) =><ManageProduct deleteBike={deleteBike} key={bike._id} bike={bike}></ManageProduct>)
            }
            </div>
        </div>
    );
};

export default ManageProducts;
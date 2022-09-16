import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './PurchaseProduct.css'
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';

const PurchaseProduct = () => {
    const history = useHistory();
    const {id} = useParams();

    const [bike, setBike] = useState({});

    const {user} = useAuth();


    //react hook form
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.bikeName = bike.name;
        data.bikePrice = bike.price;
        data.bikeImage = bike.image;
        data.orderStatus = 'pending';
        
        axios.post('http://localhost:5000/orders', data)
        .then(result => {
            if(result.data.acknowledged){
                alert("Order is placed successfully");
                history.push('/userOrders')
                reset();
                
            }
        })
    };

    useEffect(() =>{
        axios.get(`http://localhost:5000/bikes/${id}`)
        .then(result => {
            setBike(result.data);
        })
    },[id])

    return (
        
        <div>
            <div className="purchase-product-container container mt-5">
                
            <div>
            <div className="card mb-3">
                <img src={bike.image} className="card-img-top img-fluid" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{bike.name}</h5>
                    <h6 className="card-text">{bike.engine} cc</h6>
                    <p className="card-text"><small className="text-muted">{bike.description}</small></p>
                    <h5>{bike.price} taka</h5>
                </div>
                </div>
            </div>

            <div> 
            <h5>Submit form to place your order</h5>
            <form onSubmit={handleSubmit(onSubmit)}>

                <TextField sx={{width: '100%',}} label="User Name" variant="standard" required value={user.displayName || ''} {...register("name")} />

                <TextField sx={{width: '100%',}} label="User Email" variant="standard" required value={user.email || ''} {...register("email")} />

                <TextField sx={{width: '100%',}}  label="Contact Number" variant="standard" required {...register("number")} />

                <TextField sx={{width: '100%',}}  label="Address" variant="standard" required {...register("address")} />

                
                
                
                <input className="btn btn-success" type="submit" />
            </form>
            </div>
        </div>
        </div>
    );
};

export default PurchaseProduct;
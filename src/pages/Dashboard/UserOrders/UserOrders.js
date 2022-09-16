import { WindowRounded } from '@mui/icons-material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import UserOrder from '../UserOrder/UserOrder';
import './UserOrders.css'

const UserOrders = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/orders/${user.email}`)
        .then(result => {
            setOrders(result.data)
        })
    },[user.email])

    const cancelOrder = (id) => {
        //delete a order
        axios.delete(`http://localhost:5000/orders/${id}`)
        .then(result => {
            if(result.data){
                alert("Your order is deleted successfully");
                const newOrders = orders.filter(order => order._id !== id);
                setOrders(newOrders)
            }
        })
    }
    return (
        <div className="container mt-5" >
            <div className=" row">
            {
                orders.map((order) => <UserOrder key={order._id} order={order} cancelOrder={cancelOrder}></UserOrder>)
            }
            </div>
        </div>
    );
};

export default UserOrders;
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import ManageUsedUserBike from './ManageUsedUserBike';

const ManageUsedUserBikes = () => {
    const {user} = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/usedBike`)
        .then(result => {
            setOrders(result.data)
        })
    },[user.email])

    const newOrders = orders.filter(order => order?.email === user?.email);

    const cancelOrder = (id) => {
        //delete a order
        axios.delete(`http://localhost:5000/usedBike/${id}`)
        .then(result => {
            if(result.data){
                alert("Your order is deleted successfully");
                const newOrders = orders.filter(order => order._id !== id);
                setOrders(newOrders)
            }
        })
    }
    return (
        <div className="container" >
            <h3 className="text-center text-danger mb-5">Your Sell Request for Used Bikes</h3>
            <div className=" row">
            {
                newOrders.map((order) => <ManageUsedUserBike key={order._id} order={order} cancelOrder={cancelOrder}></ManageUsedUserBike>)
            }
            </div>
        </div>
    );
};

export default ManageUsedUserBikes;
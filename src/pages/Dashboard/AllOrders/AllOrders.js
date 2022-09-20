import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AllOrder from './AllOrder/AllOrder';
import './AllOrders.css'

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(()=> {
        axios.get('http://localhost:5000/orders')
        .then(result => {
            setOrders(result.data)
        })
    },[])

    //update order status by admin
    const updateStatus = (id) => {
        axios.put(`http://localhost:5000/orders/${id}`)
        .then(result => {
            if(result.data.acknowledged){
                alert("update status successfully")
                window.location.reload();
            }
        })
    }

    //deleted a order by admin
    const deleteOrder = (id) => {
        axios.delete(`http://localhost:5000/orders/${id}`)
        .then(result => {
            if(result.data.acknowledged){
                const newOrders = orders.filter(order => order._id !== id);
                setOrders(newOrders);
                alert("Order is deleted successfully");
            }
        })
    }
    return (
        <div>
            <div className="container text-center">
            <table className="table thead-dark table-hover">
            <thead className="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Bike</th>
                <th scope="col">Price</th>
                <th scope="col">User Name</th>
                <th scope="col">User Email</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            {
                orders.map((order, index) => <AllOrder deleteOrder={deleteOrder} updateStatus={updateStatus} index={index} key={order._id} order={order}></AllOrder>)
            }
            </table>
            
            </div>
        </div>
    );
};

export default AllOrders;
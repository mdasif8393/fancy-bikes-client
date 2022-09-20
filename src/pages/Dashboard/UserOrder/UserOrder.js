import React from 'react';
import './UserOrder.css'
const UserOrder = ({order, cancelOrder}) => {
    const {bikeName, bikeImage, bikePrice, _id, orderStatus} = order;

    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel');
        if(proceed){
            cancelOrder(id)
        }
    }
    return (
            <div  className="col-md-12 col-sm-12 ">
                <div className="card mb-3 " style={{width: '580px',}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={bikeImage} style={{height: '150px', width: '250px'}} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{bikeName}</h5>
                    <p className="card-text">{bikePrice} taka</p>
                    <p>Order Status: {orderStatus}</p>
                    <button className={orderStatus === 'shipped'? 'btn btn-outline-danger show-button' : 'hide-button'}onClick={()=>handleCancelOrder(_id)} ><i class="fas fa-trash-alt"></i> Cancel Order</button>
                </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default UserOrder;
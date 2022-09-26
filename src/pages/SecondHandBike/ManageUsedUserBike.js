import React from 'react';

const ManageUsedUserBike = ({order, cancelOrder}) => {
    const {description, email, engine, name, number, price, status, image, _id} = order;
    console.log(image)
    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure you want to cancel');
        if(proceed){
            cancelOrder(id)
        }
    }
    return (
        <div  className="col-md-12 col-sm-12">
                <div className="card mb-3 card-hover" style={{width: '580px',}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={image} style={{height: '183px', width: '250px'}} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{price} taka</p>
                    <p>Order Status: {status}</p>
                    <button className='btn btn-outline-danger' onClick={()=>handleCancelOrder(_id)} ><i class="fas fa-trash-alt"></i> Cancel Order</button>
                </div>
                </div>
            </div>
            </div>
            </div>
    );
};

export default ManageUsedUserBike;
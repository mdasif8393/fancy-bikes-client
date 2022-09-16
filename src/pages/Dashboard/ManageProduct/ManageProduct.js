import React from 'react';

const ManageProduct = ({bike, deleteBike}) => {
    const {description, engine, image, name, price, _id} = bike;

    const handleDeleteBike = (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if(proceed){
            deleteBike(id);
        }
        
    }
    return (
        <div>
            <div className="card mb-3" style={{maxWidth: '600px', height: '150px'}}>
            <div className="row g-0">
                <div className="col-md-5">
                <img src={image} style={{width: '300px', height: '147px'}} className="img-fluid rounded-start" alt="..."/>
                </div>
                <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-text">{price} taka</h6>
                    <button onClick={()=> handleDeleteBike(_id)}  className="btn btn-outline-danger" ><i class="fas fa-trash-alt"></i> Delete</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ManageProduct;
import React from 'react';
import './AllOrder.css'
const AllOrder = ({order, index, updateStatus, deleteOrder}) => {
    const {_id, address, bikeName, bikePrice, email, name, orderStatus} = order;

    const deleteUser = (id) => {
        const proceed = window.confirm("Are you sure to delete?");
        if(proceed){
            deleteOrder(id);
        }
    }
    console.log(orderStatus)
    return (
        <tbody>
                <tr>
                <th scope="row">{index + 1}</th>
                <td>{bikeName}</td>
                <td>{bikePrice} taka</td>
                <td>{name}</td>
                <td>{email}</td>
                <td>{orderStatus}</td>
                <td><button onClick={()=> deleteUser(_id)} className="btn btn-outline-danger" >Delete Order</button>
                    <button onClick={()=> updateStatus(_id)} className={orderStatus === 'shipped' ? 'd-none' : 'btn btn-outline-success d-block'} >Update Status</button>
                </td>
                </tr>


            </tbody>
    );
};

export default AllOrder;
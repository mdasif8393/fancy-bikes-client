import React from 'react';

const AllBikesOrder = ({order, index, updateStatus, deleteOrder}) => {
    const {_id, name, engine, price, description, image, userName, number, reason, status} = order;

    const deleteUser = (id) => {
        const proceed = window.confirm("Are you sure to delete?");
        if(proceed){
            deleteOrder(id);
        }
    }
    return (
        <tbody>
                <tr>
                <th scope="row">{index + 1}</th>
                <td>{name}</td>
                <td>{engine} CC</td>
                <td>{price} taka</td>
                <td>{description}</td>
                <td>{userName}</td>
                <td>{reason}</td>
                <td>+880{number}</td>
                <td>{status}</td>
                <td><button onClick={()=> deleteUser(_id)} className="btn btn-outline-danger" >Delete Order</button>
                    <button onClick={()=> updateStatus(_id)} className={status === 'confirm' ? 'd-none' : 'btn btn-outline-success d-block'} >Update Status</button>
                </td>
                </tr>


            </tbody>
    );
};

export default AllBikesOrder;
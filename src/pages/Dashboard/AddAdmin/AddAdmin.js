import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../../Shared/Header/Header';
import './AddAdmin.css'
const AddAdmin = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
  const onSubmit = data =>{
      axios.put(`http://localhost:5000/users/${data.email}`)
      .then(result => {
          if(result.data.acknowledged){
            alert("a admin is successfully added");
            reset();
          }
      })
  };


    
    return (
        <div className="add-admin-box d-flex justify-content-center align-items-center  add-admin-box container mt-5">
            <div>
            <h5 style={{color:'rgb(255, 67, 59)'}}>Enter email to make a admin</h5>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control d-inline" style={{ width: '72%'}} placeholder="Enter email address" {...register("email")} />

                <input className="btn btn-success make-admin-button" type="submit" />
            </form>
            </div>
        </div>
    );
};

export default AddAdmin;
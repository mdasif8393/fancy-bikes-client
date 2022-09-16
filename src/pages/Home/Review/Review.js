import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Review.css'

const Review = () => {
    const {user} = useAuth();
    const [value, setValue] = useState(5);
    const history = useHistory();


    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.rating= value;
        data.userName= user.displayName;
        data.email = user.email;
        
        axios.post('http://localhost:5000/review', data)
        .then(result => {
            if(result.data.acknowledged){
                
                alert('Thank you for your feedback');
                history.push('/');
                reset();
            }
        })
    };
    return (
        <div className="row">
            <div className="mt-5 container d-flex justify-content-center align-items-center write-review-box col-md-12 col-sm-12">
                <div>
                <h5 style={{color:'#1C3E40', fontWeight: '700'}}>Review our service</h5>
                <Typography style={{color:'rgb(255, 67, 59)'}} component="legend"><small>Give a Rating</small></Typography>
                    <Rating style={{color:'rgb(255, 67, 59)'}}
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <TextField sx={{width: 3/4}} required label="Write a review about us" variant="filled"   rows={4} {...register("review")} /> <br/> */}

                    <div className="form-floating">
                        <textarea required {...register("review")} className="form-control"  style={{height: '150px', width: '300px'}} id="floatingTextarea2"></textarea>
                        <label for="floatingTextarea2">Write a review about us</label>
                    </div> <br/>

                    

                    <button className="btn btn-success write-review-button"type="submit"><i class="fas fa-arrow-right"></i> Submit</button>
                </form>
                </div>
            </div>
            
        </div>
    );
};

export default Review;
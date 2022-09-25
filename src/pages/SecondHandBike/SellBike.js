import React from 'react';
import { Button, Container, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const SellBike = () => {

    const {user} = useAuth();

    const history = useHistory();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        if(data.number.length != 10){
            alert("Mobile number must be 10 character excluding +880");
            return;
        }
        data.status = 'pending';
        data.email = user?.email;
        data.userName = user?.displayName;
        axios.post('http://localhost:5000/usedBike', data)
        .then(result => {
            if(result.data.acknowledged){
                alert("Your sell request is under verification by admin");
                reset();
                history.push('/manageUsedUserBikes');
            }
        })
    };
    return (
        <div>
             <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <TextField sx={{width: 1}} required={true}  {...register("name")}  label="Bike Name" variant="standard" type="text"/> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("engine")}  label="Engine Capacity in CC" variant="standard" type="number"/> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("price")}  label="Asking Price" variant="standard" type="number"/> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("description")}  label="Bike's Condition and Description" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("image")}  label="Image URL (Please Provide Real Image)" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("userName")}  label="Your Name" value={user?.displayName} disabled type="text" variant="standard" /> <br/>

                    <div className="d-flex justify-content-center align-items-center">
                        <small className="fs-6">+880</small>
                        <TextField type="number" sx={{width: '100%',}}  label="Contact Number" variant="standard" required {...register("number")} />
                    </div>

                    <TextField sx={{width: 1}} required={true}  {...register("reason")}  label="Reason to Sell Bike" variant="standard" /> <br/> <br/> 

                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Sell Bike
                    </Button>
                    
                </form>
            </Container>
        </div>
    );
};

export default SellBike;
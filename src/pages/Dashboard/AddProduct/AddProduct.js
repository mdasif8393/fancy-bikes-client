import { Button, Container, TextField } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const onSubmit = data => {

        axios.post('http://localhost:5000/bikes', data)
        .then(result => {
            if(result.data.acknowledged){
                alert("Data inserted successfully");
                reset();
            }
        })
    };
    return (
        <div>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <TextField sx={{width: 1}} required={true}  {...register("name")}  label="Bike Name" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("engine")}  label="Engine Capacity" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("price")}  label="Price" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("description")}  label="Description" variant="standard" /> <br/>

                    <TextField sx={{width: 1}} required={true}  {...register("image")}  label="Image URL" variant="standard" /> <br/> <br/>
                    
                    
                    <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                        Save
                    </Button>
                    
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;
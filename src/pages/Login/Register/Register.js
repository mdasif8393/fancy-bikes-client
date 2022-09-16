import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();

    const {user, registerUser, isLoading, authError} = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value; //new thing to set value
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert("Your password didn't mach")
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                     Register
                </Typography>
                
                { !isLoading && 
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{width: '75%',}} id="standard-basic" label="Name" variant="standard"  name="name" onBlur={handleOnBlur} />

                        <TextField sx={{width: '75%',}} id="standard-basic" label="email" variant="standard"  name="email" type="email" onBlur={handleOnBlur} />

                        <TextField sx={{width: '75%',}} id="standard-basic" label="password" type="password" variant="standard" name="password" onBlur={handleOnBlur}/>
                        
                        <TextField sx={{width: '75%',}} id="standard-basic" label="Retype password" type="password" variant="standard" name="password2" onBlur={handleOnBlur}/>

                        <Button sx={{width: '75%',}} type="submit" variant="contained">Register</Button>
                        
                        <NavLink style={{textDecoration: 'none'}} to='/login'><Button  variant="text">Already Registered? Please Login</Button></NavLink>
                    </form>
                }

                {
                    isLoading && <CircularProgress />
                }

                {
                    user?.email && <Alert severity="success">User created successfully!</Alert>
                }
                {
                    authError && <Alert severity="error">{authError}</Alert>
                }
                
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%', }} src="https://i.ibb.co/tX1BND4/loginlogo.png" alt=""></img>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;
import React, { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError, signInWithGoogle} = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value; //new thing to set value
        setLoginData(newLoginData);
    }


    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:8}} xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                     Login
                </Typography>
                
                <form onSubmit={handleLoginSubmit}>
                    <TextField sx={{width: '75%',}} id="standard-basic" label="email" variant="standard" name="email" onBlur={handleOnChange} />

                    <TextField sx={{width: '75%',}} id="standard-basic" label="password" type="password" variant="standard" name="password" onBlur={handleOnChange}/>

                    <Button sx={{width: '75%',}} type="submit" variant="contained">Login</Button>
                    <NavLink style={{textDecoration: 'none'}} to='/register'><Button  variant="text">New User? Please Register</Button></NavLink>
                    {
                        isLoading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login successfully!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </form>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%', }} src="https://i.ibb.co/tX1BND4/loginlogo.png" alt=""></img>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;
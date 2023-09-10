import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import {useState} from "react";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="/" style={{ textDecoration : "none"}}>
                _Team
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Signup() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        paddingTop: 29,
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'black' , width : 60 , height : 60}}>
                        _Team
                    </Avatar>
                    <Typography component="h1" variant="h5" color= "#292929">
                        Welcome
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Email Address"
                            autoComplete="email"
                            autoFocus
                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={async () => {
                                try {
                                    const requestData = {
                                        username: email,
                                        password: password,
                                    };

                                    const res = await axios.post("http://localhost:3000/signup", requestData, {
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    });

                                    const data = res.data;
                                    localStorage.setItem("token", data.token);
                                    window.location = "/";
                                } catch (error) {
                                    console.error("Error:", error);
                                }
                            }}
                        >
                            Sign Up
                        </Button>
                        <Grid container>
                            <Grid item style={{
                                paddingLeft: "95px",
                            }}>
                                <Link href="#" variant="body2" onClick={ ()=>{
                                    window.location="/signin";
                                }}>
                                    {"Already have an account? Sign In"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
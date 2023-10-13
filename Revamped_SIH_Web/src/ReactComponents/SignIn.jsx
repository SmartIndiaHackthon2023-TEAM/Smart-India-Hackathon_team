import Button from '@mui/material/Button';
import {
    Avatar,
    Box,
    createTheme,
    Grid,
    Link,
    Paper,
    TextField,
    ThemeProvider,
    Typography
} from "@mui/material";
import {useState} from "react";
import axios from "axios";
import { motion } from 'framer-motion';

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
function SignIn(){
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            <ThemeProvider theme={defaultTheme}>
                <motion.div
                    initial={{ opacity: 0, x: -20, background: "transparent" }}
                    animate={{ opacity: 1, x: 0, background: "black" }}
                    exit={{ opacity: 0, background: "transparent" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundColor: 'black',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <img
                            src="src\assets\pngegg (1).png"
                            style={{
                                objectFit: 'contain',
                                width: 600,
                                height: 700,
                                marginLeft: 70,
                            }}
                            alt="Website Logoo"
                        />
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{
                        backgroundColor: 'black',
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'black' , width : 60 , height : 60, border: '3px solid white'}}>
                                _Team
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{color : "white"}}>
                                Welcome Back
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    autoComplete="email"    
                                    className='inputField'
                                    sx={{
                                        "& .MuiInputLabel-root": {color: '#1977d2'},//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "#1977d2" },
                                        },
                                    }}
                                    autoFocus
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                    InputLabelProps={{
                                        style: { color: 'white' , backgroundColor : "black"} 
                                    }}
                                    InputProps={{
                                        style: { color: 'white'  , backgroundColor : "black"},
                                    }}

                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    sx={{
                                        "& .MuiInputLabel-root": {color: '#1977d2'},//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "#1977d2" },
                                        },
                                    }}
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                    InputLabelProps={{
                                        style: { color: 'white' }
                                    }}
                                    InputProps={{
                                        style: { color: 'white' },
                                    }}
                                />
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={ async () => {
                                        try {
                                            let sendData = {
                                                username : email,
                                                password : password
                                            }
                                            const res = await axios.post("http://localhost:3000/login",sendData,{
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                            });
                                            const data = res.data;
                                            localStorage.setItem("token", data.token);
                                            window.location = "/";
                                        } catch (error) {
                                            console.error();
                                        }
                                    }}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item style={{
                                        paddingLeft: "95px",
                                    }}>
                                        <div
                                            style={{
                                                color: 'white',
                                                paddingLeft: 50,
                                                paddingTop: 15,
                                                cursor: 'pointer',
                                                fontSize: '18px',
                                                // fontFamily : "sans-serif"
                                            }}
                                            onClick={() => {
                                                window.location.href = "./signup";
                                            }}
                                        >
                                            <Typography>
                                            Don't have an account ? Sign Up
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                </motion.div>
            </ThemeProvider>
        </div>
    )
}
export default SignIn;
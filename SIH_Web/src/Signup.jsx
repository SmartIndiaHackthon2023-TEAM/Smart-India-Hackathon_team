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
        <motion.div
            initial={{ opacity: 0, x: 20, background: "transparent" }}
            animate={{ opacity: 1, x: 0, background: "black" }}
            exit={{ opacity: 0, background: "transparent" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <ThemeProvider theme={defaultTheme}>
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
                            alt="Website Logo"
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
                                Welcome
                            </Typography>
                            <Box component="form" noValidate sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Email Address"
                                    autoComplete="email"
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
                                        style: { color: 'white' }
                                    }}
                                    InputProps={{
                                        style: { color: 'white' },
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    sx={{
                                        "& .MuiInputLabel-root": {color: '#1977d2'},//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "#1977d2" },
                                        },
                                    }}
                                    autoComplete="current-password"
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
                                        <div
                                            style={{
                                                paddingLeft: 50,
                                                paddingTop: 15,
                                                cursor: 'pointer',
                                                color: 'white',
                                                fontSize: '18px',
                                            }}
                                            onClick={() => {
                                                window.location.href = "./signup";
                                            }}
                                        >
                                            Already have an account ? Sign In
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </motion.div>
    )
}
export default SignIn;
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
import Typed from 'react-typed'
import { CuMarq } from './Custom_marquee';
import Loading from "./loading.json"
import Lottie from "lottie-react"

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
function Signup(){
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    return(
            <ThemeProvider theme={defaultTheme}>
                <CuMarq></CuMarq>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundColor: "#e4e4e4",
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* <img
                            src="src\assets\TeamLogo.png"
                            style={{
                                objectFit: 'contain',
                                width: 600,
                                height: 700,
                                marginLeft: 70,
                            }}
                            alt="Website Logo"
                        /> */}
                    <div style={{
                                objectFit: 'contain',
                                width: 500,
                                height: 600,
                                fontSize : 100,
                                marginLeft: 90,
                                color : "WHITE"}}>
                    {/* <Typed strings={["=_=" , "+_+" , "0_0" , "o_o"]}
                    typeSpeed={0}
                    backSpeed={0}
                    showCursor = {false}
                    loop={true}
                    >
                    </Typed> */}
                    <Lottie animationData={Loading}></Lottie>
                    </div>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5}  square sx={{
                        backgroundColor: '#e4e4e4',
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh',
                                marginRight : 30
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'black' , width : 60 , height : 60}}>
                                <img src="./src/assets/TeamLogo.png" style={{height : "60px"}}/>
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{color : "black"}}>
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
                                        "& .MuiInputLabel-root": {color: 'black'},//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "black" },
                                        },
                                    }}
                                    autoFocus
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                    InputLabelProps={{
                                        style: { color: 'black' }
                                    }}
                                    InputProps={{
                                        style: { color: 'black' },
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    sx={{
                                        "& .MuiInputLabel-root": {color: 'black'},//styles the label
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: "black" },
                                        },
                                    }}
                                    autoComplete="current-password"
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                    InputLabelProps={{
                                        style: { color: 'black' }
                                    }}
                                    InputProps={{
                                        style: { color: 'black' },
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
                                                color: 'black',
                                                fontSize: '18px',
                                            }}
                                            onClick={() => {
                                                window.location.href = "./signIn";
                                            }}
                                        >
                                            <Typography>
                                            Already have an account ? Sign In
                                            </Typography>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
    )
}
export default Signup;
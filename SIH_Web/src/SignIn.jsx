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
                                Welcome Back
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

                                            }}
                                            onClick={() => {
                                                window.location.href = "./signup";
                                            }}
                                        >
                                            Don't have an account ? Sign Up
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </div>
    )
}
export default SignIn;
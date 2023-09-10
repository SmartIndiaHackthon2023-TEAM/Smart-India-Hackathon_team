import Button from '@mui/material/Button';
import {
    Avatar,
    Box,
    createTheme,
    CssBaseline,
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
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://about.coursera.org/static/whiteCoursera-23ec484f7091914430ce19b07d09aedf.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100vh',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'black' , width : 60 , height : 60}}>
                                _Team
                            </Avatar>
                            <Typography component="h1" variant="h5" style={{color : "#292929"}}>
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
                                        <div
                                            style={{
                                                paddingLeft: 50,
                                                paddingTop: 15,
                                                cursor: 'pointer',
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
        </div>
    )
}
export default SignIn;
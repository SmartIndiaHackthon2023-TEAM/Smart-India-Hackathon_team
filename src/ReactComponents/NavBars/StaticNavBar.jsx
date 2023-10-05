import "../../App.css"
import * as React from 'react';
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { SignInPop } from "../SignInPopup";
import { SignUpPop } from "../SignUpPopup";
import { useRecoilState , useRecoilValue , useSetRecoilState} from "recoil";
import { LogInPop } from "../../store/atoms/LogInPop";
import { lodge } from "../../store/atoms/signUpPop";
import { useEffect } from "react";
import { emailSelector } from "../../store/selectors/userEmail";
import Button from '@mui/material/Button';
import { userState } from "../../store/atoms/user";
import Avatar from '@mui/material/Avatar';
import { useNavigate } from "react-router-dom";

export function StaticNavBar()
{
    const userEmail = useRecoilValue(emailSelector)
    const [popup , setPopup] = useRecoilState(LogInPop)
    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)
    const setUser = useSetRecoilState(userState);
    const navigate = useNavigate();

    useEffect(() =>
    {
        AOS.init({duration : 700})
    } ,[])

    if(userEmail)
    {
        return (
            <>
            <div className="navbar">
                    <h2>Team.</h2>
                    <div id="typing">
                        <h3>We Check</h3>
                        <p>
                        <Typed strings={["URLs" , "EMAILs" , "SMS"]}
                        typeSpeed={100}
                        backSpeed={70}
                        loop={true}
                        >
                        </Typed>
                        </p>
                    </div>
                    <p className="navbarLinks"><a href="https://sih.gov.in/sih2023PS" target="_blank">SIH</a></p>
                    <Avatar alt="Remy Sharp" src="src\assets\avatar.jpg" style={{marginRight : "2vh" , marginTop : "1.5vh" , borderRadius : "30px" , border : "2px solid grey"}}/>
                    <Button variant="contained" id="LPSignIn" onClick={() =>
                    {
                        localStorage.setItem("token" , null);
                        setUser({
                            userEmail: null,
                            isLoading: false
                        })
                        navigate("/");
                    }}>LogOut</Button>
                    <Button variant="outlined" id="LPSignUp">Contribute</Button>
                </div>
            </>
        )
    }
    else
    {
        return (
            <>
            <div className="navbar">
                    <h2>Team.</h2>
                    <div id="typing">
                        <h3>We Check</h3>
                        <p>
                        <Typed strings={["URLs" , "EMAILs" , "SMS"]}
                        typeSpeed={100}
                        backSpeed={70}
                        loop={true}
                        >
                        </Typed>
                        </p>
                    </div>
                    <p className="navbarLinks"><a href="https://sih.gov.in/sih2023PS" target="_blank">SIH</a></p>
                    <Button variant="contained" id="LPSignIn"onClick={() =>
                    {
                        setPopup(!popup);
                    }}>LogIn</Button>
                    <Button variant="outlined" id="LPSignUp" onClick={() =>
                    {
                        setSignUpPopup(!signuppopup)
                    }}>Sign up</Button>
                </div>
                {popup==false && (
                    <SignInPop/>
                )}
        
                {signuppopup==false && (
                    <SignUpPop/>
                )}
            </>
        )
    }
}

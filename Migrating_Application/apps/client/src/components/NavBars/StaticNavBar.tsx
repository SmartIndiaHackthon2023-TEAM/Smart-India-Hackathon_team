import "../../App.css"
import * as React from 'react';
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css'

// import { SignInPop } from "../SignInPopup";
// import { SignUpPop } from "../SignUpPopup";
import { SignInPop } from "../SignInPopup";
import { SignUpPop } from "../SignUpPopup";

import { useRecoilState , useRecoilValue , useSetRecoilState} from "recoil";
import { useEffect } from "react";
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';


// import { LogInPop } from "../../store/atoms/LogInPop";
// import { lodge } from "../../store/atoms/signUpPop";
// import { emailSelector } from "../../store/selectors/userEmail";
// import { userState } from "../../store/atoms/user";

import { LogInPop } from "store";
import { lodge } from "store";
import { emailSelector } from "store";
import { userState } from "store";

// import { useNavigate } from "react-router-dom";
import { useRouter } from "next/router";

export function StaticNavBar()
{
    const userEmail = useRecoilValue(emailSelector)
    const [popup , setPopup] = useRecoilState(LogInPop)
    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)
    const setUser = useSetRecoilState(userState);
    const router = useRouter()
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
                        localStorage.setItem("token" , String(null));
                        setUser({
                            userEmail: null,
                            isLoading: false
                        })
                        router.push("/");
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
                        setPopup((currVal) => ({ ...currVal, Spopup: !currVal.Lpopup }));
                    }}>LogIn</Button>
                    <Button variant="outlined" id="LPSignUp" onClick={() =>
                    {
                        setSignUpPopup((currVal) => ({ ...currVal, Spopup: !currVal.Spopup }));

                    }}>Sign up</Button>
                </div>
                {popup.Lpopup == false && (
                    <SignInPop/>
                )}
        
                {signuppopup.Spopup == false && (
                    <SignUpPop/>
                )}
            </>
        )
    }
}

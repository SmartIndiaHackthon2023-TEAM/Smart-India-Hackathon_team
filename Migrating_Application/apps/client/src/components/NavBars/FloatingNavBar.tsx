import { Button } from "@mui/material";
// import "../../App.css"
import { useRecoilState , useRecoilValue } from "recoil";
import Avatar from '@mui/material/Avatar';
import { LogInPop } from "store";
import { lodge } from "store";
import { emailSelector } from "store";
import { useRouter } from "next/router";

export function FloatingNavBar()
{
    const [popup , setPopup] = useRecoilState(LogInPop)
    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)
    const userEmail = useRecoilValue(emailSelector)
    const router = useRouter()
    if(userEmail)
    {
        return (
            <section className="FloatingNav">
                    <div className="button">
                    <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "30vh" , marginLeft : "2vh" , marginTop : "1vh" , opacity : "1" , borderRadius : "12px" , color : "yellow"}}>
                        <Avatar alt="Remy Sharp" src="src\assets\avatar.jpg" style={{marginRight : "2vh" , borderRadius : "30px" , border : "2px solid grey"}}/>
                        {/* <span style={{marginRight : "30px"}}>{username.split('@')[0]}</span> */}
                        <span>{userEmail.split('@')[0]}</span>
                    </Button>
                    </div>
                    <div className="SS">
                    <div className="button-appeared" id="appeared1">
                    <Button className="Gold-Button" style={{backgroundColor : "#222222" , height : "8vh" , width : "20vh" , opacity : "1" , borderRadius : "12px" , color : "white"}} onClick={() =>
                    {
                        router.push("/checkUrl");
                    }}>Check-Url</Button>
                    </div>
                    <div className="button-appeared">
                    <Button className="Gold-Button" style={{backgroundColor : "#222222" , height : "8vh" , width : "20vh", opacity : "1" , borderRadius : "12px" , color : "white"}} onClick={() =>
                    {
                        router.push("/checkEmail");
                    }}>Check-Email</Button>
                    </div>
                    <div className="button-appeared">
                    <Button className="Red-Button" style={{ height : "8vh" , width : "20vh" , borderRadius : "12px" , backgroundColor : "#ff602c" , color : "black"}} onClick={() =>
                    {
                        router.push("/checkSMS");
                    }}>Check-SMS</Button>
                    </div>
                    </div>
                </section>
            )
    }
    else
    {
    return (
        <section className="FloatingNav">
            <div className="button">
            <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "30vh" , marginLeft : "2vh" , marginTop : "1vh" , opacity : "1" , borderRadius : "12px" , color : "yellow"}} onClick={() =>
            {
                router.push("/");
            }}>_TEAM</Button>
            </div>
            <div className="SS">
            <div className="button">
            <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "20vh" , marginLeft : "18vh" , opacity : "1" , borderRadius : "12px" , color : "white"}} onClick={() =>
            {
                // setPopup(!popup)
                setPopup((currVal) => ({ ...currVal, Lpopup: !currVal.Lpopup }));

            }}>LogIn</Button>
            </div>
            <div className="button">
            <Button style={{ height : "8vh" , width : "20vh" , marginLeft : "1vh" , borderRadius : "12px" , backgroundColor : "#ff602c" , color : "black"}} onClick={() =>
            {
                // setSignUpPopup(!signuppopup)
                setSignUpPopup((currVal) => ({ ...currVal, Spopup: !currVal.Spopup }));

            }}>SignUp</Button>
            </div>
            </div>
        </section>
    )
}
}
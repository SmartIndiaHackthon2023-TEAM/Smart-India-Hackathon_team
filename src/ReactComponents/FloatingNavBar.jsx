import { Button } from "@mui/material";
import "../App.css"

export function FloatingNavBar()
{
    return (
        <section className="FloatingNav">
            <div className="button">
            <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "30vh" , marginLeft : "2vh" , marginTop : "1vh" , opacity : "1" , borderRadius : "12px" , color : "yellow"}}>_TEAM</Button>
            </div>
            <div className="SS">
            <div className="button">
            <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "20vh" , marginLeft : "18vh" , opacity : "1" , borderRadius : "12px" , color : "white"}}>LogIn</Button>
            </div>
            <div className="button">
            <Button style={{backgroundColor : "#222222" , height : "8vh" , width : "20vh" , marginLeft : "1vh" , borderRadius : "12px" , backgroundColor : "#ff602c" , color : "black"}}>SignUp</Button>
            </div>
            </div>
        </section>
    )
}
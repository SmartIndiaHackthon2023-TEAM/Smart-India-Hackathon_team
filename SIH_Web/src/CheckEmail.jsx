import ButtonAppBar from "./ReactComponents/NavBar"
import OutlinedCard from "./ReactComponents/Cards/Card1"
import { Button, Container } from "@mui/material";
import InputBoxEmail from "./ReactComponents/InputBoxEmail";
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';

export function CheckEmail(){
    return(
        <div>
            <ButtonAppBar></ButtonAppBar>
            <div style={{
            backgroundColor : "#060606" ,
            height : "78vh" ,
            borderBottom : "2px solid #1e1e1f" ,
            padding : "0px"
        }}>
        <Container>
            <div style={{ paddingTop : "150px" ,paddingLeft :"250px" , width : 500 , height : 400 }}>
                <div style={{border : "2px solid white" , borderRadius : "20px" , padding : "0px"}}>
                    <InputBoxEmail sx={{border: '1px solid green', borderRadius: 1 , height : 800}} style={{width : "1500px"}}></InputBoxEmail>
                </div>
                <Button style={{width : "50px" ,position : "relative" , top : "-75px" , left : "510px"}} onClick={() =>
                {

                    /*************** Axios to communicate with Api of ml model ********************/







                }}  ><TroubleshootIcon style={{color : "#fafafa" , fontSize : "60px"}}></TroubleshootIcon></Button>
            </div>
        </Container>
        </div>
        <div style={{
            backgroundColor : "#060606" ,
            height : "20vh" ,
            borderBottom : "0.1px solid #1e1e1f" ,
            paddingTop : "30px" }}>
            <Container>
                <div style={{color : "#fafafa" , display : "flex" , flexDirection : "row"}}>
                <div>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Button style={{color : "inherit" , fontSize : "18px"}} onClick={() => {window.location = "/"}}>_Team</Button></Typography>
                <p style={{fontFamily : "sans-serif" , color : "#848686"}}>This project is submission for Smart India Hackathon 2023</p>
                </div>
                <div style={{
                    marginLeft : "550px" ,
                    marginTop : "50px" ,
                }}>
                <Button onClick={() =>
                {
                    window.location = "/signin"
                }} style={{width : "50px" , paddingRight : "60px"}}><LinkIcon style={{color : "#fafafa" , fontSize : "50px"}}></LinkIcon></Button>
                <Button onClick={() =>
                {
                    window.location = "https://github.com/Vibgitcode27/Smart-India-Hackathon_team"
                }} style={{width : "40px"}}><GitHubIcon style={{color : "#fafafa" , fontSize : "40px"}}></GitHubIcon></Button>
                </div>
                </div>
            </Container>
        </div>
        </div>
    )
}
import ButtonAppBar from "./ReactComponents/NavBar"
import { Button, Container } from "@mui/material";
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import Typography from '@mui/material/Typography';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export function CheckUrl(){
    

// ******************************** Make new state variables ******************************************** //

    let [urlValue , setUrlValue] = useState();
    let [result , setResult] = useState()
                                    // ********************** //
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
            <div style={{ paddingTop : "150px" ,paddingLeft :"250px" , width : 500 , height : 100 }}>
                <div style={{border : "2px solid white" , borderRadius : "20px" , padding : "0px"}}>
                        {/* *************************** Copy this box and remove <InputBoxEmail> ********************** */}
                    <Box
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 1 },
                        color : "white" ,
                        backgroundColor : "#060606"
                        }} >
                        <TextField style={{color : "white" }} InputLabelProps={{style: { color: '#fff'}}} sx={{ input: { color: 'white' }}}
                        // helperText="Please enter your name"
                        id="demo-helper-text-aligned"
                        label="Enter Url"
                        onChange={ (e) => {
                            setUrlValue(e.target.value);
                        }}/>
                        </Box>
                </div>
                <Button style={{width : "50px" ,position : "relative" , top : "-75px" , left : "510px"}} onClick={ async () =>
                {
                    {
                         try { 
                            let response = await fetch('http://127.0.0.1:5000/predict' , {
                            method : 'POST' ,
                            body : JSON.stringify({   
                                "Content-type" : "Application/json" ,
                                message : urlValue
                            }) ,
                        })
                            let data = await response.json();
                                setResult(data.prediction);
                            } catch (error) {
                                console.error();
                            }
                    }
                }}  ><TroubleshootIcon style={{color : "#fafafa" , fontSize : "60px"}}></TroubleshootIcon></Button>
            </div>
            <div style={{color : "white"}}>

                {/* **************** ADD THIS BOX *********************** */}

            <Box sx={{ width: 350 , marginLeft : "45vh", marginTop : "30px"}}>
                <Card>
                    <React.Fragment>
                            <CardContent sx={{bgcolor : "#060606"}} style={{border : "1px solid #ffffff"}}>
                                <Typography variant="h4" component="div" sx={{color : "#ffffff"}} style={{ fontSize : "1.5rem" , lineHeight : "2.5rem" , fontWeight : "600" , fontFamily : "serif , monospace" , color : "green"}}>
                                    {result}
                                </Typography> 
                            </CardContent>
                        </React.Fragment>
                    </Card>
                </Box>
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
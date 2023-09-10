import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState , useEffect } from "react";
import axios from "axios";
import Avatar from '@mui/material/Avatar';

export default function ButtonAppBar() {

  let [username , setUsername] = useState(null);
  
  
  //   useEffect(() =>
  //   {
  //   let getApiData = async () => {
  //     try {
  //         const res = await axios.get("http://localhost:3000/me",{
  //             headers: {
  //                 "Content-Type": "application/json",
  //                 "Authorization" : "Bearer" + localStorage.getItem("token")
  //             },
  //         });
  //         setUsername(res.data.username);
  //     } catch (error) {
  //         console.error("Error:", error);
  //     }
  // }
  //   getApiData()
  // })

    useEffect(()=>{
        axios.get("http://localhost:3000/me",{
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            }
        }).then(response=>{
            setUsername(response.data.username);
        }).catch(error=>{
            console.error("Error fetching data:", error);
        })
    },[])

  // let getApiData = async () => 
  // {
  //     let res = await axios.get("http://localhost:3000/me" , {
  //       headers : {
  //         "Authorization" : "Bearer " + localStorage.getItem("token") ,
  //       }
  //     })
  //     if(res)
  //     {
  //       setUsername(data.username);
  //     }
  // }

  //   useEffect(() =>
  //   {
  //       getApiData();
  //   } ,[])

if(username)
{
  return (
    <Box sx={{ 
        flexGrow: 1 ,
        bgcolor : 'black',
        }}>
      <AppBar position="fixed" sx={{
          bgcolor : '#000000',
          borderBottom: '1px solid white'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Button style={{color : "inherit" , fontSize : "18px"}} onClick={() => {window.location = "/"}}>_Team</Button></Typography>
          <Button color="inherit" sx={{marginRight : 3}} onClick={() =>
        {
            window.location = "./url"   
        }}>Check_URL</Button>
          <Button color="inherit" sx={{marginRight : 55}} onClick={() =>
        {
            window.location = "./email"
        }}>Check_Email</Button>
        <div>
          <Avatar alt="Remy Sharp" src="src\assets\Avatar.png" style={{paddingLeft :"20px"}}/>
          <span style={{marginRight : "30px"}}>{username.split('@')[0]}</span>
        </div>
          <Button color="inherit" sx={{marginRight : 3}} onClick={() => {localStorage.setItem("token" , null) , window.location = "/"}}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
  else
  {
    return (
      <Box sx={{ 
          flexGrow: 1 ,
          bgcolor : 'black',
          }}>
        <AppBar position="fixed" sx={{bgcolor : '#000000',
            borderBottom: '1px solid white',}}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}><Button style={{color : "inherit" , fontSize : "18px"}} onClick={() => {window.location = "/"}}>_Team</Button></Typography>
            <Button color="inherit" sx={{marginRight : 3}} onClick={() => { window.location = "/signin"}}>Login</Button>
            <Button color="inherit" variant="contained" sx={{bgcolor : "#fafafa" , color : "#171717"}} onClick={() => { window.location = "/signup"}}>SignUp</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }    
  }

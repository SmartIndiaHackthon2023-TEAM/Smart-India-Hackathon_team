import { Button, Container } from "@mui/material";
import ButtonAppBar from "./ReactComponents/NavBar";
import Typography from '@mui/material/Typography';
import OutlinedCard from "./ReactComponents/Cards/Card1";
import Contributors from "./ReactComponents/Contributors";
import Leader_Contributors from "./ReactComponents/Leader_Contributors";
import Developers_Contributors from "./ReactComponents/Developers_Contributors";
import DataScientists_Contributors from "./ReactComponents/DataScientists_Contributors";
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion'

export function LandingPage(){

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.8, background: "transparent" }}
            animate={{ opacity: 1, scale: 1, background: "black" }}
            exit={{ opacity: 0, scale: 0.8, background: "transparent" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
        <div style={{
            backgroundColor : "#060606" ,
            height : "92vh" ,
            borderBottom : "2px solid #1e1e1f" ,
            padding : "0px"
        }}>
        <Container>
            <div style={{
                paddingTop : "170px" ,
            }}>
                <OutlinedCard></OutlinedCard>
                <div style={{width: "300px" , height : "auto" , padding : "15px" , float : "right" , marginTop : "-420px" , marginRight : "180px"}}>
                <img src="src\assets\pngegg (1).png" style={{objectFit : "cover"}} width={400} height={400}></img>
                </div>
            </div>
        </Container>
        </div>
        <div style={{
            backgroundColor : "#060606" ,
            height : "160vh" ,
            borderBottom : "0.1px solid #1e1e1f" ,
            paddingTop : "30px"
        }}>
            <Container>
                <h1 style={{fontFamily : "monospace" , fontSize : "50px" , color : "#fafafa"}}>ABOUT THIS PROJECT</h1>
                <p style={{ color : "#848686" , fontFamily : "sans-serif" , fontSize : "18px" , lineHeight : "28px" , letterSpacing : "normal"}}>In the evolving landscape of cybersecurity, phishing attacks persistently threaten users globally. Malicious entities continuously devise sophisticated techniques to compromise user credentials and infiltrate systems with malware. Recognizing this, we're introducing a state-of-the-art Phishing Domain Detection Tool.</p>
                <div style={{ display : "flex" , border : "2px solid #1e1e1f" , marginTop : "35px" , width : "1200px"}}>
                
                <Typography component="div" style={{ color : "#848686" , padding : "20px"}}>
                    <h2 style={{color : "#fafafa" , fontSize : "28px"}}>OUR OBJECTIVES</h2>
                    <ul style={{color : "#CFD1D1" , fontFamily : "revert-layer" , fontSize : "18px"}}>
                        <li>
                            Automated Detection :
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>Seamlessly identify potential phishing domains using open-source databases.</p>
                        </li> 
                        <li>
                            Harnessing AI/ML
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>Incorporate cutting-edge AI and ML techniques to heighten detection accuracy</p>
                        </li>
                        <li>
                            Probability Scoring
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}> Rate domains based on their likelihood of being malicious.</p>
                        </li>
                        <li>
                            Swift Detection
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>Timely identification of emerging phishing threats for preemptive action.</p>
                        </li>
                        <li>
                            User Experience
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>Craft an intuitive tool that’s both powerful and user-friendly, offering varied output options tailored to user needs.</p>
                        </li>
                    </ul>
                </Typography>
                <img src= "src\assets\cube.webp" alt="my-gif" height={500} width={800} style={{ border : "2px solid #1e1e1f"}}/>
                </div>
                <Typography component="div" style={{ color : "#848686" , padding : "20px"}}>
                <h2 style={{color : "#fafafa" , fontSize : "28px"}}>HOW IT WORKS</h2>
                <ul style={{color : "#CFD1D1" , fontFamily : "revert-layer" , fontSize : "18px" , listStyleType : "kannada"}}>
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>We tap into valuable open-source databases, with a spotlight on the WHOIS database, to curate a list of recently registered domains.</p>
                        </li> 
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}> Dive deep into domain details, extracting crucial features that aid in the identification process.</p>
                        </li>
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}> Our algorithms assess backend codes, content similarities, and even image patterns on websites to distinguish between genuine and malicious sites.</p>
                        </li>
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>Our tool is always alert, constantly updating its database to catch the latest phishing culprits.</p>
                        </li>
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}>A clean, easy-to-navigate platform welcomes users, guiding them effortlessly through domain checks.</p>
                        </li>
                        <li>
                            <p style={{color : "#848686" , marginTop : "0px" , marginLeft : "15px" , fontSize : "15px" , lineHeight : "20px"}}> From detailed reports to quick alerts, we offer a range of output formats catering to varying needs.</p>
                        </li>
                    </ul>
                </Typography>
            </Container>
        </div>
        <div style={{
            backgroundColor : "#060606" ,
            height : "140vh" ,
            borderBottom : "0.1px solid #1e1e1f" ,
            paddingTop : "30px"
        }}>
            <Container>
            <h1 style={{fontFamily : "monospace" , fontSize : "50px" , color : "#fafafa"}}
            >Contributors</h1>
            <h2 style={{color : "#fafafa" , fontSize : "28px" , marginLeft : "50px" , fontFamily : "sans-serif"}}>_Team Leader :</h2>
            <div style = {{marginLeft : "100px"}}>
                <Leader_Contributors></Leader_Contributors>
            </div>
            <h2 style={{color : "#fafafa" , fontSize : "28px" , marginLeft : "50px" , fontFamily : "sans-serif"}}>_Team Developers :</h2>
            <div style = {{marginLeft : "100px"}}>
                <Developers_Contributors></Developers_Contributors>
            </div>
            <h2 style={{color : "#fafafa" , fontSize : "28px" , marginLeft : "50px" , fontFamily : "sans-serif"}}>_Team Data Scientists/Analysts :</h2>
            <div style = {{marginLeft : "100px"}}>
                <DataScientists_Contributors></DataScientists_Contributors>
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
        </motion.div>
    );    
}
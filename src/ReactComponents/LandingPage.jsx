import "../App.css"
import * as React from 'react';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Avatar, Container, ListItemAvatar } from "@mui/material";
import { useEffect } from "react";
import { FloatingNavBar } from "./NavBars/FloatingNavBar";
import { CuMarq } from "./Custom_marquee";
import { useState } from "react"
import { SignInPop } from "./SignInPopup";
import { SignUpPop } from "./SignUpPopup";
import axios from "axios";
import { useRecoilState } from "recoil";
import { LogInPop } from "../store/atoms/LogInPop"
import { lodge } from "../store/atoms/signUpPop";
import { StaticNavBar } from "./NavBars/StaticNavBar";

export function LandingPage()
{
    const [popup , setPopup] = useRecoilState(LogInPop)
    const [signuppopup , setSignUpPopup] = useRecoilState(lodge)

    useEffect(() => {
        if (signuppopup==false) {
            document.body.classList.add('active-Popup');
        } else {
            document.body.classList.remove('active-Popup');
        }
    return () => {
            document.body.classList.remove('active-Popup');
        }
    }, [signuppopup]);

    
    useEffect(() =>
    {
        AOS.init({duration : 700})
    } ,[])

    useEffect(() => {
        if (popup==false) {
            document.body.classList.add('active-Popup');
        } else {
            document.body.classList.remove('active-Popup');
        }
    return () => {
            document.body.classList.remove('active-Popup');
        }
    }, [popup]);

    return (
        <div>
            {/* part 1  */}
            <FloatingNavBar></FloatingNavBar>
            <CuMarq></CuMarq>
            {/* // navbar */}
            <StaticNavBar/>
            {/* Deco BOx            */}
            <div className="decobox">
                <div id="addblock">
                    <h4>ACC.</h4>
                    <div><p>95%</p></div>
                </div>
                <div id="icons">
                    <p><RadioButtonUncheckedIcon></RadioButtonUncheckedIcon></p>
                    <p><ChangeHistoryIcon></ChangeHistoryIcon></p>
                    <p><RadioButtonUncheckedIcon></RadioButtonUncheckedIcon></p>
                </div>
            </div>
            <div id="small-fp-text"><p>A Submission for SIH 2023</p></div>
            <div className="largeTextDiv" data-aos="fade-up">
                <p className="largeText">+_+</p>
                <p className="largeText">FINDS.PHISH</p>
            </div>
            <section>
                <div className="backBox" id="backBox1">
                    <div className="frontBox" data-aos='fade-in'>
                        <p>=_=</p>
                        <h1>Real-time phishing and fraudulent website detection</h1>
                        <span>A well-trained AI model can significantly improve the detection of phishing sites.</span>
                        <br></br>
                        <span>It's essential to constantly update the model, ensure you have good sources of genuine and phishing site data,</span>
                        <br />
                        <span>and have a useable interface for end-users</span>
                    </div>
                </div>
            </section>

            <section>
            <div className="backBox" id="backBox2">
                    <div className="frontBox" data-aos='fade-in'>
                        <p>+_+</p>
                        <h1>ABOUT THIS <span>PROJECT</span></h1>
                        <span>In the evolving landscape of cybersecurity, phishing attacks persistently </span>
                        <br />
                        <span>threaten users globally.</span>
                        <br/>
                        <span>Malicious entities continuously devise sophisticated techniques to compromise user </span>
                        <br />
                        <span>credentials and infiltrate systems with malware.</span>
                        <br />
                        <span>Recognizing this, we're introducing a state-of-the-art Phishing Domain Detection Tool.</span>
                    </div>
                </div>
            </section>

            <section >
                <div id="element">  
                <p>Elements</p>
                </div>
                <div className="sectionText">
                    <p>Objectives And</p>
                    <p>Workings</p>
                    <div className="masterDiv">
                        <div className="backBox" id="backBox3">
                            <div className="frontBox" data-aos='fade-in'>
                            <p>0_0</p>
                            <h1>OUR OBJECT<span>IVES</span></h1>
                            <ul>
                        <li>
                            Automated Detection :
                        </li> 
                        <li>
                            Harnessing AI/ML
                        </li>
                        <li>
                            Probability Scoring
                        </li>
                        <li>
                            Swift Detection
                        </li>
                        <li>
                            User Experience
                        </li>
                    </ul>
                            </div>  
                        </div>
                    {/* div 2 */}
                    <div className="backBox" id="backBox4">
                            <div className="frontBox" data-aos='fade-in'>
                            <p>.*_*.</p>
                            <h1>HOW IT WORKS</h1>
                            <ul style={{color : "#CFD1D1" , fontFamily : "revert-layer" , fontSize : "18px" , listStyleType : "kannada"}}>
                        <li>
                            <p>We tap into valuable open-source databases, with a spotlight on the WHOIS database, to curate a list of recently registered domains.</p>
                        </li> 
                        <li>
                            <p>Dive deep into domain details, extracting crucial features that aid in the identification process.</p>
                        </li>
                        <li>
                            <p>Our algorithms assess backend codes, content similarities, and even image patterns on websites to distinguish between genuine and malicious sites.</p>
                        </li>
                        <li>
                            <p>Our tool is always alert, constantly updating its database to catch the latest phishing culprits.</p>
                        </li>
                        <li>
                            <p>A clean, easy-to-navigate platform welcomes users, guiding them effortlessly through domain checks.</p>
                        </li>
                    </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <div className="contributors" data-aos='fade-up'>
                    <div>
                    <h3>Lets Meet Our Conrtibutors</h3>
                    </div>
                </div>
            <section className="cards" data-aos='fade-up'>
                <div className="card" id="card1">
                    <div>
                    <h2>_TEAM's Security Consultant</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative" , top : "-30px" , fontSize : "200px"}}>
                    <Avatar src="src\assets\Harsh.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                    <h1>Harsh Patel</h1>
                    <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
                <div className="card" id="card2">
                    <div>
                    <h2>_TEAM's Data Scientist</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative" , top : "-30px" , fontSize : "200px"}}>
                            <Avatar src="src\assets\Shivansh.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                        <h1>Shivansh Mahajan</h1>
                        <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
                <div className="card" id="card3">
                    <div>
                    <h2>_TEAM's Data Scientist</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative" , top : "-30px" , fontSize : "200px"}}>
                            <Avatar src="src\assets\Snehal.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                        <h1>Snehal Saurabh</h1>
                        <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
                <div className="card" id="card4">
                    <div>
                    <h2>_TEAM's DEVELOPER</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative" , top : "-30px" , fontSize : "200px"}}>
                            <Avatar src="src\assets\Vibhor.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                        <h1>Vibhor Phalke</h1>
                        <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
                <div className="card" id="card5">
                    <div>
                    <h2>_TEAM's DEVELOPER</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative" , top : "-30px" , fontSize : "200px"}}>
                            <Avatar src="src\assets\Shashwat.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                        <h1>Shashwat Singh</h1>
                        <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
                <div className="card" id="card6">
                    <div>
                        <h2>_TEAM LEADER</h2>
                        <ListItemAvatar style={{marginLeft : "120px", position: "relative"}}>
                            <Avatar src="src\assets\Samriddhi.jpg" style={{width : "80px" , height  : "80px"}}></Avatar>
                        </ListItemAvatar>
                        <h1>Samriddhi Tripathi</h1>
                        <p>I am the best Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, repellendus. Molestias sunt aliquid recusandae facilis laboriosam maxime, beatae ipsa dicta dolor amet.</p>
                    </div>
                </div>
            </section>
            <section className="foots">
                <div className="movingFace">
                    <div>
                    <Typed strings={["=_=" , "+_+" , "0_0" , "o_o" , "(,,◕　⋏　◕,,)"]}
                    typeSpeed={0}
                    backSpeed={0}
                    showCursor = {false}
                    loop={true}
                    >
                    </Typed>
                    </div>
                </div>
            </section>
            <section className="footer">
                <aside>
                    <h2>Technologies & Tools.</h2>
                </aside>
                <div className="techStack">
                    <div id="div1">
                        <p><a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html" target="_blank">Random Forest Classifer</a></p>
                        <p><a href="https://scikit-learn.org/stable/modules/generated/sklearn.naive_bayes.GaussianNB.html" target="_blank">Naive Bayes Classifier</a></p>
                    </div>
                    <div>
                        <p><a href="https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.LogisticRegression.html" target="_blank">Logistic Regression</a></p>
                        <p><a href="https://docs.python.org/3/" target="_blank">Python</a></p>
                    </div>
                    <div>
                        <p><a href="https://react.dev/" target="_blank">React</a></p>
                        <p><a href="https://nodejs.org/en/docs" target="_blank">Node.js</a></p>
                    </div>
                    <div>
                        <p><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">CSS</a></p>
                        <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">HTML5</a></p>
                    </div>
                    <div>
                        <p><a href="https://www.mongodb.com/docs/" target="_blank">MongoDb</a></p>
                        <p><a href="https://www.kaggle.com/datasets/sid321axn/malicious-urls-dataset" target="_blank">Keggle Database</a></p>
                    </div>
                </div>
            </section>
            <section className="mainFooter">
                <div className="mainFooter-childDiv">
                    <h1>Team.</h1>
                    <div>
                        <h4>Connect:</h4>
                        <p>GitHub</p>
                        <p>Youtube</p>
                        <p>SIH</p>
                        <p>LinkdIn</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
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
import { FloatingNavBar } from "./NavBars/FloatingNavBar";
import { Avatar, Container, ListItemAvatar } from "@mui/material";
import { useEffect } from "react";
import { CuMarq } from "./Custom_marquee";
import { useState } from "react"
import { StaticNavBar } from "./NavBars/StaticNavBar";
import AddIcon from '@mui/icons-material/Add';

export function CheckUrl()
{

    let [urlValue , setUrlValue] = useState();
    let [result , setResult] = useState()
    useEffect(() =>
    {
        AOS.init({duration : 700})
    } ,[])

    return (
        <>
            <FloatingNavBar/>
            <CuMarq></CuMarq>
            <StaticNavBar/>
            <div id="small-fp-text"><p>Powered by RFC and XGBoost (:)</p></div>
            <div className="largeTextDiv" data-aos="fade-up">
                <p className="largeText" style={{marginRight : "8vh"}}>CHECK.`{`URL`}`</p>
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

            <section className="useBoxSec">
                <div className="useBox" data-aos='fade-in'>
                        <div className="redUseBox">
                                <h1>CHECK URL</h1>
                                <div style={{display : "flex", flexDirection : "row" }}>
                                    <div className="startPattern1">
                                        <p><AddIcon/></p>
                                        <p><AddIcon/></p>
                                        <p><AddIcon/></p>
                                    </div>
                                <div>
                                    <div className="redInput">
                                        <input type="text" placeholder="URL" name = "email" onChange={ (e) => {
                                            setUrlValue(e.target.value);
                                        }}/>
                                        <Button variant="outlined" id="redButton" onClick={ async () =>
                {
                    {
                        try {
                            let response = await fetch('http://127.0.0.1:8888/predict' , {
                                method : 'POST' ,
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body : JSON.stringify({
                                    url : urlValue
                                }) ,
                            })
                            let data = await response.json();
                            setResult(data.prediction);
                        } catch (error) {
                            console.error();
                        }
                    }
                }}>Submit</Button>
                                    </div>
                                    <div className="redInput" id="redInput">
                                        <Button variant="outlined" id="redButton">Result :</Button>
                                        <div className="whiteSpace">
                                            <p>THIS IS RESULT</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="startPattern2">
                                        <p><AddIcon/></p>
                                        <p><AddIcon/></p>
                                        <p><AddIcon/></p>
                                    </div>
                                </div>
                        </div>
                            <div className="blackInRed">
                                <p>
                                Made with <img src="src\assets\heart.png" alt="" className="love" /> by TEAM
                                </p>
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
        </>
    )
}
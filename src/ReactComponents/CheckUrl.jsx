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
import { FloatingNavBar } from "./FloatingNavBar";
import { CuMarq } from "./Custom_marquee";
import { useState } from "react"

export function CheckUrl()
{

    useEffect(() =>
    {
        AOS.init({duration : 700})
    } ,[])

    return (
        <>
            <CuMarq></CuMarq>
            <div className="navbar">
                <h2>Team.</h2>
                <div id="typing">
                    <h3>We Detect</h3>
                    <p>
                    <Typed strings={["Phish" , "Malware"]}
                    typeSpeed={100}
                    backSpeed={70}
                    loop={true}
                    >
                    </Typed>
                    </p>
                </div>
                <p className="navbarLinks"><a href="https://sih.gov.in/sih2023PS" target="_blank">SIH</a></p>
                <Button variant="contained" id="LPSignIn">Logout</Button>
                <Button variant="outlined" id="LPSignUp">Contibute</Button>
            </div>
            <div id="small-fp-text"><p>A Submission for SIH 2023</p></div>
            <div className="largeTextDiv" data-aos="fade-up">
                <p className="largeText">+_+</p>
                <p className="largeText">CHECK.U-R-L</p>
            </div>
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
import React from 'react';
import { useState, useEffect, useRef } from "react";
import { colors, fonts, shadows } from "../../../utils/CSS";
import { Button } from 'reactstrap';

const Education = props => {

    return(
        <div style={styles.row} className="row mb-3">
            <div  className="col-4 mt-2">
                <h5 className="text-center">SMU</h5>
                <a href="https://techbootcamps.smu.edu/coding/">
                    <img className="card-img" alt="smu-logo" 
                        src="https://www.smu.edu/~/media/Site/DevelopmentExternalAffairs/MarketingCommunications/Logos/smu/SMULogoRrgb"  />
                </a>
                <p className="text-center">
                    <em>MERN Stack 2019</em>
                </p>
            </div>

            <div className="col-4 mt-2">
                <h5 className="text-center">TTS</h5>
                <a href="https://www.techtalentsouth.com/">
                    <img  className="card-img" src="./images/tts.png" alt="TTS" />
                </a>
                <p className="text-center">
                    <em>Java Spring 2019</em>
                </p>
            </div>

            <div className="col-6" style={{display: "flex", justifyContent: "space-around"}}>
                <Button style={styles.btn} onClick={props.showResumes}>See Résumé</Button>
                <Button style={styles.btn} onClick={props.showDLoptions}>Download Résumé</Button>
            </div>
        </div>
    );
};

const styles = {
    row:{
        justifyContent:"space-around",
        margin: "auto auto",
        fontFamily: fonts.secondary,
        fontSize: "1.5rem",
        color: colors.darkGrey
    },
    btn: {
        border: "none",
        margin: "10px",
        color: colors.light,
        boxShadow: shadows.div3,
        backgroundColor: colors.accent
    }
}

export default Education;

import React from 'react';
import { Jumbotron } from "reactstrap";
import CSS from "../../../utils/CSS";

// Simple jumborton that can take in prop styles and has classNames for easy css

const FlexTron = (props) => {
    return (
        <Jumbotron className={props.className} style={props.style}>
            <div style={props.titleStyle}>
                <h1 style={styles.title}>{props.title}</h1>
                <h5 style={{...styles.sub, ...props.subStyle}}>{props.subtitle}</h5>
            </div>
            <hr />
            <div style={props.contentStyle}>
                {props.children}
            </div>
        </Jumbotron>
    )
};

const styles = {
    title:{
        fontSize: "2.5em",
        fontFamily: CSS.fonts.primary,
        color: CSS.colors.darkGrey,
        textShadow: CSS.shadows.text2
    },
    sub: {
        color: CSS.colors.darkGrey,
        fontFamily: CSS.fonts.secondary,
        borderColor: CSS.colors.darkGrey
    }
};

export default FlexTron;
import React from 'react';
import { Button } from 'reactstrap';
import CSS from "../../../utils/CSS";

export function HomeLink() {
    return(
        <a href="/">
                <Button style={styles.btnStyle}>
                <img src="./images/Home.png" alt="home icon" />
            </Button>
        </a>
    );
};

export function HackathonLink(){
    return(
        <a href="/hackathon">
            <Button style={styles.btnStyle}>
                <img style={{backgroundColor:"rgb(141,140,138, .7)", borderRadius:"2px"}} src="./images/Hack_Icon.png" alt="hackathon icon" />
            </Button>
        </a>
    );
};

export function BlogLink (){
    return(
        <a href="/blog">
            <Button style={styles.btnStyle}>
                <img src="./images/blog_icon.png" alt="blog icon" />
            </Button>
        </a>
    );
}

export function MedArtLink(){
    return(
        <Button style={styles.btnStyle}>
            <img src="./images/MediumArt.png" alt="medium article icon" />
        </Button>
    )
}

export function TrilogyArtLink(){
    return(
        <Button style={styles.btnStyle}>
            <img src="./images/TrilogyArt.png" alt="medium article icon" />
        </Button>
    )
}


const styles = {
    btnStyle:{
        boxShadow: CSS.shadows.div2,
        backgroundColor: CSS.colors.accent,
        border: "none"
    }
}
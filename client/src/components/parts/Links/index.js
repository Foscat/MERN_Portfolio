import React from 'react';
import { Button } from 'reactstrap';
import { colors, shadows} from "../../../utils/CSS";

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
        <a href="https://austinstartups.com/21-teams-gather-at-capital-factory-to-hack-daimler-north-americas-voice-technology-for-truck-77ed19862592">
            <Button style={styles.btnStyle}>
                <img src="./images/MediumArt.png" alt="medium article icon" />
            </Button>
        </a>
    )
}

export function TrilogyArtLink(){
    return(
        <a href="https://www.trilogyed.com/blog/a-friendship-yields-a-championship-two-smu-coding-boot-camp-students-win-major-hackathon/">
            <Button style={styles.btnStyle}>
                <img src="./images/TrilogyArt.png" alt="medium article icon" />
            </Button>
        </a>
    )
}


const styles = {
    btnStyle:{
        boxShadow: shadows.div2,
        backgroundColor: colors.accent,
        border: "none",
        margin: 5
    }
}
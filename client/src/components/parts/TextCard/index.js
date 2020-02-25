import React from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle } from 'reactstrap';
import { colors, fonts, shadows } from "../../../utils/CSS";

// General use card for wrapping around other components and give clean presentaiton
// Takes is style props to give ease of css 

const TextCard = (props) => {
    return(
        <Card className={props.className} style={props.style}>
        
            <CardHeader style={{backgroundColor:"transparent"}}>

                <CardTitle>
                    <h4 style={{...styles.title, ...props.titleStyle}}>{props.title}</h4>
                </CardTitle>

                <CardSubtitle>
                    <h6 style={{...styles.subtitle, ...props.subStyle}}>{props.subtitle}</h6>
                </CardSubtitle>

            </CardHeader>

            <CardBody>

                <div style={props.contentStyle}>
                    {props.children}
                </div>
    
            </CardBody>

        </Card>
    )
}

const styles = {
    title: {
        fontFamily: fonts.primary,
        color: colors.darkGrey,
        textShadow: shadows.text2,
        // fontWeight: 800,
        fontSize: "2rem"
    },
    subtitle: {
        fontFamily: fonts.secondary,
        color: colors.darkGrey,
        fontWeight: 600,
        fontSize: "1.2rem"
    }
}

export default TextCard;
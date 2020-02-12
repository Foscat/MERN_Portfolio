import React from 'react';
import { Table } from 'reactstrap';
const front = ["HTML","CSS","Javascript", "jQuery", "React.js", "Bootstrap"];
const back = ["Node.js", "Express.js", "MongoDB", "Mongoose","JsonWebToken", "Bcrypt"];
const CSS = require("../../../utils/CSS");

const SkillTable = props => {
    return(
        <Table style={props.style}>
            <thead>
                <tr>
                    <th style={{border:"none"}}>
                        <h1 style={styles.caption}>Skills</h1>
                    </th>

                </tr>

                <tr>
                    <th style={styles.sub}>Front End</th>
                    <th style={styles.sub}>Back End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul style={{listStyle:"none"}}>
                            {front.length ? front.map((skill,i) =>{
                                return <li key={i} style={styles.item}><h6>{skill}</h6></li>
                            }) : null }
                        </ul>
                    </td>

                    <td>
                        <ul style={{listStyle:"none"}}>
                            {back.length ? back.map((skill,i) =>{
                                return <li key={i} style={styles.item} ><h6>{skill}</h6></li>
                            }) : null }
                        </ul>
                    </td>

                </tr>
            </tbody>
        </Table>
    )
}

const styles = {
    caption:{
        fontSize: "2.5em",
        fontFamily: CSS.fonts.primary,
        color: CSS.colors.darkGrey,
        textShadow: CSS.shadows.text2
    },
    sub:{
        paddingLeft: "5%",
        color: CSS.colors.darkGrey,
        fontFamily: CSS.fonts.secondary,
        borderColor: CSS.colors.darkGrey
    },
    item: {
        fontFamily: CSS.fonts.secondary,
        color: CSS.colors.darkGrey
    }
}

export default SkillTable;
import React from 'react';
import { Table } from 'reactstrap';
const skills = [ ["HTML", "Node.js"], ["CSS","Express.js"], ["jQuery","MongoDB"],["React.js","Mongoose"],["Bootstrap","JsonWebToken"],["","bCrypt"]];
const { colors, fonts, shadows } = require("../../../utils/CSS");

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
                {skills.length ? skills.map((set,i)=> {
                    return(
                        <tr key={i} style={styles.sub}>
                            <td>{set[0]}</td>
                            <td>{set[1]}</td>
                        </tr>
                    )
                }):null}
            </tbody>
        </Table>
    )
}

const styles = {
    caption:{
        fontSize: "2.5em",
        fontFamily: fonts.primary,
        color: colors.darkGrey,
        textShadow: shadows.text2
    },
    sub:{
        color: colors.darkGrey,
        fontFamily: fonts.secondary,
        borderColor: colors.darkGrey
    },
    item: {
        fontFamily: fonts.secondary,
        color: colors.darkGrey
    }
}

export default SkillTable;
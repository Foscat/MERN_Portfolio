import React from 'react';
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { colors, fonts, shadows } from "../../../utils/CSS";

const ConForm = props => {
    return(
        <Form style={styles.form}>
            <FormGroup>
                <Label style={styles.label} for="senderName">Name</Label>
                <Input style={styles.input} type="text" name="senderName" id="senderName" placeholder="Bill Gates" 
                    onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} for="senderConInfo">Best contact info</Label>
                <Input style={styles.input} type="text" name="senderConInfo" id="senderConInfo" placeholder="642-767-6380 or billGates@icloud.com"
                    onChange={props.handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label style={styles.label} for="senderMessage">What you have to say</Label>
                <Input style={styles.input} type="textarea" name="senderMessage" id="senderMessage" placeholder="By gosh this is the best dang website I ever been to!"
                    onChange={props.handleInputChange} />
            </FormGroup>

            <Button style={styles.btn} onClick={props.handleFormSubmit}>
                Submit
            </Button>

        </Form>
    )
};

const styles = {
    form: {
        fontFamily: fonts.secondary
    },
    btn: {
        marginTop: "5px",
        fontFamily: fonts.primary,
        backgroundColor: colors.accent,
        color: colors.light,
        boxShadow: shadows.div3
    },
    label: {
        color: colors.darkGrey,
        fontWeight: 600
    },
    input: {
        // backgroundColor: colors.accent,
        color: colors.darkGrey,
        borderColor: colors.light,
        boxShadow: shadows.div2
    }
}

export default ConForm;
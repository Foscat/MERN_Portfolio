import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import CSS from "../../../utils/CSS";

const EditBlog = props => {
    return(
        <Form style={styles.form} className={`mx-auto ${props.className}`}>
            <FormGroup>
                <Label style={styles.label} for="editTitle">Title</Label>
                <Input style={styles.input} type="text" name="editTitle" id="editTitle" placeholder="Why Java is lame" 
                    onChange={props.handleInputChange} defaultValue={props.blog.title} />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} for="dbKeyInput">DB Key</Label>
                <Input style={styles.input} type="text" name="edit_dbKeyInput" id="dbKeyInput" 
                    onChange={props.handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label style={styles.label} for="editBody">What you have to say</Label>
                <Input style={styles.input} rows="4" type="textarea" name="editBody" id="editBody" 
                    placeholder="Why cant you have an array you can iterate over, push and pop values from in one data type? Is that so much to ask for?"
                    onChange={props.handleInputChange} defaultValue={props.blog.body} />
            </FormGroup>

            <FormGroup tag="fieldset">
                <legend>Publish Blog?</legend>
                <FormGroup check>
                    <Label style={styles.label} check>
                        <Input  type="radio" name="editShow" onClick={() => props.handleRadioSelect(true)} />{' '}
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label style={styles.label} check>
                        <Input type="radio" name="editShow" onClick={() => props.handleRadioSelect(false)} />{' '}
                        No
                    </Label>
                </FormGroup>

            </FormGroup>

            <Button style={styles.btn} onClick={() => props.handleBlogSubmit(props.blog._id)}>
                Send
            </Button>
        </Form>
    );
};

const styles = {
    form: {
        fontFamily: CSS.fonts.secondary,
        width:"100%",
        backgroundColor: CSS.colors.light,
        padding: "1rem",
        borderRadius: "7px"
    },
    btn: {
        marginTop: "5px",
        fontFamily: CSS.fonts.primary,
        backgroundColor: CSS.colors.accent,
        color: CSS.colors.light,
        boxShadow: CSS.shadows.div3
    },
    label: {
        color: CSS.colors.darkGrey,
        fontWeight: 600
    },
    input: {
        // backgroundColor: CSS.colors.accent,
        color: CSS.colors.darkGrey,
        borderColor: CSS.colors.light,
        boxShadow: CSS.shadows.div2
    }
}

export default EditBlog;
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { fonts, shadows, colors } from "../../../utils/CSS";

const BlogForm = props => {
    return(
        <Form style={styles.form} className={`mx-auto ${props.className}`}>
            <FormGroup>
                <Label style={styles.label} for="blogTitle">Title</Label>
                <Input style={styles.input} type="text" name="blogTitle" id="blogTitle" placeholder="Why Java is lame" 
                    onChange={props.handleInputChange} />
            </FormGroup>
            <FormGroup>
                <Label style={styles.label} for="dbKeyInput">DB Key</Label>
                <Input style={styles.input} type="text" name="dbKeyInput" id="dbKeyInput" 
                    onChange={props.handleInputChange} />
            </FormGroup>

            <FormGroup>
                <Label style={styles.label} for="blogContent">What you have to say</Label>
                <Input style={styles.input} rows="4" type="textarea" name="blogContent" id="blogContent" 
                    placeholder="Why cant you have an array you can iterate over, push and pop values from in one data type? Is that so much to ask for?"
                    onChange={props.handleInputChange} />
            </FormGroup>

            <FormGroup tag="fieldset">
                <legend>Publish Blog?</legend>
                <FormGroup check>
                    <Label style={styles.label} check>
                        <Input  type="radio" name="showBlog" onClick={() => props.handleRadioSelect(true)} />{' '}
                        Yes
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label style={styles.label} check>
                        <Input type="radio" name="showBlog" onClick={() => props.handleRadioSelect(false)} />{' '}
                        No
                    </Label>
                </FormGroup>

            </FormGroup>

            <Button style={styles.btn} onClick={() => props.handleBlogSubmit()}>
                Send
            </Button>
        </Form>
    );
};

const styles = {
    form: {
        fontFamily: fonts.secondary,
        width:"70%",
        backgroundColor: colors.light,
        padding: "1rem",
        borderRadius: "7px"
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

export default BlogForm;
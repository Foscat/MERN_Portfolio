import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { fonts } from "../../../utils/CSS";

const  ProjectSelect = props => {
    const spacer ={margin:"1em 0"}
    return(
        <Form className={props.className} style={{fontFamily:fonts.secondary, fontSize: "1.1em", width:"100%"}}>
            <FormGroup tag="fieldset">
                <FormGroup style={spacer} check>
                    <Label check>
                        <Input type="radio" onClick={() => props.handleRadioSelect(0)} name="pRadio" />{' '}
                        NAWS
                    </Label>
                </FormGroup>
                <FormGroup style={spacer} check>
                    <Label check>
                        <Input type="radio" name="pRadio" onClick={() => props.handleRadioSelect(1)} />{' '}
                        "Friend" Finder
                    </Label>
                </FormGroup>
                <FormGroup style={spacer} check>
                    <Label check>
                        <Input type="radio" name="pRadio" onClick={() => props.handleRadioSelect(2)} />{' '}
                        MERN App Template
                    </Label>
                </FormGroup>
                <FormGroup style={spacer} check>
                    <Label check>
                        <Input type="radio" name="pRadio" onClick={() => props.handleRadioSelect(3)} />{' '}
                        MERN App Template Bcrypt+JWT
                    </Label>
                </FormGroup>
            </FormGroup>
        </Form>
    )
}

export default ProjectSelect;
import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { fonts } from "../../../utils/CSS";

const  ProjectSelect = props => {
    return(
        <Form className={props.className} style={{fontFamily:fonts.secondary, fontSize: "1.1em"}}>
            <FormGroup tag="fieldset">
                <FormGroup check>
                    <Label check>
                        <Input type="radio" onClick={() => props.handleRadioSelect("front")} name="pRadio" />{' '}
                        Front End
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="pRadio" onClick={() => props.handleRadioSelect("back")} />{' '}
                        Back End
                    </Label>
                </FormGroup>
                <FormGroup check>
                    <Label check>
                        <Input type="radio" name="pRadio" onClick={() => props.handleRadioSelect("full")} />{' '}
                        Full Stack
                    </Label>
                </FormGroup>
            </FormGroup>
        </Form>
    )
}

export default ProjectSelect;
import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const DBKeyInput = props => {
    return(
        <Form>
            <FormGroup>
                <Label for="dbKeyInput">DB Key</Label>
                <Input type="text" name="dbKeyInput" id="dbKeyInput" 
                    onChange={props.handleInputChange} />
            </FormGroup>

            <Button onClick={props.handleSubmit}>
                Retry
            </Button>
        </Form>
    )
};

export default DBKeyInput;
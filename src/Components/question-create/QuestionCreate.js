import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './QuestionCreate.css';
import QuestionForm from "../question-form/QuestionForm";

class QuestionCreate extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: false };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <div className='my-3'>
                <Button color="primary" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Create Question</Button>
                <Collapse isOpen={this.state.collapse}>
                    <Card>
                        <CardBody>
                            <QuestionForm />
                        </CardBody>
                    </Card>
                </Collapse>
            </div>
        );
    }
}

export default QuestionCreate;
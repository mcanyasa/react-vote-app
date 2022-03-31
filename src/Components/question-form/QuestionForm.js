import React, { Component } from "react";
import { Col, Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import axios from "axios/index";
import { API_URL } from "../../constants";
import { buildChoices } from "../utils";

import "./QuestionForm.css";

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namequestion: "",
      choices: "",
      displayerror: false,
      displaysuccess: false,
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeChoises = this.handleChangeChoises.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ namequestion: event.target.value });
  }

  handleChangeChoises(event) {
    this.setState({ choices: event.target.value });
  }

  handleSubmit(event) {
    const choises = buildChoices(this.state.choices);
    const choisesObject ='{"question": "' + this.state.namequestion + '", "choices": ' + choises +"}";

    console.log("choisesObject",choisesObject);

    axios({
        method: 'post',
        url: `${API_URL}questions?page=1`,
        data: choisesObject,
        headers: {"Content-Type": "application/json",}   
      })
      .then((response) => {
        this.setState({
          displaysuccess: true,
          displayerror: false,
        });
        setTimeout(function () {
          window.location.href = "/";
        }, 3000);
      })
      .catch((error) => {
        console.info(error);
        this.setState({
          displayerror: true,
          displaysuccess: false,
        });
      });
    event.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {this.state.displaysuccess && (
          <Alert color="success">
            The new questions were created successfully!
          </Alert>
        )}
        {this.state.displayerror && (
          <Alert color="danger">
            There was an error! The new question was not created!
          </Alert>
        )}

        <FormGroup row>
          <Label for="questionname" sm={2}>
            New Question
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="questionname"
              id="questionname"
              placeholder="Type your new question"
              value={this.state.namequestion}
              onChange={this.handleChangeName}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="choiseslist" sm={2}>
            Choices
          </Label>
          <Col sm={10}>
            <Input
              type="textarea"
              name="text"
              id="choiseslist"
              placeholder="Please list the choices follow by a coma. Example: X, Y, Z"
              value={this.state.choices}
              onChange={this.handleChangeChoises}
            />
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button>Add</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default QuestionForm;

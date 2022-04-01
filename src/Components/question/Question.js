import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';


import './Question.css';

class Question extends Component {

    render() {
        return (
          <Col className="question" xs="4" sm="3">
          <Link to={this.props.questionData.url}>
              <h4><strong>{this.props.questionData.question}</strong></h4>
              <p><strong>#choises</strong>: {this.props.questionData.choices.length}</p>
          </Link>
        </Col>
        );
    }
}

export default Question;

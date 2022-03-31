import React, { Component } from "react";
import { Button, ListGroup, Alert, Progress } from "reactstrap";
import axios from "axios";
import { calculatePercent, totalVotes, choiceNumber } from "../utils";

import Header from "../header/Header";
import { API_URL } from "../../constants";

import "./QuestionDetails.css";

class QuestionDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionName: "",
      cSelected: [],
      choicesList: [],
      totalVotes: 0,
      displayerror: false,
      displaysuccess: false,
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  saveChoice = () => {
    let choice_id = this.state.rSelected;
    if (choice_id) {
      console.info(choice_id);
      const url = new URL(window.location.href);
      const question_id = url.pathname.replace("/questions/", "");
      axios
        .post(`${API_URL}questions/${question_id}/choices/${choice_id}`)
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
    } else {
      console.info("you have to set a choice!");
      this.setState({
        displayerror: true,
        displaysuccess: false,
      });
    }
  };

  componentDidMount() {
    const url = new URL(window.location.href);
    const question_id = url.pathname.replace("/questions/", "");

    axios
      .get(`${API_URL}questions/${question_id}`)
      .then((response) => {
        this.setState({
          questionName: response.data.question,
          choicesList: response.data.choices,
          totalVotes: totalVotes(response.data.choices),
        });
      })
      .catch((error) => {
        console.info(error);
      });
  }

  render() {
    return (
      <section className="questionsdetail">
        <Header title="Questions Details" />
        {this.state.displaysuccess && (
          <Alert color="success">Your vote has been registered!</Alert>
        )}
        {this.state.displayerror && (
          <Alert color="danger">Your vote has NOT been registered!</Alert>
        )}

        <h5 className="my-3">
          <strong>Question</strong>: {this.state.questionName}{" "}
        </h5>

        <ListGroup>
          <div className="header-qd btn">
            <span>
              <strong>Choice</strong>
            </span>
            <span>
              <strong>Votes</strong>
            </span>
            <span>
              <strong>Percent %</strong>
            </span>
          </div>
          {this.state.choicesList.map((data) => {
            let numberId = choiceNumber(data.url);
            let percent = calculatePercent(data.votes, this.state.totalVotes);
            return (
              <Button
                key={data.url}
                color="danger"
                onClick={() => this.onRadioBtnClick(numberId)}
                active={this.state.rSelected === numberId}
              >
                <span>{data.choice}</span> <span>{data.votes}</span>
                <span>
                  <div className="text-center">{percent} %</div>
                  <Progress color="success" value={Math.round(percent)} />
                </span>
              </Button>
            );
          })}
        </ListGroup>
        <Button color="primary" onClick={() => this.saveChoice()}>
          Save
        </Button>
      </section>
    );
  }
}

export default QuestionDetails;

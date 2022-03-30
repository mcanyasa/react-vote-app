import React, { Component } from "react";
import "./App.css";

import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QuestionList from "./Components/question-list/question-list";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Router>
              <Routes>
                <Route path="/" element={<QuestionList/>} />
              </Routes>
          </Router>
        </Container>
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";

import { Container } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import QuestionList from "./Components/question-list/QuestionList";
import QuestionDetails from "./Components/question-details/QuestionDetails";

function App() {
  return (
    <div className="App">
      <Container className="my-3">
        <Router>
          <Routes>
            <Route
              exact
              path="/questions/:question_id"
              element={<QuestionDetails />}
            />
            <Route path="/" element={<QuestionList />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;

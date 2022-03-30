import React, { Component } from 'react';
import { Row,Container } from 'reactstrap';
import axios from 'axios';

import { API_URL } from '../../constants';
import Question from "../question/question";
import Header from "../header/Header";

import './question-list.css';


class QuestionList extends Component {
    state = {
      list: [],
    };

    componentDidMount() {
      axios.get(`${API_URL}questions`)
      .then(response => {
        this.setState({
          list: response.data,
        })
      })
      .catch(error => {
        console.info(error);
      });

    }

    render() {
        return (
            <div>
                <Header title="Questions" />
                <section className="App-intro my-3">
                <Container>
                    <Row className='d-flex justify-content-center'>
                        {
                          this.state.list.map(data =>
                            <Question questionData={data} key={data.url}/>)
                        }
                    </Row>
                </Container>
                </section>
            </div>

        );
    }
}

export default QuestionList;

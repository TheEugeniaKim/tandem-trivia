import React, {useEffect, useState} from 'react'
import reducer from '../Redux/reducer'
import {Jumbotron, Container, ListGroup, Button, Form, Row, Col} from 'react-bootstrap'
import classNames from "classnames"
import Question from '../Components/Question'

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

function QuizContainer({question, nextQuestion}){
  if (!question) return "Loading...";

  const answers = [question.correct_answer, ...question.incorrect_answers];

  const [submittedIndex, setSubmittedIndex] = useState(0);
  const [shuffledAnswers, setShuffledAnswers] = useState(shuffle(answers));

  const correctAnswerIndex = shuffledAnswers.indexOf(question.correct_answer);
  const submitted = submittedIndex !== undefined;

  useEffect(() => {
    setSubmittedIndex(undefined);
    setShuffledAnswers(shuffle(answers))
  }, [question])

  const submitAnswer = index => {
    if (!submitted) {
      setSubmittedIndex(index)
    }
  }
  // return props.questions[0].map(obj => {
    return (
      <Jumbotron>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1
              className="mb-3"
              dangerouslySetInnerHTML={{ __html: question.question }}
            />
            <ListGroup as="ul">
              {shuffledAnswers.map((answer, index) => {
                return (
                  <ListGroup.Item
                    key={answer}
                    action={!submitted}
                    as="button"
                    className={classNames({
                      submitted: submitted
                    })}
                    tabindex={submitted ? "-1" : "0"}
                    variant={classNames({
                      success: submitted && index === correctAnswerIndex,
                      danger:
                        submitted &&
                        index !== correctAnswerIndex &&
                        submittedIndex === index
                    })}
                    onClick={() => submitAnswer(index)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                );
              })}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      {
        submitted && (
        <Button className="mt-3" variant="primary" onClick={nextQuestion}>
          Next
        </Button>)
      }
    </Jumbotron>
  )
}

export default QuizContainer
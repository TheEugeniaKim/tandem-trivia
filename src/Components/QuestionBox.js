import { Button, ListGroup } from "react-bootstrap";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useQuiz } from "../Redux/reducer";

export default setSubmittedAnswers => {
  const { questionIndex, questions, dispatch, nextQuestion } = useQuiz();
  const question = questions[questionIndex];

  const [submittedIndex, setSubmittedIndex] = useState();
  const correctAnswerIndex = question.answers.indexOf(question.correct);
  const submitted = submittedIndex !== undefined; // submitted index 0 = false 

  useEffect(() => {
    setSubmittedIndex(undefined);
  }, [question]);

  const submitAnswer = index => {
    if (!submitted) {
      setSubmittedIndex(index);
      dispatch({
        type: "ANSWER_SUBMITTED",
        submittedAnswer: question.answers[index]
      });
    }
  };

  return (
    <>
      <h1
        className="mb-3"
        dangerouslySetInnerHTML={{ __html: question.question }}
      />
      <ListGroup as="ul">
        {question.answers.map((answer, index) => {
          return (
            <ListGroup.Item
              key={answer}
              action={!submitted}
              as="button"
              className={classNames({
                submitted: submitted
              })}
              tabIndex={submitted ? "-1" : "0"}
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
      {submitted && (
        <Button className="mt-3" variant="primary" onClick={nextQuestion}>
          Next
        </Button>
      )}
    </>
  );
};

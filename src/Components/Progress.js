import React, { useState, useEffect } from "react";
import {ProgressBar} from "react-bootstrap";
import { useQuiz } from "../Redux/reducer";

function Progress() {
  const {questions, submittedAnswers} = useQuiz()

  return (
    <ProgressBar>
      {submittedAnswers.map((answer, index) => {
        return (<ProgressBar
          now={10}
          variant={
            questions[index].correct === answer ? "success" : "danger"
          }
          key={index}
          animated={true}
        />);
      })}
    </ProgressBar>
  );
}

export default Progress;

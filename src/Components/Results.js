import React, {useState, useEffect} from "react";
import { useQuiz } from "../Redux/reducer";

function Results({answers}) {
  const {questions, submittedAnswers} = useQuiz()
  const [numCorrect, setNumCorrect] = useState(null)

  useEffect(() => {
    let numCorrect = 0
    const correctArr = questions.map(question => question.correct)
    for (let i=0; i<10; i++){
      if (correctArr[i] === submittedAnswers[i]){
        numCorrect++
      }
    }    
    setNumCorrect(numCorrect)
  }, [submittedAnswers])

  return (
    <div>
      <h1>Results:</h1>
      <h2>You got {numCorrect}/10 Correct</h2>
    </div>
  );
}
export default Results;

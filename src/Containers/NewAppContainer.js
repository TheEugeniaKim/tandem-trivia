import React, { useEffect, useState } from "react";
import '../App.css'
import { useQuiz } from "../Redux/reducer";
import Navbar from "../Components/NavBar";
import Progress from "../Components/Progress";
import Jumbotron from "../Components/Jumbotron";
import Results from "../Components/Results";
import QuestionBox from "../Components/QuestionBox";


function NewAppContainer() {
  // const [questionIndex, setQuestionIndex] = useState(0);
  // const [questions, setQuestions] = useState([]);

  // const nextQuestion = () => setQuestionIndex(questionIndex => questionIndex + 1)

  // useEffect(() => {
  //   setQuestions(data)
  // }, []);
  const { questionIndex, questions, dispatch, fetchQuiz } = useQuiz();
  const quizComplete = questionIndex === questions.length;
  const loading = questions.length === 0; // das in state vllt

  useEffect(fetchQuiz, []);
  return (
    <div className="App">
      <Navbar />
      <Progress />
      <Jumbotron>
        {loading && "Loading..."}
        {!loading && quizComplete && <Results />}
        {!loading && !quizComplete && <QuestionBox />}
      </Jumbotron>
    </div>

    
  );
}

export default NewAppContainer
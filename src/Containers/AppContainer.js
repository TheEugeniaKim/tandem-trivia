import React, { useEffect, useState } from "react";
import '../App.css'
import { useQuiz } from "../Redux/reducer";
import Navbar from "../Components/NavBar";
import Progress from "../Components/Progress";
import Jumbotron from "../Components/Jumbotron";
import Results from "../Components/Results";
import QuestionBox from "../Components/QuestionBox";


function AppContainer() {
  const { questionIndex, questions, dispatch, fetchQuiz } = useQuiz();
  const quizComplete = questionIndex === questions.length;
  const loading = questions.length === 0; 

  useEffect(fetchQuiz, []);
  return (
    <div className="App">
      <Navbar />
      <Progress />
      <Jumbotron>
        {loading && "Loading..."}
        {!loading && quizComplete && <Results  />}
        {!loading && !quizComplete && <QuestionBox />}
      </Jumbotron>
    </div>

    
  );
}

export default AppContainer
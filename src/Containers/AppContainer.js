import React, { useEffect } from "react";
import '../App.css'
import { useQuiz } from "../Redux/reducer";
import NavBar from "../Components/NavBar";
import Progress from "../Components/Progress";
import Jumbotron from "../Components/Jumbotron";
import Results from "../Components/Results";
import QuestionBox from "../Components/QuestionBox";
import DirectionsModal from '../Components/DirectionsModal';

function AppContainer(props) {
  const { questionIndex, questions, fetchQuiz, showModal, toggleDirectionModal } = useQuiz();
  const quizComplete = questionIndex === questions.length;
  const loading = questions.length === 0; 

  useEffect(() => fetchQuiz(),[]);
  
  return (
    <div className="App">
      <NavBar />
      <DirectionsModal 
        show={showModal}
        onHide={toggleDirectionModal} 
      />
      <Progress />
      <Jumbotron>
        {loading && "Loading..."}
        {!loading && quizComplete && <Results  />}
        {!loading && !quizComplete && <QuestionBox />}
      </Jumbotron>
    </div>

    
  );
}

export default AppContainer;
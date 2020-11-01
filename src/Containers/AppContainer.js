import React, { useEffect, useState } from "react";
import '../App.css'
import { useQuiz } from "../Redux/reducer";
import Navbar from "../Components/NavBar";
import Progress from "../Components/Progress";
import Jumbotron from "../Components/Jumbotron";
import Results from "../Components/Results";
import QuestionBox from "../Components/QuestionBox";
import DirectionsModal from '../Components/DirectionsModal';

function AppContainer() {
  const [modalShow, setModalShow] = useState(true);
  const { questionIndex, questions, dispatch, fetchQuiz } = useQuiz();
  const quizComplete = questionIndex === questions.length;
  const loading = questions.length === 0; 

  useEffect(() => {
    console.log(modalShow)
    fetchQuiz()
  }, []);
  
  return (
    <div className="App">
      <DirectionsModal 
        show={modalShow}
        onHide={() => setModalShow(false)} 
      />
      <Navbar setModalShow={setModalShow} />
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
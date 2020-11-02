import React from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { useQuiz } from "../Redux/reducer";

function NavBar(props){
  const { questionIndex, questions, toggleDirectionModal } = useQuiz();
  const questionNumber = questionIndex + 1;
  const quizComplete = questionNumber > questions.length;

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Text>
        {quizComplete ? "Quiz complete!" : `Question ${questionNumber}/10`}
      </Navbar.Text>

      <div 
        className="justify-content-end" 
        onClick={toggleDirectionModal}
      >
        <Navbar.Brand>
          Tandem Trivia 
        </Navbar.Brand>
        <Image src="/logo192.png" className="logo" roundedCircle />
      </div>
    </Navbar>
  )
}

export default NavBar;
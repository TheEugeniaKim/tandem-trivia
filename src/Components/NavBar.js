import React from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { useQuiz } from "../Redux/reducer";

function NavBar(){
  const { questionIndex, questions, toggleDirectionModal } = useQuiz();
  const questionNumber = questionIndex + 1;
  const quizComplete = questionNumber > questions.length;

  return (
    <Navbar bg="dark justify-content-between" expand="lg" variant="dark">
      <div 
        onClick={toggleDirectionModal}
      >
        <Image src="/logo192.png" className="logo" roundedCircle />
        <Navbar.Brand>
          Tandem Trivia 
        </Navbar.Brand>
      </div>

      <Navbar.Text className="justify-content-end">
      {quizComplete ? "Quiz complete!" : `Question ${questionNumber}/10`}
      </Navbar.Text>
    </Navbar>

  )
}

export default NavBar;
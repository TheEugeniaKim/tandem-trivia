import React from 'react'
import { Navbar, Image } from 'react-bootstrap'
import { useQuiz } from "../Redux/reducer";


function NavBar(props){
  const { questionIndex, questions } = useQuiz();
  const questionNumber = questionIndex + 1;
  const quizComplete = questionNumber > questions.length;
  
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Text>
        {quizComplete ? "Quiz complete!" : `Question ${questionNumber}/10`}
      </Navbar.Text>
      <Navbar.Text onClick={() => props.setModalShow(true)} > 
        Directions
      </Navbar.Text>
      <Navbar.Text> 
        Tandem Trivia 
      </Navbar.Text>
      <Image src="/logo192.png" className="logo" roundedCircle />
    </Navbar>
  )
}

export default NavBar
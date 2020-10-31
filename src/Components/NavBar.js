import React from 'react'
import { Navbar } from 'react-bootstrap'
import { useQuiz } from "../Redux/reducer";


function NavBar(){
  const { questionIndex, questions } = useQuiz();
  const questionNumber = questionIndex + 1;
  const quizComplete = questionNumber > questions.length;
  
  return (
    // <div>
    //   <Nav className="justify-content-end" activeKey="/home">
    //     <Nav.Text>
          
    //     </Nav.Text>
    //     <Nav.Item>
    //       <Nav.Link href="/home">
    //         <img src="/public/logo192.png" alt="logo"></img>
    //       </Nav.Link>
    //     </Nav.Item>
        
    //   </Nav>
    // </div>

    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Text>
        {quizComplete ? "Quiz complete!" : `Question ${questionNumber}/10`}
      </Navbar.Text>
    </Navbar>
 
  )
}

export default NavBar
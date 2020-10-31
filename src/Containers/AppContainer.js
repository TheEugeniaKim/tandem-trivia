import React, { useReducer, useState, useEffect } from 'react'
import NavBar from '../Components/NavBar'
import reducer from '../Redux/reducer'
import { Container, Row, Col, Nav } from 'react-bootstrap'
import data from '../Apprentice_TandemFor400_Data.json'


function AppContainer(){
  const [questionIndex, setQuestionIndex] = useState(0)
  const [questions, setQuestions] = useState([])
  const nextQuestion = () => setQuestionIndex(questionIndex => questionIndex + 1)
  // const defaultState = {
  //   questions: [data],
  //   answeredQuestins: [],
  //   numCorrect: 0,
  //   numAnswered: 0
  // }
  // const [state, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    setQuestions(data)
  }, [])
  return (
    <div className="App">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Text>
          Question {questionIndex + 1}/10
        </Nav.Text>
        <Nav.Item>
          <Nav.Link href="/home">
            <img src="/public/logo192.png" alt="logo"></img>
          </Nav.Link>
        </Nav.Item>
        
      </Nav>
     



      {/* <Container fluid >
        <Row>
          <Container>
            <h1>
              This is the information Section (Heading 1)
            </h1>
            
            <h2>
              Hello and Welcome to Tandem Trivia (Heading 2)
            </h2>

            <h4>
              Click the button below to get started (Heading 4)
            </h4>

            <h5>Score: {state.numCorrect}/10</h5>
          </Container>
        </Row>
        <Row>
          <Container>
            <QuizContainer questions={state.questions} />
          </Container>
        </Row>
      </Container> */}
    </div>
  )
}

export default AppContainer
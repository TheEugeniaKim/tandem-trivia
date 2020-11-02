import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContainer from './Containers/AppContainer'
import { QuizProvider } from './Redux/reducer'

function App() {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
        <QuizProvider>
          <AppContainer modalShow={modalShow} setModalShow={setModalShow} />
        </QuizProvider>
    </div>
  )
}

export default App

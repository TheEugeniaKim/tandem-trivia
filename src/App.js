import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContainer from './Containers/AppContainer'
import { QuizProvider } from './Redux/reducer'

function App() {
  return (
    <div>
        <QuizProvider>
          <AppContainer />
        </QuizProvider>
    </div>
  )
}

export default App

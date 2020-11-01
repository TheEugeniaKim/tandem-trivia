import React from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import AppContainer from './Containers/AppContainer'
import { QuizProvider } from './Redux/reducer'

function App() {
  return (
    <div>
        {/* <AppContainer /> */}
        <QuizProvider>
          <AppContainer />
        </QuizProvider>
    </div>
  )
}

export default App

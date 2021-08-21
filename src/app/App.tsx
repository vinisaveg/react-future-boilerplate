import React, { FunctionComponent } from 'react'

import Logo from '../components/Logo'
import './app.scss'

const App: FunctionComponent = () => {
  return (
    <div className="app">
      <Logo />
      <h1>Reactjs Future Boilerplate</h1>
    </div>
  )
}

export default App

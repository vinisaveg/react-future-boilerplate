import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './app/App'
import './styles/global.scss'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(<App />)

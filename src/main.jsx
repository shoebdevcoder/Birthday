// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// import { HashRouter } from 'react-router-dom'
import { HashRouter as Router } from 'react-router-dom'
import "../src/assets/styles/style.scss"
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
)

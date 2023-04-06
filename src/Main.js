import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Contatore from './Contatore'
import Login from './Login'

const Main = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element = {<Contatore/>} />
                <Route path="/login" element = {<Login/>} />

            </Routes>
        </Router>
    </div>
  )
}

export default Main
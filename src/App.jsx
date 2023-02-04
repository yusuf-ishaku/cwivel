import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom';
import { Navbar } from './assets/components/navbar';
import { Home } from "./pages/home"
import { Dashboard } from './pages/dashboard';
import { Users } from './pages/users';
import { Chat } from './pages/chat';
import { Bookings } from './pages/bookings';



function App() {
  return (
    <div className="App px-16">
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/chat' element = {<Chat/>}></Route>
          <Route path='/dashboard' element ={<Dashboard/>}></Route>
          <Route path='/users' element ={<Users/>}/>
          <Route path='/bookings' element = {<Bookings/>}/>
          <Route path='*' element = {<h2>Page not found</h2>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { useState, createContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider} from "react-query";
import { Navbar } from './assets/components/navbar';
import { Home } from "./pages/home"
import { Dashboard } from './pages/dashboard';
import { Users } from './pages/users';
import { Chat } from './pages/chat';
import { Bookings } from './pages/bookings';
import { Login } from './pages/login';
import { Signup } from './pages/signup';
import { SignUpUser } from './pages/signupuser';
import { ArtisanSignUp } from './pages/artisansignup';
import { ComingSoon } from './assets/components/comingSoon';
import { PageNotFound } from './pages/PageNotFound';
import { NavBar2 } from './assets/components/nav2';
// import { NavBar2 } from './assets/components/nav2';
export const DisplayNavContext = createContext("");
function App() {
  const user = new QueryClient();
  const [ display, setDisplay ] = useState(false)
  return (
    <div className="App">
      <QueryClientProvider client={user}>
        <Router>
          <DisplayNavContext.Provider value={ {display, setDisplay} }>
            <Navbar></Navbar>
            <NavBar2></NavBar2>
          </DisplayNavContext.Provider>
          <Routes>
            {/* <Route path='/'  index element={<Navigate to={"/come"}/>}></Route> */}
            <Route path='/' element={<ComingSoon/>}></Route>
            <Route path='/home' element = {<Home/>}></Route>
            <Route path='/chat' element = {<Chat/>}></Route>
            <Route path='/dashboard' element ={<Dashboard/>}></Route>
            <Route path='/users' element ={<Users/>}/>
            <Route path='/bookings' element = {<Bookings/>}/>
            <Route path='/login' element = {<Login></Login>}></Route>
            <Route path='/signup' element = {<Signup></Signup>}></Route>
            <Route path='/signupuser' element = {<SignUpUser></SignUpUser>}></Route>
            <Route path='/artisansignup' element = {<ArtisanSignUp></ArtisanSignUp>}></Route>
            <Route path='*' element = {<PageNotFound></PageNotFound>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  )
}

export default App

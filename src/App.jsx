
// import './App.css'
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// // import { NavBar2 } from './assets/components/nav2';
// export const DisplayNavContext = createContext("");
// function App() {
//   const user = new QueryClient();
//   const [ display, setDisplay ] = useState(false);
//   const [ displayNav, setDisplayNav]  = useState(true)
//   return (
//     <div className="App">
//      
//       <DisplayNavContext.Provider value={ {display, setDisplay, displayNav, setDisplayNav} }>
//         <Router>
//             <Navbar></Navbar>
//             <NavBar2></NavBar2>
//           <Routes>
//             {/* <Route path='/'  index element={<Navigate to={"/come"}/>}></Route> */}
//             <Route path='/come' element={<ComingSoon/>}></Route>
//             <Route path='/' element = {<Home/>}></Route>
//             <Route path='/chat' element = {<Chat/>}></Route>
//             <Route path='/dashboard' element ={<Dashboard/>}></Route>
//             <Route path='/users' element ={<Users/>}/>
//             <Route path='/bookings' element = {<Bookings/>}/>
//             <Route path='/login' element = {<Login></Login>}></Route>
//             <Route path='/signup' element = {<Signup></Signup>}></Route>
//             <Route path='/signupuser' element = {<SignUpUser></SignUpUser>}></Route>
//             <Route path='/artisansignup' element = {<ArtisanSignUp></ArtisanSignUp>}></Route>
//             <Route path='*' element = {<PageNotFound></PageNotFound>}/>
//           </Routes>
//         </Router>
//         </DisplayNavContext.Provider>
//       </QueryClientProvider>
//     </div>
//   )
// }

// export default App

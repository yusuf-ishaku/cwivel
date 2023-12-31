import { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import SignUpUserImg from '../assets/img/SignUpUserImage.png';
import SignUpUserLIne from '../assets/img/SignUpUserLine.png';
import SignUpUserTab from "../assets/img/SignUpImageTab.png";
import SignUpUserLineTab from '../assets/img/SignUpLineTab.png';
import Cwivel from '../assets/img/cwivel.png';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from 'axios';
import { useQuery } from 'react-query';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import useDigitInput from 'react-digit-input';
import { BiErrorCircle } from "react-icons/bi";
// import { DisplayNavContext } from '../App';
export const SignUpUser  = () =>{
    // I did not use redirects or linked pages to change the different looks on the 
    // user sign up page I just changed the ui based on variables that changed  to true and false based on the state. 
    // I used localstorage to preserve the current state of the application in case a user refreshes to prevent losing application state.
    
    // const { setDisplayNav } = useContext(DisplayNavContext);
    // useEffect(() =>{
    //   setDisplayNav(false)
    // }, []);
    
    
    const [eyeopen, setEyeOpen] = useState(false);
    const [eyeopen2, setEyeOpen2] = useState(false);
    const [emailState, setEmailState] = useState(JSON.parse(localStorage.getItem("emailState") || true));
    const [interEmailState, setInterEmailState] = useState(JSON.parse(localStorage.getItem("interEmailState"))||false);
    const [inform, setInform ] = useState('');
    const navigate = useNavigate();
    const [informSideNote, setInformSideNote] = useState('');
    const[emailInState, setEmailInState] = useState(JSON.parse(localStorage.getItem('emailInState')) || '')
    const verily = useRef();
    const [value, onChange] = useState('');
    let [errorAvailable, setErrorAvailable] = useState(false);
    let [theErrorMessage, setTheErrorMessage] = useState('');
    const [si, setSi]  = useState(false);
    // This aspect is used to render a 4 digit input for the otp, check imports for the dependency used.
    const digits = useDigitInput({
        acceptedCharacters: /^[0-9]$/,
        length: 4, 
        value,
        onChange,
    });
    const schema = yup.object().shape({
        username: yup.string().required("Your username is a required field!"),
        first_name: yup.string().required("First name is required"),
        last_name: yup.string().required("Last name is required"),
        password: yup.string().min(4).max(8).required("Password must be more than 4 characters "),
        password2: yup.string().oneOf([yup.ref("password"), null]).required("passwords don't match") 

    });
    const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
    });
    // This is the function used to handle the api calls.
    const submitData =  async (data) =>{
        setSi(false)
        // console.log(data);
        // this function is called for the first time when the user submits his/her email address.
        // so data is passed as email, interEmailState and emailState are true so the first condition is what is carried out.
        let demail;
        if(typeof data === "string"){demail = data}else if(typeof data === 'object')demail = data.email;
        // return demail;
        if(emailState === true && interEmailState === false){
          // basic try and catch syntax
            try{
              // posting to recieve the otp
                const response = await Axios.post("https://cwivel.pythonanywhere.com/auth/send-otp/", { email: demail });
                // console.log(response?.data)
                // condition when otp is successfully sent
                if(response?.data.status === true){
                  // we inform the user by setting inform on the ui
                    setInform(response.data.message);
                    setInformSideNote(response.data.data.email);
                    // we set interEmailState to be true to effectively change the UI and preserve application state
                    localStorage.setItem("interEmailState", JSON.stringify(true))
                    setInterEmailState(true);
                    // we also preserve the email used for two reasons;
                    // in case the user accidentally refreshes the page at this point, the mesage he will see will be that 
                    // the otp has been sent to this email as you will see further down the code.
                    localStorage.setItem("emailInState", JSON.stringify(response.data.data.email));
                    setEmailInState(response.data.data.email);
                }
            } catch (err){
              // handling possible errors and setting a certain modal at the top of the page with information reagarding the error
              console.error(err)
              if(err.code === "ERR_BAD_REQUEST"){
                setErrorAvailable(true);
                setSi(true);
                setTheErrorMessage("Email has already been verified, please sign in!");
                
              }else if(err.code === "ERR_NETWORK"){
                setErrorAvailable(true);
                setTheErrorMessage(`${err.message}: Please check your internet connection!`);
              }
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
            }
        }else if(emailState === true && interEmailState === true){
          // this is occurs the second time the function is called.
          // the button that will call the fucntion with demail held in state and in localstorage for abovementioned reasons and value
          // the value of the 4 digit otp sent to the email
            // console.log(value);
            // let demail = data;
            let otpValue = ""
            digits.forEach((digit)=>{
              otpValue+=digit.value
            });
            // console.log(otpValue.length)
            // console.log(value.length)
            // this is to make sure that the correct length of otp is used to avoid that error beforehand.
            if(otpValue.length < 4) {
              setErrorAvailable(true);
              setTheErrorMessage("OTP is less than four digits, please correct it!");
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
              return;
            }else{
              // if the otp is valid, we try to verify the email
                try {
                  const response = await Axios.post(
                    "https://cwivel.pythonanywhere.com/auth/verify-email/",
                    { email: demail, otp: value }
                  );
                  // console.log(response?.data);
                  if (response?.data.status === true) {
                    // we change application state based on the response and change the localstorage to persist the data in case user refreshes.
                    localStorage.setItem("interEmailState", JSON.stringify(false));
                    setInterEmailState(false);
                    localStorage.setItem("emailState", JSON.stringify(false));
                    setEmailState(false);
                    localStorage.setItem("emailInState", JSON.stringify(demail));
                    setEmailInState(demail);
                  }
                } catch (err) {
                  // we have already reduced possible errors by preserving the email used to send the otp and also making sure the lenght of the otp is proper.
                  // so the only error is if the otp is invalid
                  console.error(err);
                  if(err.code === "BAD_REQUEST"){
                    // we update the ui to reflect the changes.
                    setErrorAvailable(true);
                    setTheErrorMessage("This OTP is invalid");
                    // we reset the ui to it's initial state after 4 seconds displaying the image. might make it longer or add a button to clear it out.
                    // other means were too long. besides, na MVP this.
                    setInterval(()=>{
                      setErrorAvailable(false);
                      setTheErrorMessage("");
                    }, 4000);
                  }
                }
            }
           
        }else{
          // at this point, the email has been verified and the ui state is showing inputs that will contain necessary data for registration
          // here we specify what the object will look like, take note that data will no longer be an email but an object based on this fucntion call,
          // you may not understand the logic now, but when you try the flow yourself you will undrstand that by not making buttons that can make certain function calls with data pased 
          // in as email at some point and then an object containing user info at another point is all i did.
          let newData = {
            email: emailInState,
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            password: data.password,
            password2: data.password2
          }
          try{
            const response = await Axios.post("https://cwivel.pythonanywhere.com/auth/register/", newData);
            // console.log(response?.data)
            // we post and upon recieving success, we move the user to login
            if(response?.data.response === "Registration Successful!"){
                navigate('/login');
            }
            
        } catch (err){
          console.error(err);
          // we just ahandle errors using previously specified means.
            if(err.response?.data.username[0] === "user with this username already exists."){
              setErrorAvailable(true);
              setTheErrorMessage("User with this username already exists. Please log in!");
              setSi(true);
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
            }else if(err.code === "ERR_NETWORK"){
              setErrorAvailable(true);
              setTheErrorMessage(`${err.message}: Please check your internet connection`);
              // setSi(true);
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
            }else{
              setErrorAvailable(true);
              setTheErrorMessage(`Please confirm that all inputs are valid before submitting`);
              // setSi(true);
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
            }
        }
        }
       
    };
    // This is the ui part, understanding the various state changes earlier is important to understand the use of the ternary operators and what is displaying at different points in time.
    return (
      <>
        <div className="w-[100vw] h-full flex flex-col items-center lg:pl-10 sm:items-center sm:flex sm:flex-row">
          <div className="w-[90%] sm:pl-10 sm:w-5/12 sm:px-0 h-[100vh] text-auto z-50">
            <section className="cwivel w-auto flex justify-center sm:justify-start">
              <img src={Cwivel} alt='Cwivel' className="cwivel max-w-[150px]"></img>
            </section>
            <h2 className="text-cwivel text-left w-full font-semibold mb-2 text-md md:text-lg">
              Create Account
            </h2>
            <h4 className="text-gray-500 text-base mb-2 px-3">
              {emailState
                ? `Let\'s verify your email`
                : `Let's get your details`}
            </h4>
            {errorAvailable ? <div className='w-[90%]  p-1 border-gray-400 border-[1px] rounded-md'>
              <h2 className='text-[0.8rem] flex'><BiErrorCircle style={{color: 'red',}} size={'16px'}></BiErrorCircle><span className='ml-1 text-red-900 font-medium'>{theErrorMessage}</span></h2>
              </div>
              : ''}
            <form
              onSubmit={(e) =>{ e.preventDefault(); handleSubmit(submitData(emailInState))}}
              className={
                emailState
                  ? "flex flex-col items-center justify-center mt-2"
                  : "hidden"
              }
            >
              <IconContext.Provider
                value={{ size: "20", className: "text-gray-400" }}
              >
                <label htmlFor="email" className="w-full text-left px-3 mb-2 text-gray-800">
                  Email
                </label>
                <div className="flex  flex-row items-center justify-center w-[90%]">
                  <input
                    type="email"
                    
                    placeholder="sample@gmail.com"
                    id="email"
                    onChange={(e)=>setEmailInState(e.target.value)}
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm -ml-5 border-gray-300 rounded-md border-me w-[100%] h-10"
                    defaultValue={emailInState}
                    required
                  />
                  <AiOutlineMail
                    style={{ marginBottom: "17" }}
                    className="-ml-10"
                  ></AiOutlineMail>
                </div>
                {errors.email ? <span className='text-[0.8rem] text-red-600 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.email.message}</span>: ""}
              </IconContext.Provider>
              
              <div className={interEmailState ? "flex flex-col items-center justify-center w-[100%] my-2" : 'hidden'}>
                <span className='text-gray-600 text-sm sm:text-md mb-2'>{`We have sent a One-Time Password to ${informSideNote === ''? emailInState : informSideNote}. Please, ${inform === ''? "verify your email" : inform}`}</span>
                <div className='input-group flex flex-row mb-2'>   
                    <input className='w-8 rounded-md text-center p-2 border-[1px] mx-2' inputMode="decimal" autoFocus {...digits[0]} />
                    <input className='w-8 rounded-md text-center p-2 border-[1px] mx-2' inputMode="decimal" {...digits[1]} />
                    <input className='w-8 rounded-md text-center p-2 border-[1px] mx-2' inputMode="decimal" {...digits[2]} />
                    <input  className='w-8 rounded-md text-center p-2 border-[1px] mx-2'  inputMode="decimal" {...digits[3]} />
                </div>
              </div>
              <div className="flex flex-col w-[90%] items-center">
                <button
                  
                  className="text-white w-full bg-cwivel-green p-2  mb-2 px-5 rounded-md z-50"
                >
                  {interEmailState ? emailState ? "Continue": "Submit Details" : "Get OTP"}
                </button>
                {si ?<Link style={{width: '100%'}} to={'/login'}><button
                  
                  className="text-cwivel w-full border-green-300 border-[1px] bg-white p-2  mb-2 px-5 rounded-md z-50"
                >
                 Sign In
                </button></Link> 
                : ''}
                <button
                  // type="submit"
                  className={
                    interEmailState
                      ? "hidden"
                      : "flex items-center justify-center bg-white w-full text-cwivel border-green-300 border-[1px] p-2 px-5 rounded-md z-50"
                  }
                >
                  <FcGoogle></FcGoogle>
                  Sign Up with Google
                </button>
              </div>
            </form>
            <form onSubmit={handleSubmit(submitData)} className={emailState ? "hidden" : "block"}>
              <label htmlFor="username" className="mb-2 text-gray-800">
                Username
              </label>
              <input
                type="text"
                placeholder="User Name"
                name="username"
                id="username"
                {...register("username")}
                className="mb-3 placeholder-gray-400 pl-6 text-sm border-gray-300 rounded-md border-me w-[90%] h-10"
                required
              />
              {errors.username ? <span className='text-[0.8rem] text-red-600 p-2 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.username.message}</span>: ""}
              <label
                  htmlFor="first_name"
                  className="mb-2 ml-1 text-gray-800"
                >
                <br></br> First Name
                </label>
                <div className="flex flex-row items-center justify-end w-[100%]">
                  <input
                    type= "text"
                    name= 'first_name'
                    {...register("first_name")}
                    placeholder="First Name"
                    id="first_name"
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm border-gray-300 rounded-md border-me w-[100%] h-10"
                    required
                  />
                </div>
                {errors.first_name ? <span className='text-[0.8rem] text-red-600 p-2 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.first_name.message}</span>: ""}
                <label
                  htmlFor="confirm password"
                  className="mb-2 text-gray-800"
                >
                  Last Name
                </label>
                <div className="flex flex-col items-center justify-end w-[100%]">
                  <input
                    type= "text"
                    name='last_name'
                    {...register("last_name")}
                    placeholder="Last Name"
                    id="last_name"
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm  border-gray-300 rounded-md border-me w-[100%] h-10"
                    required
                  />
                  {errors.last_name ? <span className='text-[0.8rem] p-2 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.last_name.message}</span>: ""}
                </div>
              <IconContext.Provider
                value={{ size: "20", className: "text-gray-400" }}
              >
                <label htmlFor="password" className="mb-2 text-gray-800">
                  Password
                </label>
                <div className="flex flex-row items-center justify-end  w-[100%]">
                  <input
                    type={eyeopen ? "text" : "password"}
                    {...register("password")}
                    name='password'
                    placeholder="**********"
                    id="password"
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm ml-0 border-gray-300 rounded-md border-me w-[100%] h-10"
                    required
                  />
                  {eyeopen ? (
                    <AiFillEye
                      onClick={() => setEyeOpen(false)}
                      style={{
                        position: "absolute",
                        cursor: "pointer",
                        marginRight: "17",
                        marginBottom: "17",
                      }}
                    ></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible
                      onClick={() => setEyeOpen(true)}
                      style={{
                        position: "absolute",
                        marginRight: "17",
                        marginBottom: "17",
                      }}
                    ></AiFillEyeInvisible>
                  )}
                </div>
                {errors.password ? <span className='text-[0.8rem] text-red-600 p-2 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.password.message}</span>: ""}
              </IconContext.Provider>
              <IconContext.Provider
                value={{ size: "20", className: "text-gray-400" }}
              >
                <label
                  htmlFor="password2"
                  className="mb-2 text-gray-800"
                >
                  Confirm Password
                </label>
                <div className="flex flex-row items-center justify-end w-[100%]">
                  <input
                    type={eyeopen2 ? "text" : "password"}
                    {...register("password2")}
                    placeholder="**********"
                    name='password2'
                    id="confirmpassword"
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm -ml-5 border-gray-300 rounded-md border-me w-[100%] h-10"
                    required
                  />
                  {eyeopen2 ? (
                    <AiFillEye
                      onClick={() => setEyeOpen2(false)}
                      style={{
                        cursor: "pointer",
                        marginRight: "17",
                        marginBottom: "17",
                        position: "absolute",
                      }}
                    ></AiFillEye>
                  ) : (
                    <AiFillEyeInvisible
                      onClick={() => setEyeOpen2(true)}
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        marginRight: "17",
                        marginBottom: "17",
                      }}
                    ></AiFillEyeInvisible>
                  )}
                </div>
              </IconContext.Provider>
              {errors.password2 ? <span className='text-[0.8rem] text-red-600 p-2 flex items-center'><BiErrorCircle></BiErrorCircle>{errors.password2.message}</span>: ""}
              <div className="flex flex-col w-[90%] items-center">
                <button
                  type="submit"
                  className="text-white w-full bg-cwivel-green p-2  mb-2 px-5 rounded-md z-50"
                >
                  {emailState ? "Get OTP" : "Continue"}
                </button>
              </div>
            </form>
          </div>
          <div className="w-3/6 sm:w-6/12 sm:flex hidden h-[100vh]">
            <img
              className="object-contain w-auto lg:absolute lg:top-0 bottom-0  lg:right-0 hidden lg:h-[100vh] lg:block"
              src={SignUpUserImg}
              alt="Signupuserimg"
            />
            <img
              className="object-contain sm:absolute sm:left-[49%] bottom-0 sm:block lg:hidden sm:top-0 sm:bottom-0 hidden sm:h-[100vh] "
              src={SignUpUserTab}
              alt="Signupuserimg"
            />
          </div>
        </div>
      </>
    );
}

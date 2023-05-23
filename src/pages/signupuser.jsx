import { useState, useRef } from 'react';
import { useNavigate, Link} from 'react-router-dom';
import { IconContext } from 'react-icons/lib';
import SignUpUserImg from '../assets/img/SignUpUserImg.png';
import SignUpUserLIne from '../assets/img/SignUpUserLine.png';
import SignUpUserTab from "../assets/img/SignUpImageTab.png";
import SignUpUserLineTab from '../assets/img/SignUpLineTab.png';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Axios from 'axios';
import { useQuery } from 'react-query';
import { AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from "react-icons/fc";
import useDigitInput from 'react-digit-input';
import { BiErrorCircle } from "react-icons/bi";
export const SignUpUser  = () =>{
    // Axios.create()
    // localStorage.setItem("emailState", JSON.stringify(true))
    const [eyeopen, setEyeOpen] = useState(false);
    const [eyeopen2, setEyeOpen2] = useState(false);
    const [emailState, setEmailState] = useState(JSON.parse(localStorage.getItem("emailState") || true));
    // console.log(emailState)
    const [interEmailState, setInterEmailState] = useState(JSON.parse(localStorage.getItem("interEmailState"))||false);
    // console.log(interEmailState)
    const [inform, setInform ] = useState('');
    const navigate = useNavigate();
    const [informSideNote, setInformSideNote] = useState('');
    const[emailInState, setEmailInState] = useState(JSON.parse(localStorage.getItem('emailInState')) || '')
    const verily = useRef();
    const [value, onChange] = useState('');
    let [errorAvailable, setErrorAvailable] = useState(false);
    let [theErrorMessage, setTheErrorMessage] = useState('');
    const [si, setSi]  = useState(false);
 
    // console.log(theErrorMessage+ " + " + errorAvailable);
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
    const {register, handleSubmit} = useForm();

    const submitData =  async (data) =>{
        setSi(false)
        console.log(data);
        
        let demail;
        if(typeof data === "string"){demail = data}else if(typeof data === 'object')demail = data.email;
        // return demail;
        if(emailState === true && interEmailState === false){
            try{
                const response = await Axios.post("https://cwivel.pythonanywhere.com/auth/send-otp/", { email: demail });
                console.log(response?.data)
                if(response?.data.status === true){
                    setInform(response.data.message);
                    setInformSideNote(response.data.data.email);
                    localStorage.setItem("interEmailState", JSON.stringify(true))
                    setInterEmailState(true);
                    localStorage.setItem("emailInState", JSON.stringify(response.data.data.email));
                    setEmailInState(response.data.data.email);
                }
            } catch (err){
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
            // console.log(value);
            // let demail = data;
            let otpValue = ""
            digits.forEach((digit)=>{
              otpValue+=digit.value
            });
            // console.log(otpValue.length)
            // console.log(value.length)
            if(otpValue.length < 4) {
              setErrorAvailable(true);
              setTheErrorMessage("OTP is less than four digits, please correct it!");
              setInterval(()=>{
                setErrorAvailable(false);
                setTheErrorMessage("");
              }, 4000);
              return;
            }else{
                try {
                  const response = await Axios.post(
                    "https://cwivel.pythonanywhere.com/auth/verify-email/",
                    { email: demail, otp: value }
                  );
                  console.log(response?.data);
                  if (response?.data.status === true) {
                    localStorage.setItem("interEmailState", JSON.stringify(false));
                    setInterEmailState(false);
                    localStorage.setItem("emailState", JSON.stringify(false));
                    setEmailState(false);
                    localStorage.setItem("emailInState", JSON.stringify(demail));
                    setEmailInState(demail);
                  }
                } catch (err) {
                  console.error(err);
                  if(err.code === "BAD_REQUEST"){
                    setErrorAvailable(true);
                    setTheErrorMessage("This OTP is invalid");
                  }
                }
            }
           
        }else{
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
            console.log(response?.data)
            if(response?.data.response === "Registration "){
                navigate('/dashboard');
            }
            
        } catch (err){
          console.error(err)
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
    return (
      <>
        <div className="w-[100vw] h-full flex flex-col items-center sm:items-start sm:flex sm:flex-row">
          <div className="sm:w-1/12 w-auto">Hello World</div>
          <div className="w-[90%] sm:w-5/12 pt-10 sm:px-0 h-[100vh] text-auto z-50">
            <h2 className="text-cwivel text-left w-full font-semibold mb-2 text-md md:text-lg">
              Create Account
            </h2>
            <h4 className="text-gray-500 text-base mb-2">
              {emailState
                ? `Let\'s verify your email`
                : `Let's get your details`}
            </h4>
            {errorAvailable ? <div className='w-[90%]  p-1 border-gray-400 border-[1px] rounded-md'>
              <h2 className='text-[0.8rem] flex'><BiErrorCircle style={{color: 'red',}} size={'16px'}></BiErrorCircle><span className='ml-1 text-red-900 font-medium'>{theErrorMessage}</span></h2>
              </div>
              : ''}
            <form
              onSubmit={(e) =>{ e.preventDefault(); submitData(emailInState)}}
              className={
                emailState
                  ? "flex flex-col items-start justify-center mt-2"
                  : "hidden"
              }
            >
              <IconContext.Provider
                value={{ size: "20", className: "text-gray-400" }}
              >
                <label htmlFor="email" className="mb-2 text-gray-800">
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
              </IconContext.Provider>
              
              <div className={interEmailState ? "flex flex-col items-center justify-center w-[90%] my-2" : 'hidden'}>
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
              {/* <span className="ml-6 text-base text-red-600">{errors.username?.message  }</span> */}
              <label
                  htmlFor="first_name"
                  className="mb-2 ml-1 text-gray-800"
                >
                  First Name
                </label>
                <div className="flex flex-row items-center justify-end w-[90%]">
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
                <label
                  htmlFor="confirm password"
                  className="mb-2 text-gray-800"
                >
                  Last Name
                </label>
                <div className="flex flex-col items-center justify-end w-[90%]">
                  <input
                    type= "text"
                    name='last_name'
                    {...register("last_name")}
                    placeholder="Last Name"
                    id="last_name"
                    className="mb-3 placeholder-gray-400 p-6 text-gray-800 text-sm  border-gray-300 rounded-md border-me w-[100%] h-10"
                    required
                  />
                  <span className="ml-6 text-base text-red-600">{""}</span>
                </div>
              <IconContext.Provider
                value={{ size: "20", className: "text-gray-400" }}
              >
                <label htmlFor="password" className="mb-2text-gray-800">
                  Password
                </label>
                <div className="flex flex-row items-center justify-end  w-[90%]">
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
                <span className="ml-6 text-base text-red-600">{""}</span>
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
                <div className="flex flex-row items-center justify-end w-[90%]">
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
              <span className="ml-6 text-base text-red-600">{""}</span>
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
          <div className="w-2/6 sm:w-6/12 sm:flex hidden h-[100vh]">
            <img
              className="object-contain w- lg:absolute lg:top-0 bottom-0  lg:right-0 hidden lg:h-[100vh] lg:block"
              src={SignUpUserImg}
              alt="Signupuserimg"
            />
            <img
              className="w-inherit lg:absolute lg:right-64 lg:-top-10 bottom-0 lg:rotate-12 hidden lg:h-full lg:block"
              src={SignUpUserLIne}
              alt="Sign up user line"
            />

            <img
              className="object-contain w-auto sm:absolute bottom-0 sm:block lg:hidden sm:top-0 sm:bottom-0 hidden sm:h-[100vh] "
              src={SignUpUserTab}
              alt="Signupuserimg"
            />
            <img
              className="w-auto sm:absolute sm:block bottom-0 lg:hidden sm:right-24 sm:bottom-0 sm:-top-10 sm:h-[100vh]"
              src={SignUpUserLineTab}
              alt="Sign up user line"
            />
          </div>
        </div>
      </>
    );
}

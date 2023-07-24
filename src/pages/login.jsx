import { AiOutlineEyeInvisible, AiOutlineEye ,AiFillEye, AiFillEyeInvisible, AiOutlineMail } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc'
import SignupImage from '../assets/img/login-img.png';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';
import Cwivel from '../assets/img/cwivel.png';
import SignupLine from '../assets/img/login-line.png';
import SignUpLineTab from '../assets/img/LoginLineTab.png';
import SignupImageTab from '../assets/img/LoginImageTab.png'
import { useForm } from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup";
import { BiErrorCircle } from "react-icons/bi";
import * as yup from "yup";
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider";
import axios from '../api/axios';
// import { DisplayNavContext } from '../App';
const LOGIN_URL = '/auth/login';

export const Login = () => {
    const [eyeopen, setEyeOpen] = useState(false);
    const { setAuth } = useContext(AuthContext);
    // const {setDisplayNav} = useContext(DisplayNavContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    // useEffect(() =>{
    //     setDisplayNav(false)
    // }, []);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <Link to="/dashboard" className='text-cwivel font-semibold ml-1'>Go to Your Profile</Link>
                    </p>
                </section>
            ) : (
                <div className='w-full h-full flex flex-col-reverse items-center sm:flex sm:flex-row sm:justify-center sm:items-start'>
                    <section className='w-4/6 sm:w-3/6 hidden -z-10 sm:block h-full'>
                        <img className='w-auto hidden lg:block  absolute h-[100vh] signupimgs' src={SignupImage} alt=''></img>
                        <img className='w-auto hidden sm:block lg:hidden absolute h-[100vh] signupimgs' src={SignupImageTab} alt=''></img>
                        <img className='w-auto hidden lg:block absolute ml-60 h-[100vh] signupimgs' src={SignupLine} alt=""></img>
                        <img className='w-auto hidden sm:block lg:hidden absolute ml-40 h-[100vh] signupimgs' src={SignUpLineTab} alt=""></img>
                    </section>
                    <section>
                        <section className="cwivel w-full flex justify-center sm:justify-end">
                                <img src={Cwivel} alt='Cwivel' className="cwivel max-w-[150px]"></img>
                        </section>
                        <div className="w-auto h-fit my-auto">
                            <h3 className='text-cwivel text-2xl font-semibold pt-10'>Welcome back</h3>
                            <h4 className='text-slate-600 text-md block my-3'>Please enter your details to continue</h4>
                            <div ref={errRef} className={errMsg ? 'w-full  rounded-md border-gray-300 border-[1px] p-2' : "hidden"} aria-live="assertive">
                            <span className='flex mx-1'>
                                <h3 className='text-red-500 flex items-center'>
                                    <BiErrorCircle style={{marginRight: '2px'}}></BiErrorCircle>
                                    {errMsg}
                                </h3>
                            </span>
                        </div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="username" className='text-slate-700'>Username:</label>
                                <input
                                    className='w-full block p-2 my-1 mb-3 text-sm placeholder-gray-400  border-gray-400 bg-transparent border-me rounded-md focus:outline-none'
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setUser(e.target.value)}
                                    value={user}
                                    placeholder='Username'
                                    required
                                />
                                <label htmlFor="password" className='text-slate-700'>Password:</label>
                                <IconContext.Provider value={{size: "20", className: "text-gray-400" }}>
                                    <div className="flex items-center">
                                        <input
                                            className='w-full block p-2 my-1 text-sm placeholder-gray-400  border-gray-400 bg-transparent border-me rounded-md focus:outline-none'
                                            type={eyeopen ? "text" : "password"}
                                            id="password"
                                            onChange={(e) => setPwd(e.target.value)}
                                            value={pwd}
                                            required
                                        />
                                        {eyeopen ? (
                                        <AiFillEye
                                        onClick={() => setEyeOpen(false)}
                                        style={{
                                            marginLeft: "-2rem"
                                        }}
                                        ></AiFillEye>
                                    ) : (
                                        <AiFillEyeInvisible
                                        onClick={() => setEyeOpen(true)}
                                        style={{
                                            marginLeft: "-2rem"
                                        }}
                                        ></AiFillEyeInvisible>
                                    )}
                            </div>
                                </IconContext.Provider>
                                <div className="flex my-3 w-auto ">
                                    <input type="checkbox" name="remember me" id="remember-me" /> 
                                    <span className='text-slate-500 ml-1'>Remember me</span>
                                    <span className="inline-block ml-auto text-cwivel font-semibold">Forgot Password?</span>
                                </div>
                                <button type='submit' className='bg-cwivel-green text-white w-full p-3 rounded-md'>Log In</button>
                            </form>
                            <p>
                                <span className="block">
                                    Don't have an account?
                                    <Link to="/signup" className='text-cwivel font-semibold ml-1'>Sign up</Link>
                                </span>
                            </p>
                </div>
                </section>
        </div>
            )}
        </>
    )
}

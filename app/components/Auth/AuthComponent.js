import React, { useState  } from 'react'
import DatePicker from "react-datepicker";

import Link from 'next/link'
import registerBrain from '../../brain/registerBrain';
import { KRoutes } from '../../constants/KRoutes';
import StateFulButton from '../shared/StateFulButton';
import AgreeWithPolicy from './AgreeWithPolicy';
import AuthTypes from '../../constants/AuthTypes';
import loginBrain from '../../brain/loginBrain';
import CInput from '../shared/CInput';
import { CakeIcon } from '@heroicons/react/solid';


function TopHeader({type = AuthTypes.signin}) {
    return (
        <div className="border-2">

            <div className="mx-auto w-32 flex items-center">
             <img src="/logo.png" className="h-10 pr-2 border-r-[1px] mr-4 border-green-400" />
             <vr/>
             <h1 className="text-lg font-semibold text-green-400">
             {type === AuthTypes.signin ? "Connexion" : "Inscription" }
             </h1>
            
            </div>
            
        </div>
    )
}


function OrSignWithCredentials({type = AuthTypes.signin}) {
    return (
        <div className="text-blueGray-400 text-center mb-3 font-bold">
        <small>Or {type === AuthTypes.signin ? "Sign in " : "Sign up"} with credentials</small>
    </div>
    )
}

function AuthTop({type = AuthTypes.signup}) {
    return (
        <div className="rounded-t mb-0 px-6 py-6">
              <div className="text-center mb-3">
                <h6 className="text-blueGray-500 text-sm font-bold">
                  {type} with
                </h6>
              </div>
              <div className="btn-wrapper text-center">
                <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github </button>
                <button className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                  <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google</button>
              </div>
              <hr className="mt-6 border-b-1 border-blueGray-300" />
            </div>
    )
}



function Footer({type = AuthTypes.signup}) {
    return (
        <div>
            <Link 
                href={type == AuthTypes.signup ? KRoutes.login : KRoutes.register}
                >
                    <span className="cursor-pointer">
                        
                        {type == AuthTypes.signup ?  
                    
                    <span> Already have an account ? <span className="text-green-900">  Log in </span> </span> :

                     <span> Don't have an account ? <span className="text-green-900"> Register </span> </span>
                     
                     }
                     
                     </span>
            </Link>
            <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
        </div>
    )
}

function Form({type}) {
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("richard.bathiebo.7@gmail.com")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [covPic, setcovPic] = useState()
    const [profilePic, setprofilePic] = useState()
    const [gender, setgender] = useState("Male")
    const [birthdate, setbirthdate] = useState(new Date(2000,1,1))
    const [isLoading, setIsLoading] = useState(false)

    const data = {fullName,email,password,covPic,profilePic,gender ,birthdate , passwordConfirmation}

    return (
        <form 
        className="z-50"
        // onSubmit={(e) => {
        //     e.preventDefault()
        //     console.log("submit")
        // }}
        onSubmit={(e) => {
            if(type === AuthTypes.signup){
                registerBrain.handleFormSubmit(e , data , setIsLoading)
                return
            }
           loginBrain.handleFormSubmit(e , data.email , data.password , setIsLoading)
            
        }} 
        > 
            {type == AuthTypes.signup && <CInput label="Fullname" value={fullName} setValue={setFullName} placeholder="Ex: Richard Bathiebo" />}
            <CInput label="Email" value={email} setValue={setEmail} placeholder="name@gmail.com" />
            <div className="flex">
                <CInput className="mr-2" label="Password" type="password" value={password} placeholder="password" setValue={setPassword} />
                {type == AuthTypes.signup  && <CInput label="Password Confirmation" type="password" value={passwordConfirmation} placeholder="password confirmation" setValue={setPasswordConfirmation} />}
            </div>
            {/* {type == AuthTypes.signup && 

            <div className="relative mb-3 flex justify-around">

                <div>
                    <label className="flex uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                            <CakeIcon className="h-5 w-h-5 text-green-900 mr-2" />  Birthdate 
                    </label>
                    <div className="relative">
                        <DatePicker
                        className="w-full border-4 cursor-pointer"
                            selected={birthdate}
                            onChange={(date) => setbirthdate(date)}
                            // selectsStart
                            startDate={birthdate}
                            // endDate={endDate}
                            minDate={new Date(1930, 1, 1)}
                            maxDate={new Date(2010, 1, 1)}
                            nextMonthButtonLabel=">"
                            previousMonthButtonLabel="<"
                        />
                    </div>
                </div> 


                <div>
                    <label className="flex uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                            <img src="/gender.png" className="h-5 w-5 mr-2" />  Gender 
                    </label>
                    <div className="relative inline-block w-full text-gray-700">
                        <select value={gender} onChange={(e) => setgender(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
            </div>} */}

            <AgreeWithPolicy />
            <StateFulButton 
                className="btn btn-md btn-primary btn-block" 
                isActionIn={isLoading}
                title={type === AuthTypes.signup ? "Sign up" : "Sign in"}
                type="submit"
            />
            {<Footer type={type} />}
        </form>
    )
}


function AuthComponent({type}) {
    return (
            <div 
            className="text-center">
               
                    <TopHeader type={type} />
                <div className="mx-auto mt-4  relative " >
                    <section className="bg-blueGray-50 z-50">
                        <div className="w-full md:w-6/12 px-4 mx-auto pt-6 bg-white">
                            <div className=" flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                                    <AuthTop type={type} />
                                <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                                    <OrSignWithCredentials type={type} />
                                    <Form type={type}/>
                                </div>
                            </div>
                        </div>
                    </section>
                     <div className="h-96 relative z-[-1] w-full  hidden md:block" 
                     style={{
                        backgroundImage : "url('/illus3.svg')",
                        backgroundRepeat : "no-repeat",
                        backgroundSize  : "100%",
                        marginTop : -300
                    }}
                    >

                        {/* <img src="/illus2.svg" className="h-96 w-full" /> */}

                </div>
                </div>
            </div>
    )
}

export default AuthComponent

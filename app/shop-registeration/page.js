"use client"
import { useState } from "react"
import PhoneNumber from "@/components/shopRegistration/PhoneNumber"
import OtpForm from "@/components/shopRegistration/OtpForm"
import MandatoryDetails from "@/components/shopRegistration/MandatoryDetails"
export default function ShopRegisteration(){

    const [phoneRegistered, setPhoneNumberRegistered] = useState(false)
    const [otpSuccess, setOtpSuccess] = useState(false)
    const [isNewServiceman, setIsNewServiceman] = useState(false)
    const [businessRegistered, setBusinessRegistered] = useState(false)

    const [phone_no, setPhoneNumber] = useState('')
    const [token, setToken] = useState('')

    function registeredPhoneNumber(phoneNumber){
        setPhoneNumberRegistered(true)
        setPhoneNumber(phoneNumber)
    }

    function otpSuccessfull(isNewServiceman, token){
        setOtpSuccess(true)
        setIsNewServiceman(isNewServiceman)
        if(isNewServiceman){
            setToken(token)
        }else{
            alert("Already registered")
        }
    }

    function businessRegistrationSuccessfull(){
        setBusinessRegistered(true)
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-black px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 border border-gray-300 rounded-md px-8 py-6 shadow-md bg-black">
                <h1 className="text-2xl font-bold text-white text-center mb-6">Shop Registration</h1>
                {!phoneRegistered && <PhoneNumber registeredPhoneNumber={registeredPhoneNumber} /> }
                {!otpSuccess && phoneRegistered  && <OtpForm phoneNumber={phone_no} otpSuccessfull={otpSuccessfull} />}
                {otpSuccess && !businessRegistered && <MandatoryDetails 
                                    isNewServiceman={isNewServiceman} 
                                    phone_no={phone_no} 
                                    token={token} 
                                    businessRegistrationSuccessfull={businessRegistrationSuccessfull} 
                                /> 
                }
                {businessRegistered && <div>Business Registered successfully</div>}
            </div>
        </div>
    )
}
"use client"
import { useState } from "react"
import axios from "axios"
export default function OtpForm(props){
    const [otp, setOtp] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(otp)
        // console.log(props.phoneNumber)
        try{
            const data = await axios.post(
              `${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/serviceman/verifyotp`,
              {
                phone_no: props.phoneNumber,
                otp: otp,
                firebase_token: "registered using website",
              },
              {
                headers: {
                  "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
                },
              }
            );
            if (data.status === 200) {
                alert(data.data.message)
                props.otpSuccessfull(data.data.isNewServiceman, data.data.token)
            }
          }catch(e){
            alert("Something went wrong")
          }
    }

    const validateOtp = (otp) => {
        const otpRegex = /^\d{4}$/        
        return otpRegex.test(otp)
    }
    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div>
                        <label htmlFor="otp" className="block text-white text-sm font-bold mb-2">Enter The OTP </label>
                        <div className="flex items-center">
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                pattern="[0-9]{4}"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={otp}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setOtp(value)
                                    if (!validateOtp(value)) {
                                        e.target.setCustomValidity('Please enter a valid 4 digit OTP')
                                    } else {
                                        e.target.setCustomValidity('')
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                        Submit
                    </button>
                </form>
    )
}
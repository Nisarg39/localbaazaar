import { useState } from "react"
import axios from "axios"
export default function PhoneNumber(props){
    const [phoneNumber, setPhoneNumber] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = await axios.post(
            `${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/serviceman/signin`,
            {
              phone_no: phoneNumber,
            },
            {
              headers: {
                "Content-type": "application/x-www-form-urlencoded;charset=UTF-8",
              },
            }
        );
        if (data.status === 200) {
            alert('Please enter the OTP sent to your phone number')
            props.registeredPhoneNumber(phoneNumber)
        } else {
            alert('Shop registration failed')
        }
    }

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]{10}$/
        return phoneRegex.test(phone)
    }

    return(
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div>
                        <label htmlFor="phoneNumber" className="block text-white text-sm font-bold mb-2">Shop Phone Number:</label>
                        <div className="flex items-center">
                            <span className="text-white mr-2">+91</span>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                pattern="[0-9]{10}"
                                required
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={phoneNumber}
                                onChange={(e) => {
                                    const value = e.target.value
                                    setPhoneNumber(value)
                                    if (!validatePhoneNumber(value)) {
                                        e.target.setCustomValidity('Please enter a valid 10-digit phone number')
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
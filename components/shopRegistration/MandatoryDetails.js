"use client"

import { useState, useEffect } from "react"
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import axios from "axios"
import { CloudUpload } from '@mui/icons-material'

export default function MandatoryDetails(props) {
    const [selectedImage, setSelectedImage] = useState(null)
    const [crop, setCrop] = useState({ aspect: 1, unit: '%', width: 100 })
    const [croppedImage, setCroppedImage] = useState(null)
    const [showPreview, setShowPreview] = useState(false)
    const [gstError, setGstError] = useState('')

    const [countries, setCountries] = useState([])
    const [states, setStates] = useState([])
    const [cities, setCities] = useState([])
    const [areas, setAreas] = useState([])

    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [area, setArea] = useState('')
    const [address, setAddress] = useState('')

    const [mainCategory, setMainCategory] = useState('Medical')
    const [subcategory, setSubcategory] = useState('Pharmacy')
    const [description, setDescription] = useState('')
    const [businessName, setBusinessName] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [gstNumber, setGstNumber] = useState('')

    useEffect(() => {
        if(props.isNewServiceman){
            async function getLocation() {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/admin/alllocations`)
                // console.log(response.data)
                setCountries(response.data.countries)
                setStates(response.data.states)
                setCities(response.data.cities)
                setAreas(response.data.areas)

                setCountry(response.data.countries[0].name)
                setState(response.data.states[0].name)
                setCity(response.data.cities[0].name)
                setArea(response.data.areas[0].name)
                
            }
            getLocation()
        }
    }, [])

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                setSelectedImage(e.target.result)
                setShowPreview(true)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCropComplete = (crop, pixelCrop) => {
        const canvas = document.createElement('canvas')
        const image = document.getElementById('sourceImage')
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext('2d')

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        )

        canvas.toBlob(
            (blob) => {
                setCroppedImage(URL.createObjectURL(blob))
            },
            'image/jpeg',
            1
        )
    }

    const handleClosePreview = () => {
        setShowPreview(false)
    }

    const validateGST = (value) => {
        const gstPattern = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/
        if (!gstPattern.test(value)) {
            setGstError('Invalid GST Number')
        } else {
            setGstError('')
            setGstNumber(value)
        }
    }

    async function countryChange(e){
        // console.log(e.target.value)
        setCountry(e.target.value)
        const countryWiseLocation = await axios.post(`${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/admin/countrywiselocation`, {
            country: e.target.value
        }, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            }
        }
        )

        setStates(countryWiseLocation.data.countries.states)
        setCities(countryWiseLocation.data.countries.states[0].cities)
        setAreas(countryWiseLocation.data.countries.states[0].cities[0].areas)

        setState(countryWiseLocation.data.countries.states[0].name);
        setCity(countryWiseLocation.data.countries.states[0].cities[0].name);
        setArea(countryWiseLocation.data.countries.states[0].cities[0].areas[0].name);
    }

    async function stateChange(e) {
        // console.log(e.target.value)
        setState(e.target.value)
        const stateWiseLocation = await axios.post(`${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/admin/statewiselocation`, {
            state: e.target.value
        }, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            }
        }
        )

        setCities(stateWiseLocation.data.states.cities)
        setAreas(stateWiseLocation.data.states.cities[0].areas)

        setCity(stateWiseLocation.data.states.cities[0].name)
        setArea(stateWiseLocation.data.states.cities[0].areas[0].name)
    }

    async function cityChange(e) {
        // console.log(e.target.value)
        setCity(e.target.value)
        const cityWiseLocation = await axios.post(`${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/admin/citywiselocation`, {
            city: e.target.value
        }, {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            }
        }
        )

        setAreas(cityWiseLocation.data.cities.areas)
        setArea(cityWiseLocation.data.cities.areas[0].name)
    }

    async function areaChange(e) {
        // console.log(e.target.value)
        setArea(e.target.value)
    }

  async function handleSubmit(e) {
  e.preventDefault()
    
  if (!businessName || !ownerName || !description || !country || !state || !city || !area || !address || !gstNumber || !mainCategory || !subcategory || !croppedImage) {
      alert('Please fill all the fields')
      return
  } else {
      const data = new FormData()
        
      // Convert base64 to blob so that it gets detected as a file instead of a string
      const base64Response = await fetch(croppedImage);
      const blob = await base64Response.blob();
        
      data.append('business_pic', blob, `${businessName}.jpg`);
      data.append('business_name', businessName)
      data.append('owner_name', ownerName)
      data.append('description', description)
      data.append('country', country)
      data.append('state', state)
      data.append('city', city)
      data.append('area', area)
      data.append('address', address)
      data.append('GST_number', gstNumber)
      data.append('main_categories', mainCategory)
      data.append('sub_categories', subcategory)

          const result = await axios.post(`${process.env.NEXT_PUBLIC_HOSTURL}/api/v1/serviceman/mandatorydetails/`,
              data,
              {
                  headers: {
                      "Content-type": "multipart/form-data",
                      "Authorization": props.token
                  },
              }
          )
            
          if (result.status === 200) {
              props.businessRegistrationSuccessfull()
          } else {
              alert('Error submitting details. Please try again later');
          }
  }
}
    return (
        <div className="container mx-auto px-4 py-12 text-white">
            {!props.isNewServiceman && (
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-gray-200 mb-6">
                        You are already registered with us. Login through the app to continue.
                    </h1>
                </div>
            )}
            {props.isNewServiceman && (
                <div className="max-w-3xl mx-auto rounded-lg shadow-xl p-8">
                    <h2 className="text-4xl font-bold text-blue-400 mb-8 text-center">MANDATORY DETAILS</h2>
                    <form className="space-y-8">
                        <div className="flex flex-col items-center">
                            <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">Business Image:</label>
                            <label htmlFor="image" className="cursor-pointer flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-600 rounded-full hover:border-blue-400 transition-colors duration-300">
                                <CloudUpload className="text-gray-500 w-12 h-12" />
                            </label>
                            <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required className="hidden" />
                        </div>
                        {showPreview && selectedImage && (
                            <div className="flex flex-col items-center bg-gray-800 p-4 rounded-lg">
                                <ReactCrop
                                    src={selectedImage}
                                    crop={crop}
                                    onChange={(newCrop) => setCrop(newCrop)}
                                    onComplete={handleCropComplete}
                                    aspect={1}
                                    circularCrop
                                >
                                    <img id="sourceImage" src={selectedImage} alt="Selected" className="max-w-full h-auto" />
                                </ReactCrop>
                                <p className="text-sm text-gray-400 mt-3">Drag to adjust the circular crop</p>
                                <button onClick={handleClosePreview} className="mt-4 px-6 py-2 text-white font-semibold bg-red-700 rounded-full hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 transition-colors duration-300">Close Preview</button>
                            </div>
                        )}
                        {croppedImage && (
                            <div className="flex justify-center">
                                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500">
                                    <img src={croppedImage} alt="Cropped" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        )}
                        <div>
                            <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">Business Name:</label>
                            <input type="text" id="businessName" name="businessName" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                values={businessName} onChange={(e) => setBusinessName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="ownerName" className="block text-sm font-medium text-gray-300 mb-2">Owner Name:</label>
                            <input type="text" id="ownerName" name="ownerName" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                values={ownerName} onChange={(e) => setOwnerName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-300 mb-2">GST Number:</label>
                            <input 
                                type="text" 
                                id="gstNumber" 
                                name="gstNumber" 
                                required 
                                className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                onChange={(e) => validateGST(e.target.value)}
                                values={gstNumber}
                            />
                            {gstError && <p className="text-red-400 text-sm mt-2">{gstError}</p>}
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description:</label>
                            <textarea id="description" name="description" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 h-40 resize-none text-gray-200 bg-gray-800"
                                onChange={(e) => setDescription(e.target.value)}
                            >
                                {description}
                            </textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="mainCategory" className="block text-sm font-medium text-gray-300 mb-2">Main Category:</label>
                                <select id="mainCategory" name="mainCategory" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800"
                                    onChange={(e) => setMainCategory(e.target.value)}
                                >
                                    <option value="Medical">Medical</option>
                                    {/* Add options here */}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="subCategory" className="block text-sm font-medium text-gray-300 mb-2">Sub Category:</label>
                                <select id="subCategory" name="subCategory" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800"
                                    onChange={(e) => setSubCategory(e.target.value)}
                                >
                                    <option value="Pharmacy" key="Pharmacy">Pharmacy</option>
                                    <option value="Laboratory" key="Laboratory">Laboratory</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-2">Country:</label>
                                <select id="country" name="country" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                    onChange={countryChange}
                                >
                                    {countries.map((country) => (
                                        <option value={country.name} key={country.name}>{country.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="state" className="block text-sm font-medium text-gray-300 mb-2">State:</label>
                                <select id="state" name="state" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800"
                                    onChange={stateChange}
                                >
                                    {states.map((state) => (
                                        <option value={state.name} key={state.name}>{state.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-2">City:</label>
                                <select id="city" name="city" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                    onChange={cityChange}
                                >
                                    {cities.map((city) => (
                                        <option value={city.name} key={city.name}>{city.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-2">Area:</label>
                                <select id="area" name="area" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800"
                                    onChange={areaChange}
                                >
                                    {areas.map((area) => (
                                        <option value={area.name} key={area.name}>{area.name}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="address" className="block text-sm font-medium text-gray-300 mb-2">Address:</label>
                            <input type="text" id="address" name="address" required className="w-full px-4 py-3 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-200 bg-gray-800" 
                                onChange={(e) => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                        <button type="submit" onClick={handleSubmit} className="w-full px-6 py-3 text-white font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 text-lg">Submit</button>
                    </form>
                </div>
            )}
        </div>
    )
}
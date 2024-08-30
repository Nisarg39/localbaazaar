import Image from "next/image"

export default function RetailerGuide(){
    return(
        <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-black to-gray-900 py-16">
            <h2 
            className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 flex items-center justify-center">
                RETAILER's GUIDE
            </h2>
            <div className="flex items-center justify-center max-w-6xl w-full">
                <div className="flex flex-col items-center">
                    <div className="w-1 h-full bg-gradient-to-b from-indigo-300 via-purple-500 to-pink-500 relative animate-pulse">
                    </div>
                </div>
                <div className="mx-4 md:mx-4 lg:mx-8 space-y-8 md:space-y-8 lg:space-y-12">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/14477/14477419.png" alt="Create Account" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg mr-4 md:mr-6 lg:mr-8 transition-transform hover:rotate-12" width={96} height={96} />
                        <div className="ml-2 md:ml-3 lg:ml-4">
                            <h3 className="text-xl md:text-lg lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Create An Account</h3>
                            <p className="mb-2 text-gray-300 text-sm md:text-xs lg:text-lg leading-relaxed">Sign up through app for LocalBaazaar account to start your journey.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/8662/8662284.png" alt="Record Video" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg mr-4 md:mr-6 lg:mr-8 transition-transform hover:rotate-12" width={96} height={96} />
                        <div className="ml-2 md:ml-3 lg:ml-4">
                            <h3 className="text-xl md:text-lg lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Register Your Shop</h3>
                            <p className="mb-2 text-gray-300 text-sm md:text-xs lg:text-lg leading-relaxed">Enter details about your Shop correctly to get registered.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/10847/10847651.png" alt="Wait For The Customer's Request" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg mr-4 md:mr-6 lg:mr-8 transition-transform hover:rotate-12" width={96} height={96} />
                        <div className="ml-2 md:ml-3 lg:ml-4">
                            <h3 className="text-xl md:text-lg lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Wait For The Customer's Request</h3>
                            <p className="mb-2 text-gray-300 text-sm md:text-xs lg:text-lg leading-relaxed">You will be notified whenever a Customer makes a request in your area.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/8524/8524504.png" alt="Chat with Retailers" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg mr-4 md:mr-6 lg:mr-8 transition-transform hover:rotate-12" width={96} height={96} />
                        <div className="ml-2 md:ml-3 lg:ml-4">
                            <h3 className="text-xl md:text-lg lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Send A Response Immediately</h3>
                            <p className="mb-2 text-gray-300 text-sm md:text-xs lg:text-lg leading-relaxed">Send a response video quickly to increase your chance of getting a deal.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-4 md:p-6 lg:p-8 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/6663/6663862.png" alt="Chat with Retailers" className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-2xl shadow-lg mr-4 md:mr-6 lg:mr-8 transition-transform hover:rotate-12" width={96} height={96} />
                        <div className="ml-2 md:ml-3 lg:ml-4">
                            <h3 className="text-xl md:text-lg lg:text-3xl font-bold mb-2 md:mb-3 lg:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">Chat With Customer</h3>
                            <p className="mb-2 text-gray-300 text-sm md:text-xs lg:text-lg leading-relaxed">Chat with customers if they have any query regarding your offer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
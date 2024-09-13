import Image from "next/image"

export default function CustomerGuide(){
    return(
        <section className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-b from-black to-gray-900 py-16">
            <h2 
            className="text-4xl md:text-4xl lg:text-5xl font-extrabold mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                CUSTOMER's GUIDE
            </h2>
            <div className="flex items-center justify-center max-w-4xl w-full">
                <div className="flex flex-col items-center">
                    <div className="w-1 h-full bg-gradient-to-b from-indigo-300 via-purple-500 to-pink-500 relative animate-pulse">
                    </div>
                </div>
                <div className="mx-2 md:mx-3 lg:mx-6 space-y-6 md:space-y-7 lg:space-y-10">
                    <div className="bg-gradient-to-br from-gray-900 to-black p-3 md:p-4 lg:p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-yellow-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/14477/14477419.png" alt="Create Account" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl shadow-lg mr-2 md:mr-3 lg:mr-4 transition-transform hover:rotate-12" width={64} height={64} />
                        <div className="ml-1 md:ml-2 lg:ml-3">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 lg:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Create An Account</h3>
                            <p className="mb-1 text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">Sign up through app for LocalBaazaar account to start your journey.</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-3 md:p-4 lg:p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/8524/8524504.png" alt="Record Video" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl shadow-lg mr-2 md:mr-3 lg:mr-4 transition-transform hover:rotate-12" width={64} height={64} />
                        <div className="ml-1 md:ml-2 lg:ml-3">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 lg:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Record Your Query</h3>
                            <p className="mb-1 text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">Record Your Query and Select relevant category</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-3 md:p-4 lg:p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/6663/6663862.png" alt="Chat with Retailers" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl shadow-lg mr-2 md:mr-3 lg:mr-4 transition-transform hover:rotate-12" width={64} height={64} />
                        <div className="ml-1 md:ml-2 lg:ml-3">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 lg:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Chat With Retailers</h3>
                            <p className="mb-1 text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">Get responses from the retailers and chat with them for futher information</p>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-900 to-black p-3 md:p-4 lg:p-5 rounded-3xl shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20 flex items-center transform hover:-translate-y-2">
                        <Image src="https://cdn-icons-png.flaticon.com/256/5149/5149035.png" alt="Make A Deal" className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-2xl shadow-lg mr-2 md:mr-3 lg:mr-4 transition-transform hover:rotate-12" width={64} height={64} />
                        <div className="ml-1 md:ml-2 lg:ml-3">
                            <h3 className="text-base md:text-lg lg:text-xl font-bold mb-1 md:mb-2 lg:mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">Make A Deal</h3>
                            <p className="mb-1 text-gray-300 text-xs md:text-sm lg:text-base leading-relaxed">Make a deal that fits your conditions and review the services provided by the Retailer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
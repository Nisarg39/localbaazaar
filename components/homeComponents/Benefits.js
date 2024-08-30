export default function Benefits() {
    return(
        <section id="benefits" className="w-full bg-black text-white py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 sm:mb-8 md:mb-12 lg:mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-red-500 flex items-center justify-center text-center">
                    BENEFITS
                </h2>
                <p className="text-xl sm:text-2xl text-center mb-8 sm:mb-12 text-gray-300">
                    We are the only service in the world to use a video-based approach to solve the problem, leveraging the power of visual communication.
                </p>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
                    <div className="retailer-benefits bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 transform hover:-translate-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-yellow-400 flex items-center">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                            Retailer Benefits
                        </h3>
                        <ul className="space-y-4 sm:space-y-6">
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-pink-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Increased Visibility to Localites</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-pink-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Simple and Direct Contact with Customer</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-pink-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">No need to pay extra for Promotions</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-pink-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Fair chance to every Retailer</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-pink-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Boost in Customer Approach</span>
                            </li>
                        </ul>
                    </div>
                    <div className="customer-benefits bg-gradient-to-br from-gray-900 to-black rounded-lg p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700 transform hover:-translate-y-2">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-blue-400 flex items-center">
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            Customer Benefits
                        </h3>
                        <ul className="space-y-4 sm:space-y-6">
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">No need to visit Multiple Retailers</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">All the Retailers will Contact You</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Your Privacy will be maintained through App</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Easy Price Comparison</span>
                            </li>
                            <li className="flex items-center group">
                                <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-3 sm:mr-4 text-green-400 group-hover:text-purple-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200 text-base sm:text-lg">Trust of Authenticity from Local Retailers</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
import Image from "next/image";

export default function HeroSection(){
    return(
        <section
            id="hero"
            className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-r from-gray-100 to-gray-300"
        >
            <div className="w-full md:w-1/2 flex flex-row items-center justify-center bg-black py-8 md:py-0 md:h-screen pb-0 shadow-2xl">
                <Image
                    src="/Local_Baazaar.png" alt="Local_Baazaar" width={300} height={300}
                    className="w-3/4 h-3/4 object-cover rounded-lg transition-transform duration-300 hover:scale-110 shadow-xl"
                />
            </div>
            <div className="w-full md:w-1/2 px-6 md:px-16 flex flex-col items-start justify-center py-12 md:h-screen"> 
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-center md:text-left text-gray-800 leading-tight">
                    Connect with <span className="text-blue-600">Local Retailers</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl mb-10 text-center md:text-left text-gray-700 leading-relaxed">
                    Local Baazaar is an App that allows Customer to communicate with Local Retailers in a very simple way and help's you select Best Deal For Free
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mt-8 w-full justify-center md:justify-start">
                    <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center border border-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 shadow-lg">
                        <Image src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="Google Play Store" width={24} height={24} className="mr-2 sm:mr-4" />
                        <span className="text-base sm:text-lg font-semibold">Google Play</span>
                    </button>
                    <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center border border-white transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-800 shadow-lg">
                        <Image src="https://cdn-icons-png.flaticon.com/128/5977/5977575.png" alt="Apple App Store" width={24} height={24} className="mr-2 sm:mr-4" />
                        <span className="text-base sm:text-lg font-semibold">App Store</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
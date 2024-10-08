import Image from "next/image";

export default function HeroSection(){
    return(
           <section id="hero" className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-black overflow-hidden">
            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
                            Connect with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Nearby Stores</span>
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-10 max-w-2xl mx-auto lg:mx-0">
                            Shop Radar simplifies communication with nearby stores, helping you find the best deals for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-6 justify-center lg:justify-start">
                            <button className="bg-white text-indigo-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 shadow-lg hover:shadow-xl">
                                <Image src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="Google Play Store" width={20} height={20} className="mr-2 sm:mr-4" />
                                <span className="text-base sm:text-lg font-semibold">Google Play</span>
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-indigo-900 shadow-lg hover:shadow-xl">
                                <Image src="https://cdn-icons-png.flaticon.com/128/831/831276.png" alt="App Store" width={20} height={20} className="mr-2 sm:mr-4" />
                                <span className="text-base sm:text-lg font-semibold">App Store</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                            <Image
                                src="/Shop_Radar.png"
                                alt="Shop Radar"
                                layout="fill"
                                objectFit="contain"
                                className="filter drop-shadow-2xl transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
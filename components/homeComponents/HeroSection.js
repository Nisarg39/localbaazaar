import Image from "next/image";

export default function HeroSection(){
    return(
           <section id="hero" className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-black overflow-hidden">
            <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                            Connect with your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Nearby Stores</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto lg:mx-0">
                            Local Baazaar simplifies communication with nearby stores, helping you find the best deals for your needs.
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
                            <button className="bg-white text-indigo-900 px-8 py-4 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-100 shadow-lg hover:shadow-xl">
                                <Image src="https://cdn-icons-png.flaticon.com/128/300/300218.png" alt="Google Play Store" width={24} height={24} className="mr-4" />
                                <span className="text-lg font-semibold">Google Play</span>
                            </button>
                            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-indigo-900 shadow-lg hover:shadow-xl">
                                <Image src="https://cdn-icons-png.flaticon.com/128/831/831276.png" alt="App Store" width={24} height={24} className="mr-4" />
                                <span className="text-lg font-semibold">App Store</span>
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="relative w-96 h-96 md:w-[32rem] md:h-[32rem]">
                            <Image
                                src="/Local_Baazaar.png"
                                alt="Local Baazaar"
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
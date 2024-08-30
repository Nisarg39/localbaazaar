import Image from "next/image"
import Link from "next/link";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center justify-center w-full min-h-screen bg-gradient-to-b from-black to-gray-900"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-start justify-center">
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">ABOUT US</h2>
            <p className="text-center md:text-left max-w-2xl mb-12 text-gray-300 leading-relaxed text-base md:text-lg">
              Local Baazaar is an Indian Startup originating from Pune. Founded in 2023, we connect small businesses (Retailers)
              with Customers using unique way of communication and with more privacy. Our mission is to provide equal opportunities to every Local Retail Business.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
              <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="font-semibold text-2xl md:text-3xl mb-1 text-yellow-400">
                  500+
                </h3>
                <p className="text-xs md:text-sm text-gray-300">Retailers</p>
              </div>
              <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="font-semibold text-2xl md:text-3xl mb-1 text-yellow-400">
                  50+
                </h3>
                <p className="text-xs md:text-sm text-gray-300">Categories</p>
              </div>
              <div className="text-center bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <h3 className="font-semibold text-2xl md:text-3xl mb-1 text-yellow-400">
                  10,000+
                </h3>
                <p className="text-xs md:text-sm text-gray-300">Happy Customers</p>
              </div>
            </div>
            <div className="text-center bg-gray-800 p-3 rounded-lg shadow-lg border-2 border-yellow-400 mb-8 hover:border-yellow-300 transition-colors duration-300">
              <h3 className="font-semibold text-lg md:text-xl mb-1 text-yellow-400">
                Our Address
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                Wanowrie, Pune - 40, Maharashtra, India
              </p>
              <div className="mt-1">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 transition duration-300 text-xs underline">
                  View on Map
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">CONTACT US</h3>
            <form className="w-full space-y-4">
              <div>
                <label htmlFor="name" className="block text-yellow-400 mb-1 text-sm md:text-base">Name</label>
                <input type="text" id="name" name="name" className="w-full p-2 bg-gray-800 text-gray-300 rounded focus:ring-2 focus:ring-yellow-400 transition duration-300" />
              </div>
              <div>
                <label htmlFor="email" className="block text-yellow-400 mb-1 text-sm md:text-base">Email</label>
                <input type="email" id="email" name="email" className="w-full p-2 bg-gray-800 text-gray-300 rounded focus:ring-2 focus:ring-yellow-400 transition duration-300" />
              </div>
              <div>
                <label htmlFor="message" className="block text-yellow-400 mb-1 text-sm md:text-base">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full p-2 bg-gray-800 text-gray-300 rounded focus:ring-2 focus:ring-yellow-400 transition duration-300"></textarea>
              </div>
              <button type="submit" className="w-full md:w-auto bg-yellow-400 text-black py-2 px-4 rounded hover:bg-yellow-300 transition duration-300 transform hover:scale-105 text-sm md:text-base">Send Message</button>
            </form>
            <div className="flex flex-col items-center w-full mt-12">
              <div className="flex space-x-4 md:space-x-8 mb-8">
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 transition duration-300 transform hover:scale-110">
                  <Image src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png" width={36} height={36} alt="WhatsApp" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                </a>
                <a href="https://www.instagram.com/localbaazaar" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 transition duration-300 transform hover:scale-110">
                  <Image src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" width={36} height={36} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                </a>
                <a href="mailto:info@localbaazaar.com" className="text-yellow-400 hover:text-yellow-200 transition duration-300 transform hover:scale-110">
                  <Image src="https://cdn-icons-png.flaticon.com/128/2965/2965306.png" width={36} height={36} alt="Email" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                </a>
                <a href="https://www.facebook.com/localbaazaar" target="_blank" rel="noopener noreferrer" className="text-yellow-400 hover:text-yellow-200 transition duration-300 transform hover:scale-110">
                  <Image src="https://cdn-icons-png.flaticon.com/128/733/733547.png" width={36} height={36} alt="Facebook" className="w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12" />
                </a>
              </div>
              <div className="text-center">
                <Link
                  href="/privacy-policy"
                  className="text-yellow-400 hover:text-yellow-200 hover:underline mr-2 md:mr-6 transition duration-300 text-xs md:text-sm"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms&conditions"
                  className="text-yellow-400 hover:text-yellow-200 hover:underline mr-2 md:mr-6 transition duration-300 text-xs md:text-sm"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/refund-policy"
                  className="text-yellow-400 hover:text-yellow-200 hover:underline transition duration-300 text-xs md:text-sm"
                >
                  Refund Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} LocalBaazaar. All rights reserved.
        </div>
      </div>
    </section>
  );
}
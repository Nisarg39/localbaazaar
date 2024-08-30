import Navbar from "@/components/Navbar";
import HeroSection from "@/components/homeComponents/HeroSection";
import CustomerGuide from "@/components/homeComponents/CustomerGuide";
import AboutUs from "@/components/homeComponents/AboutUs";
import RetailerGuide from "@/components/homeComponents/RetailerGuide";
import Benefits from "@/components/homeComponents/Benefits";
export default function Home() {
  return (
   <div id="home" className="w-full" >
      <HeroSection />
      <Benefits />
      <CustomerGuide />
      <RetailerGuide />
      <AboutUs />
    </div>
  );
}

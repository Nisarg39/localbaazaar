import Navbar from "@/components/Navbar";
import HeroSection from "@/components/homeComponents/HeroSection";
import QuickGuide from "@/components/homeComponents/QuickGuide";
import AboutUs from "@/components/homeComponents/AboutUs";
import RetailerGuide from "@/components/homeComponents/RetailerGuide";
export default function Home() {
  return (
   <div id="home" className="w-full" >
      <HeroSection />
      <QuickGuide />
      <RetailerGuide />
      <AboutUs />
    </div>
  );
}

import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Uhai } from "../components/sections/Uhai"; 
import { RevealOnScroll } from "../components/RevealOnScroll";
import Footer from "../components/Footer";

const Tuhai = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Background */}
      <div className="flex items-center justify-center min-h-screen relative">
        <ParallaxBackground />
        <HeroText />
      </div>

      {/* Uhai Section with RevealOnScroll */}
      <section className="bg-black text-white">
        <RevealOnScroll>
          <Uhai />
          <Footer/>
        </RevealOnScroll>
      </section>
    </div>
  );
};

export default Tuhai;

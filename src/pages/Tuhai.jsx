import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
const Tuhai = () => {
  return (
    <div className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
      <HeroText />
      <ParallaxBackground />
    </div>
  );
};

export default Tuhai;

import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import mainIcon from "../assets/mainIconsdark.svg"; // Adjust path if needed

const HeroText = () => {
  const words = ["ВЕБ ХӨГЖҮҮЛЭГЧ", "КОНТЕНТ БҮТЭЭГЧ", "ХИЙМЭЛ ОЮУН УХААН"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="relative z-10 mt-20 md:mt-40 flex flex-col md:flex-row justify-between items-start rounded-3xl bg-clip-text">
      
      {/* Left Side — Desktop Text */}
      <div className="flex-col hidden md:flex c-space w-1/2 pl-10">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 bg-clip-text text-transparent font-extrabold">
            Hi, Бид бол Хөгжлийн Цахим Галт Жигүүр
          </span>
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-gray-500"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Манай <br /> байгууллага нь
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-black text-white text-7xl md:text-6xl leading-tight tracking-wide"
            />
          </motion.div>
          <motion.p
            className="text-4xl md:text-3xl font-medium text-gray-400 leading-tight tracking-wide"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Сургалт явуулдаг.
          </motion.p>
        </div>
      </div>

      {/* Right Side — SVG (Desktop Only) */}
      <div className="hidden md:flex w-1/2 justify-center">
        <img src={mainIcon} alt="Main Icon" className="w-80 h-auto" />
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center text-center space-y-6 md:hidden">
        <motion.p
          className="text-4xl font-medium text-white"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi,
        </motion.p>
        <div>
          <motion.p
            className="text-5xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Бид
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              words={words}
              className="font-bold text-white text-5xl break-words text-center"
            />
          </motion.div>
          <motion.p
            className="text-4xl font-black text-white"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            сургалт явуулдаг.
          </motion.p>
        </div>
      </div>

    </div>
  );
};

export default HeroText;

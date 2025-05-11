import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";

const HeroText = () => {
  const words = ["ВЕБ ХӨГЖҮҮЛЭГЧ", "КОНТЕНТ БҮТЭЭГЧ", "ХИЙМЭЛ ОЮУН УХААН"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          
          <span className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-400 bg-clip-text text-transparent font-extrabold">
           Hi, Бид бол Хөгжлийн Цахим{" "} Галт Жигүүр
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

      {/* Mobile View */}
      <div className="flex- flex-col space-y-6 md:hidden">
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
              className="font-bold text-white text-7xl "
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

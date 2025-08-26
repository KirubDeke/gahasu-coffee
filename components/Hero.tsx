"use client";

import Image from "next/image";
import { FaWater, FaBoxOpen, FaCheckCircle } from "react-icons/fa";
import ButtonOne from "./ui/ButtonOne";
import { motion, Variants } from "framer-motion";

// Motion Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-background flex flex-col items-center px-6 sm:px-12 lg:px-20 overflow-hidden py-8">
      {/* Title Behind Image */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] xl:text-[10rem] font-bold text-white/40 z-0 leading-none select-none pointer-events-none whitespace-nowrap"
      >
        Gahasu Coffee
      </motion.h1>

      {/* Coffee Bean Image with Floating Animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-28 md:mt-15"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src="/images/coffee-bean.png"
            alt="Coffee Bean"
            width={900}
            height={1100}
            className="object-contain w-full h-full max-h-[40vh] md:max-h-[50vh]"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="max-w-screen-xl w-full flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10 relative z-10 mt-8 md:mt-12"
      >
        {/* Left Text Block */}
        <motion.div
          variants={fadeInUp}
          className="flex-1 text-justify sm:text-center lg:text-left space-y-4 md:space-y-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight"
          >
            From Farm to Export
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-white/60 text-sm sm:text-base md:text-lg max-w-md mx-auto lg:mx-0"
          >
            Processing premium coffee beans with care and precision, ready for
            international markets. Quality, consistency, and sustainability in
            every batch.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex justify-start sm:justify-center lg:justify-start"
          >
            <ButtonOne>Learn More</ButtonOne>
          </motion.div>
        </motion.div>

        {/* Right Features */}
        <motion.div
          variants={staggerContainer}
          className="flex-1 flex flex-col justify-center space-y-4 md:space-y-6 w-full max-w-sm mx-auto lg:mx-0"
        >
          {/* Feature 1 */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start space-x-3 md:space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-foreground text-white p-2 md:p-3 rounded-lg mt-1 flex-shrink-0"
            >
              <FaWater size={20} />
            </motion.div>
            <div>
              <span className="font-semibold text-white text-sm md:text-base">
                Careful Processing
              </span>
              <p className="text-white/60 text-xs md:text-sm">
                Washed, sorted, and dried to perfection.
              </p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start space-x-3 md:space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-foreground text-white p-2 md:p-3 rounded-lg mt-1 flex-shrink-0"
            >
              <FaBoxOpen size={20} />
            </motion.div>
            <div>
              <span className="font-semibold text-white text-sm md:text-base">
                Export Ready
              </span>
              <p className="text-white/60 text-xs md:text-sm">
                Beans processed and packed for global markets.
              </p>
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            variants={fadeInUp}
            className="flex items-start space-x-3 md:space-x-4"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="bg-foreground text-white p-2 md:p-3 rounded-lg mt-1 flex-shrink-0"
            >
              <FaCheckCircle size={20} />
            </motion.div>
            <div>
              <span className="font-semibold text-white text-sm md:text-base">
                Consistent Quality
              </span>
              <p className="text-white/60 text-xs md:text-sm">
                Every batch meets international standards.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-foreground/30 blur-xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2, delay: 1.2 }}
        className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-foreground/30 blur-xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2, delay: 1.4 }}
        className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-foreground/20 blur-xl"
      />
    </section>
  );
}

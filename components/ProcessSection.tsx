"use client";
import { FaCheckCircle, FaWater, FaSun, FaBox } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      icon: <FaCheckCircle className="w-8 h-8" />,
      title: "Selection & Sorting",
      description:
        "Hand-picked selection of premium coffee cherries with meticulous sorting to ensure only the highest quality beans.",
    },
    {
      icon: <FaWater className="w-8 h-8" />,
      title: "Washing & Fermentation",
      description:
        "Careful washing and controlled fermentation to develop optimal flavors while maintaining bean integrity.",
    },
    {
      icon: <FaSun className="w-8 h-8" />,
      title: "Drying & Grading",
      description:
        "Sun-drying on raised beds followed by precise grading to meet international quality standards.",
    },
    {
      icon: <FaBox className="w-8 h-8" />,
      title: "Packing & Export",
      description:
        "Vacuum-sealed packaging with proper labeling for export, ensuring freshness and traceability.",
    },
  ];

  // Animation Variants
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="w-full bg-customWhite py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-background mb-4">
            Our Process / How We Work
          </h2>
          <p className="text-customBlack text-lg max-w-3xl mx-auto">
            Every step of our coffee processing is designed to ensure the
            highest quality while maintaining sustainable practices and
            preserving the unique characteristics of each bean.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeUp} className="text-center">
              {/* Step Number */}
              <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-20 h-20 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                {step.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-background mb-4">
                {step.title}
              </h3>
              <p className="text-customBlack text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Assurance Note */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mt-16 p-6 bg-background rounded-2xl border"
        >
          <h4 className="text-2xl font-bold text-white mb-3">
            Quality Assurance
          </h4>
          <p className="text-customWhite/80">
            At every stage of our process, we implement rigorous quality control
            measures to ensure that only the finest coffee reaches our
            customers. From farm to cup, quality is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

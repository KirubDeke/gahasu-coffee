"use client";

import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Animation variants with proper typing
const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const modalVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.1 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const modalContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="about"
        className="w-full bg-customWhite py-16 px-4 sm:px-6 lg:px-20 overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image on Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="flex-1"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/coffee-leaf.png"
                  alt="About Gahasu Coffee"
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content on Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="flex-1 space-y-6"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-background"
            >
              About Gahasu Coffee
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-customBlackLighter leading-relaxed"
            >
              Gahasu Coffee specializes in processing premium quality Sidama
              region coffee beans from Ethiopia for export standards. Our
              expertise ensures that every batch meets international quality
              requirements while maintaining the unique characteristics of
              Ethiopian coffee.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-customBlackLighter leading-relaxed"
            >
              Through careful processing and meticulous quality control, we
              transform exceptional Ethiopian coffee cherries into export-ready
              beans that consistently meet the highest international standards
              demanded by specialty coffee markets worldwide.
            </motion.p>

            {/* Button at Bottom */}
            <motion.div
              variants={fadeInUp}
              className="pt-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonOne onClick={() => setIsModalOpen(true)}>
                Read More
              </ButtonOne>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              variants={scaleIn}
              className="bg-customWhite rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <motion.div
                  variants={modalContentVariants}
                  className="flex justify-between items-center mb-6"
                >
                  <h3 className="text-2xl font-bold text-background">
                    Our Story
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="text-customBlackLighter hover:text-background"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                </motion.div>

                <motion.div
                  variants={modalContentVariants}
                  className="space-y-4 text-customBlackLighter"
                >
                  <p>
                    Gahasu Coffee was founded five years ago by two passionate
                    brothers, Hagos Garedew and Surafel Garedew. With a shared
                    vision to bring the exceptional quality of Ethiopian coffee
                    to the world market, they established a processing company
                    focused on excellence and sustainability.
                  </p>
                  <p>
                    Starting with a small operation in the Sidama region, the
                    brothers combined their expertise in agriculture and
                    business to create a company that respects traditional
                    coffee growing practices while implementing modern
                    processing techniques.
                  </p>
                  <p>
                    Today, Gahasu Coffee has grown into a respected exporter
                    known for consistently delivering premium quality beans that
                    meet rigorous international standards. Our commitment to
                    quality begins at the source, working directly with local
                    farmers who share our dedication to sustainable practices.
                  </p>
                  <p>
                    What sets us apart is our meticulous attention to every step
                    of the processing journey - from selective harvesting to
                    careful drying and sorting. This ensures that the unique
                    flavor profiles of Sidama coffee are preserved and enhanced,
                    resulting in a product that truly represents the best of
                    Ethiopian coffee heritage.
                  </p>
                  <p>
                    As we continue to grow, we remain committed to our founding
                    principles: quality, sustainability, and supporting the
                    local communities that make our work possible. Every batch
                    of Gahasu Coffee carries not just the rich flavors of
                    Ethiopia, but also the story of two brothers' dedication to
                    sharing their heritage with the world.
                  </p>
                </motion.div>

                <motion.div
                  variants={modalContentVariants}
                  className="mt-8"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ButtonOne onClick={() => setIsModalOpen(false)}>
                    Close
                  </ButtonOne>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

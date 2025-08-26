"use client";
import Image from "next/image";
import ButtonOne from "./ui/ButtonOne";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardHover: Variants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const imageHover: Variants = {
  hover: {
    scale: 1.1,
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

// Define product type
type Product = {
  id: number;
  name: string;
  description: string;
  process: string;
  altitude: string;
  grade: string;
  image: string;
  fullDescription: string;
  flavorProfile: string;
  moistureContent: string;
  screenSize: string;
  certification: string;
  origin: string;
};

export default function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products: Product[] = [
    {
      id: 1,
      name: "Premium Washed Arabica",
      description:
        "Carefully washed and sun-dried, our Arabica beans offer a smooth, balanced flavor with notes of chocolate and citrus.",
      process: "Fully Washed Process",
      altitude: "1800-2000 MASL",
      grade: "Grade AA",
      image: "/images/arabica.jpg",
      fullDescription:
        "Our Premium Washed Arabica beans are meticulously processed using traditional methods combined with modern quality control. Grown in the fertile highlands of Sidama, these beans undergo a thorough washing process that enhances their natural sweetness and clarity of flavor. The result is a well-balanced cup with pronounced chocolate notes, bright citrus acidity, and a clean finish that exemplifies the best of Ethiopian coffee craftsmanship.",
      flavorProfile: "Chocolate, Citrus, Caramel, Floral",
      moistureContent: "10-12%",
      screenSize: "16-18",
      certification: "Specialty Grade",
      origin: "Sidama Region, Ethiopia",
    },
  ];

  const openModal = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section
        id="products"
        className="w-full bg-background py-20 px-4 sm:px-6 lg:px-20 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Featured Coffee Products
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-customWhite/70 dark:text-customWhite/70 text-lg max-w-3xl mx-auto"
            >
              Discover our premium selection of carefully processed coffee
              beans, each offering unique flavors and characteristics from our
              washing station.
            </motion.p>
          </motion.div>

          {/* Centered Single Product */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="flex justify-center"
          >
            <motion.div
              variants={{ ...scaleIn, hover: cardHover.hover }}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="max-w-md bg-white dark:bg-white rounded-2xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Product Image */}
              <motion.div
                className="relative h-48 w-full overflow-hidden"
                variants={imageHover}
                whileHover="hover"
              >
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* Product Details */}
              <div className="p-6">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-background mb-2"
                >
                  {products[0].name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-customBlack text-lg mb-4"
                >
                  {products[0].description}
                </motion.p>

                {/* Process Details */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-2 mb-6"
                >
                  <div className="flex justify-between">
                    <span className="text-customBlack text-sm">Process:</span>
                    <span className="text-foreground text-sm font-medium">
                      {products[0].process}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-customBlack text-sm">Altitude:</span>
                    <span className="text-foreground text-sm font-medium">
                      {products[0].altitude}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-customBlack text-sm">Grade:</span>
                    <span className="text-foreground text-sm font-medium">
                      {products[0].grade}
                    </span>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex space-x-3"
                >
                  <ButtonOne
                    className="flex-1 text-center justify-center py-2 text-sm"
                    onClick={() => openModal(products[0])}
                  >
                    View Details
                  </ButtonOne>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProduct && (
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-background bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              variants={scaleIn}
              className="bg-customWhite rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <motion.div
                  variants={modalContentVariants}
                  className="flex justify-between items-center mb-6"
                >
                  <h3 className="text-2xl font-bold text-background">
                    {selectedProduct.name}
                  </h3>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
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
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
                >
                  {/* Product Image */}
                  <motion.div
                    variants={modalContentVariants}
                    className="relative h-64 w-full rounded-lg overflow-hidden"
                  >
                    <Image
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      fill
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Product Details */}
                  <div className="space-y-4">
                    <motion.div variants={modalContentVariants}>
                      <h4 className="text-lg font-semibold text-background mb-2">
                        Description
                      </h4>
                      <p className="text-customBlackLighter">
                        {selectedProduct.fullDescription}
                      </p>
                    </motion.div>

                    <motion.div
                      variants={modalContentVariants}
                      className="grid grid-cols-2 gap-4"
                    >
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Flavor Profile
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.flavorProfile}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Origin
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.origin}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Moisture Content
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.moistureContent}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Screen Size
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.screenSize}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Certification
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.certification}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-background mb-1">
                          Process
                        </h4>
                        <p className="text-customBlackLighter text-sm">
                          {selectedProduct.process}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={modalContentVariants}
                  className="border-t pt-4"
                >
                  <div className="flex justify-end">
                    <ButtonOne onClick={closeModal}>Close</ButtonOne>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
